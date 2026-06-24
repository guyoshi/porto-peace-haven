/* PORTO PEACE HAVEN — ANALYTICS TRACKING V2
   Behavioural events for GA4 via Google Tag Manager.
   No free-text feedback, names, phone numbers or other personal data are sent. */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  const recentEvents = new Map();

  function getRoom() {
    try {
      return localStorage.getItem('pph-room') || 'unknown';
    } catch (error) {
      return 'unknown';
    }
  }

  function getLanguage() {
    try {
      if (typeof currentLang !== 'undefined' && currentLang) return currentLang;
    } catch (error) {}
    return document.documentElement.lang || 'unknown';
  }

  function currentSection() {
    return location.hash.replace(/^#/, '') || 'home';
  }

  function pushEvent(eventName, parameters) {
    window.dataLayer.push(Object.assign({
      event: eventName,
      pph_source: 'site',
      room: getRoom(),
      language: getLanguage(),
      site_section: currentSection()
    }, parameters || {}));
  }

  function pushDeduplicated(eventName, key, parameters, delay) {
    const signature = eventName + ':' + (key || 'default');
    const now = Date.now();
    const last = recentEvents.get(signature) || 0;
    if (now - last < (delay || 1200)) return;
    recentEvents.set(signature, now);
    pushEvent(eventName, parameters);
  }

  function normaliseFeeling(value) {
    const feelings = {
      Excelente: 'excellent',
      Boa: 'good',
      Regular: 'regular',
      Ruim: 'poor'
    };
    return feelings[value] || String(value || 'unknown').toLowerCase();
  }

  function trackSectionFromHash(source) {
    const hash = location.hash || '#home';

    if (hash === '#avaliar') {
      pushDeduplicated('review_open', '#avaliar', { open_source: source || 'navigation' });
      return;
    }

    if (hash === '#porto') {
      pushDeduplicated('tourism_open', '#porto', { open_source: source || 'navigation' });
      return;
    }

    if (hash === '#mapa') {
      pushDeduplicated('tourism_map_open', '#mapa', { open_source: source || 'navigation' });
      return;
    }

    if (hash.indexOf('#place-') === 0) {
      pushDeduplicated('tourism_place_open', hash, {
        place_name: hash.replace('#place-', ''),
        open_source: source || 'navigation'
      });
      return;
    }

    if (hash === '#checkout') {
      pushDeduplicated('checkout_start', '#checkout', { open_source: source || 'navigation' });
    }
  }

  document.addEventListener('click', function (event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const reviewNavigation = target.closest('a[href="#avaliar"], #fab-review');
    if (reviewNavigation) {
      pushDeduplicated('review_open', '#avaliar', {
        open_source: reviewNavigation.id || reviewNavigation.className || 'review_cta'
      });
    }

    const feelingButton = target.closest('.av-feel[data-v]');
    if (feelingButton) {
      const feeling = normaliseFeeling(feelingButton.dataset.v);
      const sentiment = feelingButton.dataset.path === 'positive' ? 'positive' : 'negative';
      pushEvent('review_feeling_selected', { feeling: feeling, sentiment: sentiment });
      pushEvent(sentiment === 'positive' ? 'guest_satisfied' : 'guest_dissatisfied', {
        feeling: feeling
      });
    }

    const platformButton = target.closest('[data-plat]');
    if (platformButton) {
      pushEvent('review_platform_selected', {
        review_platform: platformButton.dataset.plat || 'unknown'
      });
    }

    const externalReviewLink = target.closest(
      '#av-link-airbnb, #av-link-google-b, #av-link-google-o, #av-link-google-t'
    );
    if (externalReviewLink) {
      const href = externalReviewLink.getAttribute('href') || '';
      const platform = externalReviewLink.id.indexOf('airbnb') !== -1 || href.indexOf('airbnb.') !== -1
        ? 'airbnb'
        : 'google';
      pushEvent('review_external_click', {
        review_platform: platform,
        link_id: externalReviewLink.id || 'unknown'
      });
    }

    const feedbackOpen = target.closest('[data-av-goto="av-step-form"], #fab-suggest');
    if (feedbackOpen) {
      pushEvent(feedbackOpen.id === 'fab-suggest' ? 'quick_suggestion_open' : 'private_feedback_open', {
        open_source: feedbackOpen.id || feedbackOpen.className || 'feedback_cta'
      });
    }

    const tourismLink = target.closest('a[href="#porto"]');
    if (tourismLink) {
      pushDeduplicated('tourism_open', '#porto', {
        open_source: tourismLink.className || 'tourism_cta'
      });
    }

    const mapLink = target.closest('a[href="#mapa"]');
    if (mapLink) {
      pushDeduplicated('tourism_map_open', '#mapa', {
        open_source: mapLink.className || 'map_cta'
      });
    }

    const placeCard = target.closest('.porto-card[data-place]');
    if (placeCard) {
      const placeName = placeCard.dataset.place || 'unknown';
      pushDeduplicated('tourism_place_open', '#place-' + placeName, {
        place_name: placeName,
        open_source: 'place_card'
      });
    }
  }, true);

  window.addEventListener('hashchange', function () {
    trackSectionFromHash('hash_change');
  });

  const nativeFetch = window.fetch ? window.fetch.bind(window) : null;
  if (nativeFetch) {
    window.fetch = function (input, init) {
      return nativeFetch(input, init).then(function (response) {
        try {
          const body = init && typeof init.body === 'string' ? init.body : '';

          if (response.ok && body.indexOf('form-name=sugestoes-quartos') !== -1) {
            const form = document.getElementById('av-form');
            const selectedAreas = form
              ? Array.from(form.querySelectorAll('input[name="area"]:checked')).map(function (item) {
                  return item.value;
                }).join('|')
              : '';
            const urgency = form && form.querySelector('input[name="urgencia"]:checked')
              ? form.querySelector('input[name="urgencia"]:checked').value
              : 'unknown';
            const stayPhase = form && form.querySelector('[name="fase"]')
              ? form.querySelector('[name="fase"]').value || 'unknown'
              : 'unknown';

            pushEvent('private_feedback_submit', {
              feedback_areas: selectedAreas || 'unknown',
              urgency: urgency,
              stay_phase: stayPhase
            });
          }

          if (response.ok && body.indexOf('form-name=sugestoes-rapidas') !== -1) {
            pushEvent('quick_suggestion_submit', {
              feedback_source: 'floating_action_button'
            });
          }
        } catch (error) {
          console.warn('Analytics tracking could not inspect the form response.', error);
        }
        return response;
      });
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      trackSectionFromHash('initial_load');
    }, { once: true });
  } else {
    trackSectionFromHash('initial_load');
  }
})();
