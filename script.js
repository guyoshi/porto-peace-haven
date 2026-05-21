/* ═══════════════════════════════════════════════════════════════
   PORTO PEACE HAVEN — script.js
   Language switcher · Nav drawer · QR codes · Copy-to-clipboard
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   CONFIGURATION
   ▶ UPDATE THIS after deploying your site
───────────────────────────────────────────────────────────────── */
const SITE_URL = 'https://YOUR-SITE-URL.netlify.app'; // ← REPLACE after deploy

const WIFI_SSID     = 'PORTO PEACE HAVEN';
const WIFI_PASSWORD = 'CAHMCTUM';

/* ─────────────────────────────────────────────────────────────
   TRANSLATIONS
   Each key matches a data-i18n attribute in index.html
───────────────────────────────────────────────────────────────── */
const translations = {

  /* ══════════ ENGLISH ══════════ */
  en: {
    logo_sub: 'Guest Guide',
    nav_home: 'Home',
    nav_info: 'Essential Info',
    nav_checkin: 'Check-in / Check-out',
    nav_rules: 'House Rules',
    nav_guide: 'House Guide',
    nav_kitchen: 'Kitchen Guide',
    nav_rooms_label: 'Rooms',
    nav_bathroom: 'Bathroom',
    nav_transport: 'Transport',
    nav_nearby: 'Nearby Places',
    nav_porto: 'Porto Guide',
    nav_emergency: '🆘 Emergency',
    bnav_home: 'Home',
    bnav_info: 'Info',
    bnav_rooms: 'Rooms',
    bnav_porto: 'Porto',
    bnav_help: 'Help',
    hero_badge: 'Porto · Portugal',
    hero_welcome: 'Welcome to',
    hero_tagline: 'Your peaceful home in the heart of Porto',
    rooms_preview_title: 'Choose Your Room',
    ribeira_mood_short: 'Elegant · Urban · Spacious',
    douro_mood_short: 'Warm · Cosy · Golden',
    atlantico_mood_short: 'Calm · Coastal · Airy',
    room_discover: 'Discover →',
    info_title: 'Essential Information',
    info_subtitle: 'Everything you need, right here',
    address_title: 'Address',
    open_maps: 'Open in Google Maps',
    wifi_title: 'Wi-Fi',
    wifi_network: 'Network',
    wifi_password: 'Password',
    tap_copy: 'tap to copy',
    wifi_scan: '📷 Scan to connect automatically',
    contact_title: 'Contact Host',
    contact_urgent: 'Urgent Line',
    contact_note: '⚠️ Replace contact placeholders in index.html before publishing',
    guide_qr_title: 'This Guest Guide',
    guide_qr_desc: 'Share this link with your guests or scan the QR code',
    guide_qr_note: '⚠️ Update SITE_URL in script.js after deploying',
    checkin_title: 'Check-in & Check-out',
    checkin_label: 'Check-in',
    checkin_time_label: 'From:',
    checkin_late_label: 'Late arrival:',
    checkout_label: 'Check-out',
    checkout_time_label: 'By:',
    checkout_late_label: 'Late check-out:',
    checkout_late_desc: "Please ask in advance — we'll do our best!",
    key_title: 'Keys & Access',
    key_1: 'You will receive a key to your room and to the main building entrance.',
    key_2: 'Please keep your key safe and return it on departure.',
    safe_title: 'In-Room Safe',
    safe_1: 'A safe is available in your room — use it for passports, valuables, and cards.',
    safe_2: 'Set your own personal PIN on arrival and reset it on departure.',
    rules_title: 'House Rules',
    rules_subtitle: 'We ask all guests to respect these guidelines so everyone enjoys a calm, welcoming stay',
    rule_noise_h: 'Noise & Quiet Hours',
    rule_n1: 'Please keep noise to a minimum at all times.',
    rule_n2: 'Be especially considerate on weekdays and during business hours.',
    rule_n3: 'No loud music or raised voices inside the property.',
    rule_smoke_h: 'No Smoking',
    rule_s1: 'No smoking or vaping anywhere inside the building.',
    rule_s2: 'Smoking is allowed outside the building only.',
    rule_s3: 'Candles and incense are not permitted — smoke detectors are active.',
    rule_guests_h: 'Visitors & Events',
    rule_g1: 'No unregistered visitors are permitted on the premises.',
    rule_g2: 'Parties and social gatherings are strictly not allowed.',
    rule_kitchen_h: 'Kitchen & Shared Areas',
    rule_k1: 'Always wash dishes immediately after use.',
    rule_k2: 'Clean the kitchen surfaces and hob after every use.',
    rule_k3: 'Treat shared areas with care and consideration for others.',
    rule_energy_h: 'Before Leaving Your Room',
    rule_e1: 'Close all windows before you leave.',
    rule_e2: 'Switch off all lights.',
    rule_e3: 'Turn off all appliances (fan, TV, etc.).',
    rule_bath_h: 'Bathroom',
    rule_b1: 'Always verify the toilet flush has stopped completely before leaving.',
    rule_b2: 'Only toilet paper may be flushed — no wipes or other items.',
    rule_b3: 'Leave the bathroom clean and ready for the next guest.',
    rule_pets_h: 'Pets',
    rule_p1: 'Pets are not permitted at Porto Peace Haven.',
    rule_furniture_h: 'Furniture & Floors',
    rule_f1: 'Please do not drag chairs or furniture across the floors.',
    rule_f2: 'Handle all furnishings with care.',
    rules_thank: 'Thank you for helping us keep Porto Peace Haven a peaceful, welcoming space for everyone. 🙏',
    guide_title: 'House Guide',
    guide_sub: "We're delighted to have you here. Everything you need to feel at home.",
    g_wifi_h: 'Wi-Fi',
    g_wifi_link: 'See QR code →',
    g_bath_h: 'Shared Bathroom',
    g_bath_p: 'The bathroom is shared between guests. Please be thoughtful and leave it spotless after each use.',
    g_leave_h: 'Before You Leave',
    g_c1: '✔ Switch off all lights',
    g_c2: '✔ Close all windows',
    g_c3: '✔ Turn off all appliances',
    g_c4: '✔ Check the toilet flush stopped',
    g_c5: '✔ Return your key at check-out',
    g_quiet_h: 'Quiet Living',
    g_quiet_p: 'This is a residential building. Please keep voices and sounds low, especially early mornings and evenings. Your neighbours will thank you.',
    g_tv_h: 'TV & Streaming',
    g_tv_p: 'Each room has a TV with an Android TV dongle. Use the dongle remote to access Netflix, YouTube, and other apps. Log in with your own accounts — no shared credentials. Full instructions are in your room guide.',
    g_lamps_h: 'LED Mood Lamps',
    g_lamps_p: "Your room has LED lamps controllable by remote. Choose your favourite colour, brightness and mood. Instructions vary slightly by room — see your room's guide below.",
    g_safety_h: 'Safety',
    g_sf1: '🔥 Smoke detectors: kitchen & entrance',
    g_sf2: '⚡ Electrical panel: at the entrance',
    g_sf3: '🚨 Emergency services: <strong>112</strong>',
    g_problem_h: 'Something not right?',
    g_problem_p: "Please tell us immediately — we prefer to fix things straight away rather than have you deal with any discomfort. We're just a message away.",
    g_contact_btn: 'Contact Host',
    review_h: 'Enjoying your stay?',
    review_p: "We pour a great deal of care into every detail of Porto Peace Haven. If we've made your trip that little bit better, a review means the world to us — and helps other travellers discover this little corner of Porto.",
    review_btn: 'Leave a Review ⭐',
    kitchen_title: 'Kitchen Guide',
    kitchen_sub: 'How to use everything in the kitchen',
    k_hob_h: 'Induction Hob',
    k_hob1: 'Place a compatible (magnetic) pan on the hob surface.',
    k_hob2: 'Press the power button to switch on.',
    k_hob3: 'Select your zone and adjust heat with the + / – controls.',
    k_hob4: 'The hob switches itself off automatically after 2 hours.',
    k_hood_h: 'Extractor Hood',
    k_hood1: 'Switch on before cooking to prevent smoke build-up.',
    k_hood2: 'Adjust speed with the button (1 = low · 3 = high).',
    k_hood3: 'Leave running briefly after cooking, then switch off.',
    k_oven_h: 'Mini Oven',
    k_oven1: 'Place food on the tray or rack provided.',
    k_oven2: 'Set temperature using the left dial.',
    k_oven3: 'Set cooking time using the right dial.',
    k_oven4: 'Oven switches off automatically when timer ends.',
    k_micro_h: 'Microwave',
    k_micro1: 'Use only microwave-safe containers.',
    k_micro2: 'Set time and power, then press start.',
    k_micro3: 'Never use metal containers or foil.',
    k_kettle_h: 'Kettle',
    k_kettle1: 'Fill with water up to the maximum line indicated inside.',
    k_kettle2: 'Place on the base and press the switch down.',
    k_kettle3: 'It switches off automatically once boiled.',
    k_coffee_h: 'Capsule Coffee Machine',
    k_coffee1: 'Fill the water tank and switch the machine on.',
    k_coffee2: 'Insert a compatible capsule into the holder.',
    k_coffee3: 'Place your cup and press brew.',
    k_coffee4: 'Remove and dispose of used capsule after each use.',
    k_utensils_h: "What's Available",
    k_utensils_p: 'Plates, bowls, glasses, mugs, cups, cutlery, pots, pans, cutting boards, knives, colander, grater, and cooking utensils.',
    k_clean_h: 'Cleaning Supplies',
    k_clean_p: 'Bin bags, sponge, cloths, and washing-up liquid are under the sink. Extra supplies are in the storage cabinet near the bathroom.',
    k_etiquette_h: 'Kitchen Etiquette',
    k_eq1: '🍽️ Wash and dry all dishes immediately after every use.',
    k_eq2: '🧹 Wipe down the hob, surfaces and sink after use.',
    k_eq3: '🗑️ Dispose of rubbish in the bin bags provided.',
    k_eq4: '♻️ Separate recycling from general waste.',
    k_eq5: '🤝 This is a shared kitchen — leave it exactly as you found it.',
    rooms_title: 'Room Guides',
    ribeira_tagline: 'Elegant, spacious and urban — the soul of old Porto',
    feat_tv_h: 'TV & Android Dongle',
    feat_tv_p: 'Use the Android dongle remote (black, smaller) to navigate apps. Use the TV remote to switch the input to HDMI if needed. Press Home on the dongle remote to start.',
    feat_remotes_h: 'Two Remotes',
    ribeira_remotes_p: 'You have two remotes: one for the TV and one for the Android dongle. The dongle remote also controls the LED strip behind the TV.',
    feat_led_h: 'LED Lighting',
    ribeira_led_p: 'The LED remote controls both the bedside lamp and the LED strip behind the TV. Use it to set your preferred colour and brightness.',
    ribeira_curtains_h: 'Curtains & Windows',
    ribeira_curtains_p: 'Please handle the curtains and window fittings with care. Always close all windows before leaving the room.',
    ribeira_storage_h: 'Storage & Work Area',
    ribeira_storage_p: 'Ribeira is the most spacious room with ample storage. The large wall unit doubles as a desk or work area — ideal for remote workers or longer stays.',
    feat_fan_h: 'Fan',
    feat_fan_p: 'A fan is available in the room. Adjust the speed and direction as you prefer.',
    feat_fridge_h: 'Mini Fridge',
    feat_fridge_p: 'A mini fridge is available for your personal use. Please keep it clean and tidy.',
    feat_sockets_h: 'Sockets with USB & USB-C',
    feat_sockets_p: 'All sockets include USB-A and USB-C ports for convenient device charging.',
    feat_mirror_h: 'Mirror',
    feat_mirror_p: 'A full-length mirror is available in the room.',
    feat_rail_h: 'Clothes Rail',
    feat_rail_p: 'A clothes rail is provided for hanging garments.',
    feat_blanket_h: 'Spare Blanket',
    feat_blanket_p: 'A spare blanket is stored inside the ottoman at the foot of the bed.',
    room_reminder: '💡 Before leaving: switch off all lights · close all windows · turn off all appliances',
    douro_tagline: 'Warm, golden and wonderfully cosy — like a Porto sunset',
    douro_remotes_p: 'Two remotes provided: one for the TV and one for the Android dongle. The LED remote controls your bedside lamp colour and brightness.',
    douro_led_p: 'Use the LED remote to adjust the colour and brightness of your bedside lamp. Set the perfect warm glow for evenings.',
    douro_storage_h: 'Storage',
    douro_storage_p: 'Douro has a dedicated storage area for your belongings. Compact and perfectly organised.',
    atlantico_tagline: 'Light, peaceful and airy — your coastal retreat in the city',
    atlantico_remotes_p: 'Two remotes provided: TV and Android dongle. LED remote controls the bedside lamp.',
    atlantico_led_p: '⚠️ To change only the bedside lamp colour without affecting the TV: first switch the TV off, then point the LED remote directly at the bedside lamp.',
    atlantico_desk_h: 'Desk / Work Area',
    atlantico_desk_p: 'Atlântico includes a dedicated desk area — perfect for remote work or longer stays in the city.',
    bath_title: 'Bathroom Guide',
    bath_shared_h: 'Shared Bathroom',
    bath_shared_p: 'The bathroom is shared between all guests. Please be considerate and leave it clean and ready for the next person after every use.',
    bath_shower_h: 'Shower Duration',
    bath_shower_p: 'Please avoid very long showers, especially during peak morning hours, so all guests have access to hot water.',
    bath_toilet_h: 'Toilet',
    bath_t1: '✔ Always wait to confirm the flush has stopped completely.',
    bath_t2: '✔ Only toilet paper in the toilet — nothing else.',
    bath_t3: '✘ No wipes, cotton pads, or sanitary items.',
    bath_cabinet_h: 'Storage Cabinet',
    bath_cabinet_p: 'Extra toiletries and cleaning supplies are in the storage cabinet beside the bathroom. Help yourself as needed.',
    bath_dryer_h: 'Hair Dryer',
    bath_dryer_p: 'A hair dryer is available inside the mirror cabinet in the bathroom. Please return it after use.',
    bath_adapter_h: 'Universal Plug Adapter',
    bath_adapter_p: 'A universal plug adapter is inside the mirror cabinet — available for any international guests who need it.',
    transport_title: 'Getting Around Porto',
    transport_sub: 'Porto is highly walkable and well connected by public transport',
    tr_metro_h: 'Nearest Metro Stop',
    tr_metro_map: 'View Metro Map',
    tr_bus_h: 'Bus & Tram',
    tr_stcp: 'STCP Bus Routes',
    tr_ride_h: 'Taxis & Ride Apps',
    tr_taxi: 'Taxi',
    tr_maps_h: 'Directions from Porto Peace Haven',
    nearby_title: 'Useful Places Nearby',
    nb_supermarket: 'Supermarket',
    nb_pharmacy: 'Pharmacy',
    nb_hospital: 'Hospital',
    nb_cafe: 'Restaurants',
    nb_transport: 'Transport',
    nb_atm: 'ATM',
    nb_laundry: 'Laundry',
    go_btn: 'Go →',
    porto_title: 'What to Do in Porto',
    porto_sub: 'Our favourite recommendations for your stay',
    tag_sunset: '🌅 Sunset',
    porto_sunset_h: 'Best Sunset Spots',
    porto_sunset_p: 'Jardim do Morro in Vila Nova de Gaia offers spectacular views over the Douro and Dom Luís Bridge at golden hour. Miradouro da Serra do Pilar is equally breathtaking.',
    tag_photo: '📸 Photography',
    porto_photo_h: 'Best Photo Spots',
    porto_photo_p: 'Dom Luís I Bridge, the iconic Livraria Lello, the Ribeira waterfront, the blue tiles of São Bento Station, and the colourful houses of Bonfim are all unmissable.',
    tag_rainy: '🌧️ Rainy Day',
    porto_rainy_h: 'Rainy Day Plan',
    porto_rainy_p: "Livraria Lello bookshop, Casa da Música, the Serralves Museum of Contemporary Art, or a long slow lunch at a traditional tasca. Porto's café culture was made for rainy days.",
    tag_classic: '🗺️ Classic',
    porto_classic_h: 'Classic Porto Itinerary',
    porto_classic_p: 'São Bento Station → Sé Cathedral → Ribeira waterfront → Dom Luís Bridge → Port wine cellar tasting in Gaia → sunset at Jardim do Morro. A perfect day in one loop.',
    tag_food: '🍷 Food & Wine',
    porto_food_h: 'Food & Wine',
    porto_food_p: "A Francesinha at Café Santiago, pastel de nata at a local padaria, bacalhau à Brás, and finish with a port wine tasting at Graham's or Taylor's in Gaia. Porto eats well.",
    tag_beach: '🏖️ Beach',
    porto_beach_h: 'Coastal & Beach Day',
    porto_beach_p: 'Matosinhos beach is just 15 minutes by metro — ideal for swimming, fresh seafood at the harbour restaurants, and big Atlantic skies. Foz do Douro is lovely for a riverside walk.',
    em_title: 'Emergency & Support',
    em_sub: "We hope you never need this — but it's here just in case",
    em_112_h: 'Emergency Services',
    em_112_sub: 'Police · Fire · Ambulance',
    em_call: 'Call',
    em_host_h: 'Contact Host',
    em_host_sub: 'For any property issue',
    em_hospital_h: 'Nearest Hospital',
    em_pharmacy_h: '24h Pharmacy',
    em_ride_h: 'Uber / Bolt',
    em_taxi_h: 'Taxi',
    footer_rights: 'All rights reserved',
    copied: '✓ Copied!',
    nav_mapa: '🗺️ Porto Map',
    nb_nos: 'NOS Store (SIM Cards)',
    dl_guide_title: 'Download Offline Guide',
    dl_guide_desc: 'Save this guide to your device — useful when you have no internet.',
    dl_guide_btn: '⬇ Download Guide (EN)',
    map_title: 'Porto City Map',
    map_sub: 'Official tourist map — tap to open or download',
    map_open: 'Open Map',
    map_pdf_label: 'Official Porto Tourist Map',
    map_open_full: 'Open Full Map',
    map_download: 'Download PDF',
  },

  /* ══════════ PORTUGUÊS ══════════ */
  pt: {
    logo_sub: 'Guia do Hóspede',
    nav_home: 'Início',
    nav_info: 'Informações',
    nav_checkin: 'Check-in / Check-out',
    nav_rules: 'Regras da Casa',
    nav_guide: 'Guia da Casa',
    nav_kitchen: 'Cozinha',
    nav_rooms_label: 'Quartos',
    nav_bathroom: 'Casa de Banho',
    nav_transport: 'Transportes',
    nav_nearby: 'Lugares Próximos',
    nav_porto: 'Guia do Porto',
    nav_emergency: '🆘 Emergência',
    bnav_home: 'Início',
    bnav_info: 'Info',
    bnav_rooms: 'Quartos',
    bnav_porto: 'Porto',
    bnav_help: 'Ajuda',
    hero_badge: 'Porto · Portugal',
    hero_welcome: 'Bem-vindo ao',
    hero_tagline: 'O seu lar tranquilo no coração do Porto',
    rooms_preview_title: 'Escolha o seu Quarto',
    ribeira_mood_short: 'Elegante · Urbano · Espaçoso',
    douro_mood_short: 'Acolhedor · Quente · Dourado',
    atlantico_mood_short: 'Calmo · Costeiro · Luminoso',
    room_discover: 'Descobrir →',
    info_title: 'Informações Essenciais',
    info_subtitle: 'Tudo o que precisa, aqui mesmo',
    address_title: 'Morada',
    open_maps: 'Abrir no Google Maps',
    wifi_title: 'Wi-Fi',
    wifi_network: 'Rede',
    wifi_password: 'Palavra-passe',
    tap_copy: 'toque para copiar',
    wifi_scan: '📷 Scan para ligar automaticamente',
    contact_title: 'Contactar o Anfitrião',
    contact_urgent: 'Linha Urgente',
    contact_note: '⚠️ Substitua os contactos no index.html antes de publicar',
    guide_qr_title: 'Este Guia do Hóspede',
    guide_qr_desc: 'Partilhe este link com os seus hóspedes ou faça scan do código QR',
    guide_qr_note: '⚠️ Actualize SITE_URL no script.js após publicar',
    checkin_title: 'Check-in & Check-out',
    checkin_label: 'Check-in',
    checkin_time_label: 'A partir das:',
    checkin_late_label: 'Chegada tardia:',
    checkout_label: 'Check-out',
    checkout_time_label: 'Até às:',
    checkout_late_label: 'Check-out tardio:',
    checkout_late_desc: 'Por favor avise com antecedência — faremos o possível!',
    key_title: 'Chaves & Acesso',
    key_1: 'Receberá uma chave para o seu quarto e para a entrada do edifício.',
    key_2: 'Por favor guarde bem a chave e devolva-a na saída.',
    safe_title: 'Cofre no Quarto',
    safe_1: 'O quarto dispõe de cofre — use-o para passaportes e objectos de valor.',
    safe_2: 'Defina o seu PIN pessoal na chegada e reponha-o na saída.',
    rules_title: 'Regras da Casa',
    rules_subtitle: 'Pedimos a todos os hóspedes que respeitem estas directrizes',
    rule_noise_h: 'Ruído & Horas de Silêncio',
    rule_n1: 'Por favor mantenha o ruído ao mínimo em todos os momentos.',
    rule_n2: 'Seja especialmente considerado nos dias úteis e horas comerciais.',
    rule_n3: 'Sem música alta ou vozes elevadas no interior.',
    rule_smoke_h: 'Proibido Fumar',
    rule_s1: 'É proibido fumar ou usar cigarros electrónicos no interior.',
    rule_s2: 'É permitido fumar apenas no exterior do edifício.',
    rule_s3: 'Velas e incenso não são permitidos — há detectores de fumo activos.',
    rule_guests_h: 'Visitantes & Eventos',
    rule_g1: 'Não são permitidos visitantes não registados.',
    rule_g2: 'Festas e reuniões sociais são estritamente proibidas.',
    rule_kitchen_h: 'Cozinha & Áreas Comuns',
    rule_k1: 'Lave sempre a louça imediatamente após usar.',
    rule_k2: 'Limpe os planos e o fogão após cada utilização.',
    rule_k3: 'Trate as áreas comuns com cuidado e consideração.',
    rule_energy_h: 'Antes de Sair do Quarto',
    rule_e1: 'Feche todas as janelas antes de sair.',
    rule_e2: 'Apague todas as luzes.',
    rule_e3: 'Desligue todos os electrodomésticos.',
    rule_bath_h: 'Casa de Banho',
    rule_b1: 'Verifique sempre que o autoclismo parou completamente.',
    rule_b2: 'Só papel higiénico pode ser deitado no autoclismo.',
    rule_b3: 'Deixe a casa de banho limpa para o próximo hóspede.',
    rule_pets_h: 'Animais de Estimação',
    rule_p1: 'Não são permitidos animais de estimação.',
    rule_furniture_h: 'Mobília & Pavimentos',
    rule_f1: 'Por favor não arraste cadeiras ou mobília pelo chão.',
    rule_f2: 'Trate todo o mobiliário com cuidado.',
    rules_thank: 'Obrigado por ajudar a manter o Porto Peace Haven como um espaço tranquilo e acolhedor para todos. 🙏',
    guide_title: 'Guia da Casa',
    guide_sub: 'Estamos muito felizes por tê-lo aqui. Tudo o que precisa para se sentir em casa.',
    g_wifi_h: 'Wi-Fi',
    g_wifi_link: 'Ver código QR →',
    g_bath_h: 'Casa de Banho Partilhada',
    g_bath_p: 'A casa de banho é partilhada entre hóspedes. Por favor seja considerado e deixe-a impecável após cada utilização.',
    g_leave_h: 'Antes de Sair',
    g_c1: '✔ Apagar todas as luzes',
    g_c2: '✔ Fechar todas as janelas',
    g_c3: '✔ Desligar todos os electrodomésticos',
    g_c4: '✔ Verificar que o autoclismo parou',
    g_c5: '✔ Devolver a chave no check-out',
    g_quiet_h: 'Vida Tranquila',
    g_quiet_p: 'Este é um edifício residencial. Por favor mantenha vozes e sons baixos, especialmente de manhã cedo e à noite.',
    g_tv_h: 'TV & Streaming',
    g_tv_p: 'Cada quarto tem uma TV com dongle Android TV. Use o comando do dongle para aceder a Netflix, YouTube e outras apps. Inicie sessão com as suas próprias contas.',
    g_lamps_h: 'Lâmpadas LED',
    g_lamps_p: 'O seu quarto tem lâmpadas LED controláveis por comando. Escolha a sua cor e brilho preferidos. As instruções variam ligeiramente por quarto.',
    g_safety_h: 'Segurança',
    g_sf1: '🔥 Detectores de fumo: cozinha e entrada',
    g_sf2: '⚡ Quadro eléctrico: na entrada',
    g_sf3: '🚨 Serviços de emergência: <strong>112</strong>',
    g_problem_h: 'Algo não está bem?',
    g_problem_p: 'Por favor avise-nos imediatamente — preferimos resolver as coisas de imediato. Estamos a uma mensagem de distância.',
    g_contact_btn: 'Contactar Anfitrião',
    review_h: 'A gostar da sua estadia?',
    review_p: 'Dedicamos muito cuidado a cada detalhe do Porto Peace Haven. Se tornámos a sua viagem um pouco melhor, uma avaliação significa muito para nós.',
    review_btn: 'Deixar Avaliação ⭐',
    kitchen_title: 'Guia da Cozinha',
    kitchen_sub: 'Como usar tudo na cozinha',
    k_hob_h: 'Placa de Indução',
    k_hob1: 'Coloque um tacho compatível (magnético) na placa.',
    k_hob2: 'Prima o botão de ligar.',
    k_hob3: 'Seleccione a zona e ajuste o calor com os controlos + / –.',
    k_hob4: 'A placa desliga-se automaticamente após 2 horas.',
    k_hood_h: 'Exaustor',
    k_hood1: 'Ligue antes de cozinhar para evitar acumulação de fumo.',
    k_hood2: 'Ajuste a velocidade (1 = baixo · 3 = alto).',
    k_hood3: 'Deixe a funcionar brevemente após cozinhar, depois desligue.',
    k_oven_h: 'Mini Forno',
    k_oven1: 'Coloque a comida no tabuleiro ou grelha fornecidos.',
    k_oven2: 'Defina a temperatura com o botão esquerdo.',
    k_oven3: 'Defina o tempo com o botão direito.',
    k_oven4: 'O forno desliga-se automaticamente quando o temporizador termina.',
    k_micro_h: 'Microondas',
    k_micro1: 'Use apenas recipientes adequados ao microondas.',
    k_micro2: 'Defina o tempo e a potência, depois prima iniciar.',
    k_micro3: 'Nunca use recipientes metálicos ou folha de alumínio.',
    k_kettle_h: 'Chaleira',
    k_kettle1: 'Encha com água até à marca máxima.',
    k_kettle2: 'Coloque na base e prima o interruptor.',
    k_kettle3: 'Desliga-se automaticamente quando a água ferver.',
    k_coffee_h: 'Máquina de Café de Cápsulas',
    k_coffee1: 'Encha o reservatório de água e ligue a máquina.',
    k_coffee2: 'Insira uma cápsula compatível.',
    k_coffee3: 'Coloque a chávena e prima preparar.',
    k_coffee4: 'Remova e descarte a cápsula usada após cada utilização.',
    k_utensils_h: 'O que está disponível',
    k_utensils_p: 'Pratos, tigelas, copos, canecas, chávenas, talheres, panelas, frigideiras, tábuas de corte, facas, coador e utensílios de cozinha.',
    k_clean_h: 'Material de Limpeza',
    k_clean_p: 'Sacos do lixo, esponja, panos e detergente estão debaixo do lava-louça. Materiais extra no armário de arrumos.',
    k_etiquette_h: 'Etiqueta na Cozinha',
    k_eq1: '🍽️ Lave e seque a louça imediatamente após usar.',
    k_eq2: '🧹 Limpe a placa, as superfícies e o lava-louça após usar.',
    k_eq3: '🗑️ Deite o lixo nos sacos fornecidos.',
    k_eq4: '♻️ Separe o reciclável do lixo comum.',
    k_eq5: '🤝 Esta é uma cozinha partilhada — deixe-a tal como a encontrou.',
    rooms_title: 'Guia dos Quartos',
    ribeira_tagline: 'Elegante, espaçoso e urbano — a alma do velho Porto',
    feat_tv_h: 'TV & Dongle Android',
    feat_tv_p: 'Use o comando do dongle Android (preto, mais pequeno) para navegar nas apps. Use o comando da TV para mudar a entrada para HDMI se necessário.',
    feat_remotes_h: 'Dois Comandos',
    ribeira_remotes_p: 'Tem dois comandos: um para a TV e um para o dongle Android. O comando do dongle também controla a fita LED atrás da TV.',
    feat_led_h: 'Iluminação LED',
    ribeira_led_p: 'O comando LED controla a lâmpada de cabeceira e a fita LED atrás da TV. Use-o para definir a sua cor e brilho preferidos.',
    ribeira_curtains_h: 'Cortinas & Janelas',
    ribeira_curtains_p: 'Por favor manuseie as cortinas e janelas com cuidado. Feche sempre todas as janelas antes de sair.',
    ribeira_storage_h: 'Arrumos & Área de Trabalho',
    ribeira_storage_p: 'Ribeira é o quarto mais espaçoso com amplos arrumos. O móvel de parede serve também como secretária.',
    feat_fan_h: 'Ventoinha',
    feat_fan_p: 'Há uma ventoinha disponível no quarto. Ajuste a velocidade e direcção como preferir.',
    feat_fridge_h: 'Mini Frigorífico',
    feat_fridge_p: 'Há um mini frigorífico disponível para uso pessoal. Por favor mantenha-o limpo.',
    feat_sockets_h: 'Tomadas com USB & USB-C',
    feat_sockets_p: 'Todas as tomadas incluem portas USB-A e USB-C para carregar dispositivos.',
    feat_mirror_h: 'Espelho',
    feat_mirror_p: 'Há um espelho de corpo inteiro no quarto.',
    feat_rail_h: 'Cabide de Roupas',
    feat_rail_p: 'Há um cabide disponível para pendurar roupa.',
    feat_blanket_h: 'Manta Extra',
    feat_blanket_p: 'Uma manta extra está guardada dentro do puff aos pés da cama.',
    room_reminder: '💡 Antes de sair: apague as luzes · feche as janelas · desligue os electrodomésticos',
    douro_tagline: 'Quente, dourado e acolhedor — como um pôr do sol no Porto',
    douro_remotes_p: 'Dois comandos: um para a TV e um para o dongle. O comando LED controla a cor e o brilho da lâmpada de cabeceira.',
    douro_led_p: 'Use o comando LED para ajustar a cor e brilho da lâmpada de cabeceira.',
    douro_storage_h: 'Arrumos',
    douro_storage_p: 'O Douro tem uma área de arrumos dedicada. Compacto e perfeitamente organizado.',
    atlantico_tagline: 'Luminoso, tranquilo e arejado — o seu refúgio costeiro na cidade',
    atlantico_remotes_p: 'Dois comandos: TV e dongle Android. O comando LED controla a lâmpada de cabeceira.',
    atlantico_led_p: '⚠️ Para mudar apenas a cor da lâmpada de cabeceira sem afectar a TV: primeiro desligue a TV, depois aponte o comando LED directamente para a lâmpada.',
    atlantico_desk_h: 'Secretária / Área de Trabalho',
    atlantico_desk_p: 'O Atlântico inclui uma secretária dedicada — perfeita para trabalho remoto.',
    bath_title: 'Guia da Casa de Banho',
    bath_shared_h: 'Casa de Banho Partilhada',
    bath_shared_p: 'A casa de banho é partilhada entre todos os hóspedes. Por favor seja considerado e deixe-a limpa após cada utilização.',
    bath_shower_h: 'Duração do Duche',
    bath_shower_p: 'Por favor evite duches muito longos, especialmente de manhã, para que todos os hóspedes tenham acesso a água quente.',
    bath_toilet_h: 'Autoclismo',
    bath_t1: '✔ Verifique sempre que o autoclismo parou completamente.',
    bath_t2: '✔ Apenas papel higiénico no autoclismo.',
    bath_t3: '✘ Sem lenços, algodão ou produtos de higiene.',
    bath_cabinet_h: 'Armário de Arrumos',
    bath_cabinet_p: 'Produtos de higiene e material de limpeza extra no armário junto à casa de banho.',
    bath_dryer_h: 'Secador de Cabelo',
    bath_dryer_p: 'Há um secador de cabelo no armário com espelho. Por favor devolva-o após uso.',
    bath_adapter_h: 'Adaptador Universal',
    bath_adapter_p: 'Há um adaptador universal de tomadas no armário com espelho — disponível para hóspedes internacionais.',
    transport_title: 'Como Andar no Porto',
    transport_sub: 'O Porto é muito acessível a pé e bem servido de transportes públicos',
    tr_metro_h: 'Estação de Metro Mais Próxima',
    tr_metro_map: 'Ver Mapa do Metro',
    tr_bus_h: 'Autocarro & Eléctrico',
    tr_stcp: 'Linhas STCP',
    tr_ride_h: 'Táxis & Apps de Transporte',
    tr_taxi: 'Táxi',
    tr_maps_h: 'Direcções a partir do Porto Peace Haven',
    nearby_title: 'Lugares Úteis Perto',
    nb_supermarket: 'Supermercado',
    nb_pharmacy: 'Farmácia',
    nb_hospital: 'Hospital',
    nb_cafe: 'Restaurantes',
    nb_transport: 'Transportes',
    nb_atm: 'Multibanco',
    nb_laundry: 'Lavandaria',
    go_btn: 'Ir →',
    porto_title: 'O que Fazer no Porto',
    porto_sub: 'As nossas recomendações favoritas para a sua estadia',
    tag_sunset: '🌅 Pôr do Sol',
    porto_sunset_h: 'Melhores Pontos de Pôr do Sol',
    porto_sunset_p: 'O Jardim do Morro em Vila Nova de Gaia oferece vistas espectaculares sobre o Douro e a Ponte Dom Luís na hora dourada.',
    tag_photo: '📸 Fotografia',
    porto_photo_h: 'Melhores Pontos Fotográficos',
    porto_photo_p: 'Ponte Dom Luís I, a icónica Livraria Lello, a Ribeira, os azulejos da Estação de São Bento e as casas coloridas do Bonfim.',
    tag_rainy: '🌧️ Dia de Chuva',
    porto_rainy_h: 'Plano para Dia de Chuva',
    porto_rainy_p: 'Livraria Lello, Casa da Música, Museu de Arte Contemporânea de Serralves, ou um almoço demorado numa tasca tradicional.',
    tag_classic: '🗺️ Clássico',
    porto_classic_h: 'Roteiro Clássico do Porto',
    porto_classic_p: 'Estação de São Bento → Sé Catedral → Ribeira → Ponte Dom Luís → prova de vinho do Porto em Gaia → pôr do sol no Jardim do Morro.',
    tag_food: '🍷 Gastronomia',
    porto_food_h: 'Gastronomia & Vinho',
    porto_food_p: 'Uma Francesinha no Café Santiago, pastel de nata numa padaria local, bacalhau à Brás, e termine com uma prova de vinho do Porto.',
    tag_beach: '🏖️ Praia',
    porto_beach_h: 'Dia de Praia',
    porto_beach_p: 'A praia de Matosinhos fica a apenas 15 minutos de metro — ideal para banhos e marisco fresco no porto.',
    em_title: 'Emergência & Apoio',
    em_sub: 'Esperamos que nunca precise — mas está aqui caso precise',
    em_112_h: 'Serviços de Emergência',
    em_112_sub: 'Polícia · Bombeiros · Ambulância',
    em_call: 'Ligar',
    em_host_h: 'Contactar Anfitrião',
    em_host_sub: 'Para qualquer problema na propriedade',
    em_hospital_h: 'Hospital Mais Próximo',
    em_pharmacy_h: 'Farmácia 24h',
    em_ride_h: 'Uber / Bolt',
    em_taxi_h: 'Táxi',
    footer_rights: 'Todos os direitos reservados',
    copied: '✓ Copiado!',
    nav_mapa: '🗺️ Mapa do Porto',
    nb_nos: 'Loja NOS (Chips)',
    dl_guide_title: 'Descarregar Guia Offline',
    dl_guide_desc: 'Guarda este guia no teu dispositivo — útil sem internet.',
    dl_guide_btn: '⬇ Descarregar Guia (PT)',
    map_title: 'Mapa da Cidade do Porto',
    map_sub: 'Mapa turístico oficial — toque para abrir ou descarregar',
    map_open: 'Abrir Mapa',
    map_pdf_label: 'Mapa Turístico Oficial do Porto',
    map_open_full: 'Abrir Mapa Completo',
    map_download: 'Descarregar PDF',
  },

  /* ══════════ FRANÇAIS ══════════ */
  fr: {
    logo_sub: 'Guide du Voyageur',
    nav_home: 'Accueil',
    nav_info: 'Infos Essentielles',
    nav_checkin: 'Arrivée / Départ',
    nav_rules: 'Règles de la Maison',
    nav_guide: 'Guide de la Maison',
    nav_kitchen: 'Cuisine',
    nav_rooms_label: 'Chambres',
    nav_bathroom: 'Salle de Bain',
    nav_transport: 'Transports',
    nav_nearby: 'À Proximité',
    nav_porto: 'Guide Porto',
    nav_emergency: '🆘 Urgence',
    bnav_home: 'Accueil',
    bnav_info: 'Infos',
    bnav_rooms: 'Chambres',
    bnav_porto: 'Porto',
    bnav_help: 'Aide',
    hero_badge: 'Porto · Portugal',
    hero_welcome: 'Bienvenue au',
    hero_tagline: 'Votre havre de paix au cœur de Porto',
    rooms_preview_title: 'Choisissez votre Chambre',
    ribeira_mood_short: 'Élégant · Urbain · Spacieux',
    douro_mood_short: 'Chaleureux · Douillet · Doré',
    atlantico_mood_short: 'Calme · Côtier · Lumineux',
    room_discover: 'Découvrir →',
    info_title: 'Informations Essentielles',
    info_subtitle: 'Tout ce dont vous avez besoin, ici',
    address_title: 'Adresse',
    open_maps: 'Ouvrir dans Google Maps',
    wifi_title: 'Wi-Fi',
    wifi_network: 'Réseau',
    wifi_password: 'Mot de passe',
    tap_copy: 'appuyer pour copier',
    wifi_scan: '📷 Scanner pour se connecter automatiquement',
    contact_title: "Contacter l'Hôte",
    contact_urgent: 'Ligne Urgence',
    contact_note: '⚠️ Remplacez les contacts dans index.html avant de publier',
    guide_qr_title: 'Ce Guide du Voyageur',
    guide_qr_desc: 'Partagez ce lien avec vos hôtes ou scannez le code QR',
    guide_qr_note: '⚠️ Mettez à jour SITE_URL dans script.js après déploiement',
    checkin_title: 'Arrivée & Départ',
    checkin_label: 'Arrivée',
    checkin_time_label: 'À partir de :',
    checkin_late_label: 'Arrivée tardive :',
    checkout_label: 'Départ',
    checkout_time_label: "Avant :",
    checkout_late_label: 'Départ tardif :',
    checkout_late_desc: 'Veuillez nous prévenir à l\'avance — nous ferons de notre mieux !',
    key_title: 'Clés & Accès',
    key_1: 'Vous recevrez une clé pour votre chambre et pour l\'entrée principale.',
    key_2: 'Gardez votre clé en sécurité et rendez-la au départ.',
    safe_title: 'Coffre-fort en Chambre',
    safe_1: 'Un coffre-fort est disponible — utilisez-le pour passeports et objets de valeur.',
    safe_2: 'Définissez votre code PIN à l\'arrivée et réinitialisez-le au départ.',
    rules_title: 'Règles de la Maison',
    rules_subtitle: 'Nous demandons à tous les hôtes de respecter ces directives',
    rule_noise_h: 'Bruit & Heures de Silence',
    rule_n1: 'Veuillez maintenir le bruit au minimum en tout temps.',
    rule_n2: 'Soyez particulièrement attentionné les jours ouvrables.',
    rule_n3: 'Pas de musique forte ni de voix élevées à l\'intérieur.',
    rule_smoke_h: 'Non-Fumeur',
    rule_s1: 'Il est interdit de fumer ou de vapoter à l\'intérieur.',
    rule_s2: 'Il est autorisé de fumer uniquement à l\'extérieur.',
    rule_s3: 'Les bougies et l\'encens ne sont pas autorisés.',
    rule_guests_h: 'Visiteurs & Événements',
    rule_g1: 'Aucun visiteur non enregistré n\'est autorisé.',
    rule_g2: 'Les fêtes et rassemblements sont strictement interdits.',
    rule_kitchen_h: 'Cuisine & Espaces Communs',
    rule_k1: 'Lavez toujours la vaisselle immédiatement après utilisation.',
    rule_k2: 'Nettoyez les surfaces et la plaque après chaque utilisation.',
    rule_k3: 'Traitez les espaces communs avec soin et considération.',
    rule_energy_h: 'Avant de Quitter votre Chambre',
    rule_e1: 'Fermez toutes les fenêtres avant de partir.',
    rule_e2: 'Éteignez toutes les lumières.',
    rule_e3: 'Éteignez tous les appareils.',
    rule_bath_h: 'Salle de Bain',
    rule_b1: 'Vérifiez toujours que la chasse d\'eau s\'est arrêtée complètement.',
    rule_b2: 'Uniquement du papier toilette dans les WC.',
    rule_b3: 'Laissez la salle de bain propre pour le prochain hôte.',
    rule_pets_h: 'Animaux',
    rule_p1: 'Les animaux de compagnie ne sont pas autorisés.',
    rule_furniture_h: 'Mobilier & Sols',
    rule_f1: 'Veuillez ne pas faire glisser les chaises ou meubles sur le sol.',
    rule_f2: 'Manipulez tous les meubles avec soin.',
    rules_thank: 'Merci de contribuer à faire de Porto Peace Haven un espace calme et accueillant. 🙏',
    guide_title: 'Guide de la Maison',
    guide_sub: 'Nous sommes ravis de vous accueillir. Tout ce dont vous avez besoin.',
    g_wifi_h: 'Wi-Fi',
    g_wifi_link: 'Voir le code QR →',
    g_bath_h: 'Salle de Bain Partagée',
    g_bath_p: 'La salle de bain est partagée. Soyez attentionné et laissez-la impeccable après chaque utilisation.',
    g_leave_h: 'Avant de Partir',
    g_c1: '✔ Éteindre toutes les lumières',
    g_c2: '✔ Fermer toutes les fenêtres',
    g_c3: '✔ Éteindre tous les appareils',
    g_c4: '✔ Vérifier que la chasse d\'eau s\'est arrêtée',
    g_c5: '✔ Rendre la clé au départ',
    g_quiet_h: 'Vie Tranquille',
    g_quiet_p: 'C\'est un bâtiment résidentiel. Gardez les voix et les sons bas, surtout le matin tôt et le soir.',
    g_tv_h: 'TV & Streaming',
    g_tv_p: 'Chaque chambre dispose d\'une TV avec dongle Android TV. Utilisez la télécommande du dongle pour accéder à Netflix, YouTube et autres apps.',
    g_lamps_h: 'Lampes LED',
    g_lamps_p: 'Votre chambre dispose de lampes LED contrôlables par télécommande. Choisissez votre couleur et luminosité préférées.',
    g_safety_h: 'Sécurité',
    g_sf1: '🔥 Détecteurs de fumée : cuisine & entrée',
    g_sf2: '⚡ Tableau électrique : à l\'entrée',
    g_sf3: '🚨 Services d\'urgence : <strong>112</strong>',
    g_problem_h: 'Quelque chose ne va pas ?',
    g_problem_p: 'Prévenez-nous immédiatement — nous préférons résoudre les problèmes sans délai. Nous sommes à portée d\'un message.',
    g_contact_btn: "Contacter l'Hôte",
    review_h: 'Vous appréciez votre séjour ?',
    review_p: 'Nous mettons beaucoup de soin dans chaque détail de Porto Peace Haven. Si nous avons rendu votre voyage un peu meilleur, un avis nous tient vraiment à cœur.',
    review_btn: 'Laisser un Avis ⭐',
    kitchen_title: 'Guide de la Cuisine',
    kitchen_sub: 'Comment utiliser tout ce qui se trouve dans la cuisine',
    k_hob_h: 'Plaque à Induction',
    k_hob1: 'Placez une casserole compatible (magnétique) sur la plaque.',
    k_hob2: 'Appuyez sur le bouton d\'alimentation pour allumer.',
    k_hob3: 'Sélectionnez votre zone et ajustez la chaleur.',
    k_hob4: 'La plaque s\'éteint automatiquement après 2 heures.',
    k_hood_h: 'Hotte Aspirante',
    k_hood1: 'Allumez avant de cuisiner pour éviter l\'accumulation de fumée.',
    k_hood2: 'Ajustez la vitesse (1 = faible · 3 = fort).',
    k_hood3: 'Laissez tourner brièvement après la cuisson, puis éteignez.',
    k_oven_h: 'Mini Four',
    k_oven1: 'Placez la nourriture sur le plateau fourni.',
    k_oven2: 'Réglez la température avec le bouton gauche.',
    k_oven3: 'Réglez le temps de cuisson avec le bouton droit.',
    k_oven4: 'Le four s\'éteint automatiquement à la fin du minuteur.',
    k_micro_h: 'Micro-ondes',
    k_micro1: 'Utilisez uniquement des récipients adaptés au micro-ondes.',
    k_micro2: 'Réglez le temps et la puissance, puis appuyez sur démarrer.',
    k_micro3: 'N\'utilisez jamais de récipients métalliques ou de papier aluminium.',
    k_kettle_h: 'Bouilloire',
    k_kettle1: 'Remplissez jusqu\'à la ligne maximale indiquée.',
    k_kettle2: 'Placez sur la base et appuyez sur l\'interrupteur.',
    k_kettle3: 'S\'éteint automatiquement une fois l\'eau bouillie.',
    k_coffee_h: 'Machine à Café à Capsules',
    k_coffee1: 'Remplissez le réservoir d\'eau et allumez la machine.',
    k_coffee2: 'Insérez une capsule compatible.',
    k_coffee3: 'Placez votre tasse et appuyez sur préparer.',
    k_coffee4: 'Retirez et jetez la capsule usagée après chaque utilisation.',
    k_utensils_h: 'Ce qui est Disponible',
    k_utensils_p: 'Assiettes, bols, verres, mugs, tasses, couverts, casseroles, poêles, planches à découper, couteaux, passoire, râpe et ustensiles de cuisine.',
    k_clean_h: 'Produits d\'Entretien',
    k_clean_p: 'Sacs poubelle, éponge, chiffons et liquide vaisselle sous l\'évier.',
    k_etiquette_h: 'Étiquette en Cuisine',
    k_eq1: '🍽️ Lavez et séchez la vaisselle immédiatement après chaque utilisation.',
    k_eq2: '🧹 Nettoyez la plaque, les surfaces et l\'évier après utilisation.',
    k_eq3: '🗑️ Jetez les déchets dans les sacs poubelle fournis.',
    k_eq4: '♻️ Séparez le recyclable des ordures ménagères.',
    k_eq5: '🤝 C\'est une cuisine partagée — laissez-la telle que vous l\'avez trouvée.',
    rooms_title: 'Guides des Chambres',
    ribeira_tagline: 'Élégant, spacieux et urbain — l\'âme du vieux Porto',
    feat_tv_h: 'TV & Dongle Android',
    feat_tv_p: 'Utilisez la télécommande du dongle Android (noire, plus petite) pour naviguer. Utilisez la télécommande TV pour changer l\'entrée HDMI si nécessaire.',
    feat_remotes_h: 'Deux Télécommandes',
    ribeira_remotes_p: 'Vous avez deux télécommandes : une pour la TV et une pour le dongle Android. La télécommande du dongle contrôle aussi le bandeau LED derrière la TV.',
    feat_led_h: 'Éclairage LED',
    ribeira_led_p: 'La télécommande LED contrôle la lampe de chevet et le bandeau LED derrière la TV. Utilisez-la pour régler votre couleur et luminosité préférées.',
    ribeira_curtains_h: 'Rideaux & Fenêtres',
    ribeira_curtains_p: 'Manipulez les rideaux et fenêtres avec soin. Fermez toujours toutes les fenêtres avant de partir.',
    ribeira_storage_h: 'Rangement & Espace de Travail',
    ribeira_storage_p: 'Ribeira est la chambre la plus spacieuse avec un grand rangement. Le meuble mural sert aussi de bureau.',
    feat_fan_h: 'Ventilateur',
    feat_fan_p: 'Un ventilateur est disponible. Ajustez la vitesse et la direction comme vous le souhaitez.',
    feat_fridge_h: 'Mini Réfrigérateur',
    feat_fridge_p: 'Un mini réfrigérateur est disponible pour usage personnel.',
    feat_sockets_h: 'Prises avec USB & USB-C',
    feat_sockets_p: 'Toutes les prises incluent des ports USB-A et USB-C.',
    feat_mirror_h: 'Miroir',
    feat_mirror_p: 'Un miroir plein pied est disponible dans la chambre.',
    feat_rail_h: 'Portant à Vêtements',
    feat_rail_p: 'Un portant est disponible pour suspendre vos vêtements.',
    feat_blanket_h: 'Couverture Supplémentaire',
    feat_blanket_p: 'Une couverture supplémentaire est rangée dans le pouf aux pieds du lit.',
    room_reminder: '💡 Avant de partir : éteignez les lumières · fermez les fenêtres · éteignez les appareils',
    douro_tagline: 'Chaud, doré et douillet — comme un coucher de soleil à Porto',
    douro_remotes_p: 'Deux télécommandes : une pour la TV et une pour le dongle. La télécommande LED contrôle la couleur de la lampe de chevet.',
    douro_led_p: 'Utilisez la télécommande LED pour ajuster la couleur et la luminosité de votre lampe de chevet.',
    douro_storage_h: 'Rangement',
    douro_storage_p: 'Douro dispose d\'un espace de rangement dédié. Compact et parfaitement organisé.',
    atlantico_tagline: 'Lumineux, paisible et aéré — votre refuge côtier en ville',
    atlantico_remotes_p: 'Deux télécommandes : TV et dongle Android. La télécommande LED contrôle la lampe de chevet.',
    atlantico_led_p: '⚠️ Pour changer uniquement la couleur de la lampe de chevet sans affecter la TV : éteignez d\'abord la TV, puis pointez la télécommande LED directement vers la lampe.',
    atlantico_desk_h: 'Bureau / Espace de Travail',
    atlantico_desk_p: 'Atlântico comprend un espace bureau dédié — parfait pour le travail à distance.',
    bath_title: 'Guide de la Salle de Bain',
    bath_shared_h: 'Salle de Bain Partagée',
    bath_shared_p: 'La salle de bain est partagée. Soyez attentionné et laissez-la propre après chaque utilisation.',
    bath_shower_h: 'Durée de la Douche',
    bath_shower_p: 'Évitez les douches très longues, surtout le matin, pour que tous les hôtes aient accès à l\'eau chaude.',
    bath_toilet_h: 'Toilettes',
    bath_t1: '✔ Vérifiez toujours que la chasse d\'eau s\'est arrêtée complètement.',
    bath_t2: '✔ Uniquement du papier toilette dans les WC.',
    bath_t3: '✘ Pas de lingettes, cotons ou articles hygiéniques.',
    bath_cabinet_h: 'Armoire de Rangement',
    bath_cabinet_p: 'Articles de toilette et produits d\'entretien supplémentaires dans l\'armoire à côté de la salle de bain.',
    bath_dryer_h: 'Sèche-cheveux',
    bath_dryer_p: 'Un sèche-cheveux est disponible dans l\'armoire à miroir. Veuillez le remettre après utilisation.',
    bath_adapter_h: 'Adaptateur Universel',
    bath_adapter_p: 'Un adaptateur universel est disponible dans l\'armoire à miroir pour les voyageurs internationaux.',
    transport_title: 'Se Déplacer à Porto',
    transport_sub: 'Porto est très agréable à pied et bien desservie par les transports',
    tr_metro_h: 'Station de Métro la Plus Proche',
    tr_metro_map: 'Voir la Carte du Métro',
    tr_bus_h: 'Bus & Tram',
    tr_stcp: 'Lignes de Bus STCP',
    tr_ride_h: 'Taxis & Applications de Transport',
    tr_taxi: 'Taxi',
    tr_maps_h: 'Itinéraire depuis Porto Peace Haven',
    nearby_title: 'Lieux Utiles à Proximité',
    nb_supermarket: 'Supermarché',
    nb_pharmacy: 'Pharmacie',
    nb_hospital: 'Hôpital',
    nb_cafe: 'Restaurants',
    nb_transport: 'Transports',
    nb_atm: 'Distributeur',
    nb_laundry: 'Laverie',
    go_btn: 'Y aller →',
    porto_title: 'Que Faire à Porto',
    porto_sub: 'Nos meilleures recommandations pour votre séjour',
    tag_sunset: '🌅 Coucher de Soleil',
    porto_sunset_h: 'Meilleurs Spots Coucher de Soleil',
    porto_sunset_p: 'Le Jardim do Morro à Vila Nova de Gaia offre des vues spectaculaires sur le Douro et le Pont Dom Luís à l\'heure dorée.',
    tag_photo: '📸 Photographie',
    porto_photo_h: 'Meilleurs Spots Photo',
    porto_photo_p: 'Pont Dom Luís I, la célèbre Livraria Lello, le front de mer Ribeira, les azulejos de la Gare de São Bento et les maisons colorées de Bonfim.',
    tag_rainy: '🌧️ Jour de Pluie',
    porto_rainy_h: 'Plan pour Jour de Pluie',
    porto_rainy_p: 'La Livraria Lello, la Casa da Música, le Musée Serralves, ou un long déjeuner dans une tasca traditionnelle.',
    tag_classic: '🗺️ Classique',
    porto_classic_h: 'Itinéraire Classique de Porto',
    porto_classic_p: 'Gare de São Bento → Cathédrale Sé → Ribeira → Pont Dom Luís → dégustation de porto à Gaia → coucher de soleil au Jardim do Morro.',
    tag_food: '🍷 Gastronomie',
    porto_food_h: 'Gastronomie & Vin',
    porto_food_p: 'Une Francesinha au Café Santiago, pastel de nata dans une boulangerie locale, bacalhau à Brás, et terminez avec une dégustation de porto.',
    tag_beach: '🏖️ Plage',
    porto_beach_h: 'Journée Côtière & Plage',
    porto_beach_p: 'La plage de Matosinhos est à seulement 15 minutes en métro — idéale pour se baigner et déguster des fruits de mer frais.',
    em_title: 'Urgence & Assistance',
    em_sub: 'Nous espérons que vous n\'en aurez jamais besoin — mais c\'est là au cas où',
    em_112_h: 'Services d\'Urgence',
    em_112_sub: 'Police · Pompiers · Ambulance',
    em_call: 'Appeler',
    em_host_h: "Contacter l'Hôte",
    em_host_sub: 'Pour tout problème lié à la propriété',
    em_hospital_h: 'Hôpital le Plus Proche',
    em_pharmacy_h: 'Pharmacie 24h',
    em_ride_h: 'Uber / Bolt',
    em_taxi_h: 'Taxi',
    footer_rights: 'Tous droits réservés',
    copied: '✓ Copié !',
    nav_mapa: '🗺️ Plan de Porto',
    nb_nos: 'Boutique NOS (SIM)',
    dl_guide_title: 'Télécharger le Guide Hors Ligne',
    dl_guide_desc: 'Enregistrez ce guide sur votre appareil — utile sans internet.',
    dl_guide_btn: '⬇ Télécharger le Guide (FR)',
    map_title: 'Plan de la Ville de Porto',
    map_sub: 'Plan touristique officiel — appuyez pour ouvrir ou télécharger',
    map_open: 'Ouvrir le Plan',
    map_pdf_label: 'Plan Touristique Officiel de Porto',
    map_open_full: 'Ouvrir Plan Complet',
    map_download: 'Télécharger PDF',
  },

  /* ══════════ ESPAÑOL ══════════ */
  es: {
    logo_sub: 'Guía del Huésped',
    nav_home: 'Inicio',
    nav_info: 'Info Esencial',
    nav_checkin: 'Entrada / Salida',
    nav_rules: 'Normas de la Casa',
    nav_guide: 'Guía de la Casa',
    nav_kitchen: 'Cocina',
    nav_rooms_label: 'Habitaciones',
    nav_bathroom: 'Baño',
    nav_transport: 'Transporte',
    nav_nearby: 'Lugares Cercanos',
    nav_porto: 'Guía de Oporto',
    nav_emergency: '🆘 Emergencia',
    bnav_home: 'Inicio',
    bnav_info: 'Info',
    bnav_rooms: 'Habitac.',
    bnav_porto: 'Oporto',
    bnav_help: 'Ayuda',
    hero_badge: 'Oporto · Portugal',
    hero_welcome: 'Bienvenido al',
    hero_tagline: 'Tu hogar tranquilo en el corazón de Oporto',
    rooms_preview_title: 'Elige tu Habitación',
    ribeira_mood_short: 'Elegante · Urbano · Espacioso',
    douro_mood_short: 'Cálido · Acogedor · Dorado',
    atlantico_mood_short: 'Tranquilo · Costero · Luminoso',
    room_discover: 'Descubrir →',
    info_title: 'Información Esencial',
    info_subtitle: 'Todo lo que necesitas, aquí mismo',
    address_title: 'Dirección',
    open_maps: 'Abrir en Google Maps',
    wifi_title: 'Wi-Fi',
    wifi_network: 'Red',
    wifi_password: 'Contraseña',
    tap_copy: 'toca para copiar',
    wifi_scan: '📷 Escanea para conectarte automáticamente',
    contact_title: 'Contactar al Anfitrión',
    contact_urgent: 'Línea Urgente',
    contact_note: '⚠️ Reemplaza los contactos en index.html antes de publicar',
    guide_qr_title: 'Esta Guía del Huésped',
    guide_qr_desc: 'Comparte este enlace con tus huéspedes o escanea el código QR',
    guide_qr_note: '⚠️ Actualiza SITE_URL en script.js después del despliegue',
    checkin_title: 'Entrada & Salida',
    checkin_label: 'Entrada',
    checkin_time_label: 'Desde:',
    checkin_late_label: 'Llegada tardía:',
    checkout_label: 'Salida',
    checkout_time_label: 'Antes de:',
    checkout_late_label: 'Salida tardía:',
    checkout_late_desc: 'Por favor avisa con antelación — ¡haremos lo posible!',
    key_title: 'Llaves & Acceso',
    key_1: 'Recibirás una llave para tu habitación y para la entrada principal.',
    key_2: 'Por favor guarda la llave en lugar seguro y devuélvela al salir.',
    safe_title: 'Caja Fuerte en la Habitación',
    safe_1: 'Hay una caja fuerte disponible — úsala para pasaportes y objetos de valor.',
    safe_2: 'Establece tu PIN personal al llegar y restablécelo al salir.',
    rules_title: 'Normas de la Casa',
    rules_subtitle: 'Pedimos a todos los huéspedes que respeten estas directrices',
    rule_noise_h: 'Ruido & Horas de Silencio',
    rule_n1: 'Por favor mantén el ruido al mínimo en todo momento.',
    rule_n2: 'Sé especialmente considerado los días laborables.',
    rule_n3: 'Sin música alta ni voces elevadas en el interior.',
    rule_smoke_h: 'Prohibido Fumar',
    rule_s1: 'Está prohibido fumar o vapear en el interior.',
    rule_s2: 'Se permite fumar únicamente en el exterior del edificio.',
    rule_s3: 'Las velas y el incienso no están permitidos.',
    rule_guests_h: 'Visitantes & Eventos',
    rule_g1: 'No se permiten visitantes no registrados.',
    rule_g2: 'Las fiestas y reuniones están estrictamente prohibidas.',
    rule_kitchen_h: 'Cocina & Zonas Comunes',
    rule_k1: 'Lava siempre los platos inmediatamente después de usarlos.',
    rule_k2: 'Limpia las superficies y la vitrocerámica tras cada uso.',
    rule_k3: 'Trata las zonas comunes con cuidado y consideración.',
    rule_energy_h: 'Antes de Salir de tu Habitación',
    rule_e1: 'Cierra todas las ventanas antes de salir.',
    rule_e2: 'Apaga todas las luces.',
    rule_e3: 'Apaga todos los electrodomésticos.',
    rule_bath_h: 'Baño',
    rule_b1: 'Comprueba siempre que la cisterna se ha vaciado completamente.',
    rule_b2: 'Solo papel higiénico en el inodoro.',
    rule_b3: 'Deja el baño limpio para el siguiente huésped.',
    rule_pets_h: 'Mascotas',
    rule_p1: 'No se permiten mascotas.',
    rule_furniture_h: 'Muebles & Suelos',
    rule_f1: 'Por favor no arrastres sillas o muebles por el suelo.',
    rule_f2: 'Trata todos los muebles con cuidado.',
    rules_thank: 'Gracias por ayudarnos a mantener Porto Peace Haven como un espacio tranquilo y acogedor. 🙏',
    guide_title: 'Guía de la Casa',
    guide_sub: 'Estamos encantados de tenerte aquí. Todo lo que necesitas para sentirte como en casa.',
    g_wifi_h: 'Wi-Fi',
    g_wifi_link: 'Ver código QR →',
    g_bath_h: 'Baño Compartido',
    g_bath_p: 'El baño es compartido. Por favor sé considerado y déjalo impecable tras cada uso.',
    g_leave_h: 'Antes de Salir',
    g_c1: '✔ Apagar todas las luces',
    g_c2: '✔ Cerrar todas las ventanas',
    g_c3: '✔ Apagar todos los electrodomésticos',
    g_c4: '✔ Comprobar que la cisterna se ha vaciado',
    g_c5: '✔ Devolver la llave al hacer check-out',
    g_quiet_h: 'Vida Tranquila',
    g_quiet_p: 'Es un edificio residencial. Por favor mantén voces y sonidos bajos, especialmente de madrugada y por las noches.',
    g_tv_h: 'TV & Streaming',
    g_tv_p: 'Cada habitación tiene una TV con dongle Android TV. Usa el mando del dongle para acceder a Netflix, YouTube y otras apps.',
    g_lamps_h: 'Lámparas LED',
    g_lamps_p: 'Tu habitación tiene lámparas LED controlables por mando. Elige tu color y brillo favoritos.',
    g_safety_h: 'Seguridad',
    g_sf1: '🔥 Detectores de humo: cocina y entrada',
    g_sf2: '⚡ Cuadro eléctrico: en la entrada',
    g_sf3: '🚨 Servicios de emergencia: <strong>112</strong>',
    g_problem_h: '¿Algo no está bien?',
    g_problem_p: 'Por favor comunícanoslo de inmediato — preferimos solucionar las cosas enseguida. Estamos a un mensaje de distancia.',
    g_contact_btn: 'Contactar Anfitrión',
    review_h: '¿Disfrutando de tu estancia?',
    review_p: 'Ponemos mucho cariño en cada detalle de Porto Peace Haven. Si hemos hecho tu viaje un poco mejor, una reseña significa mucho para nosotros.',
    review_btn: 'Dejar una Reseña ⭐',
    kitchen_title: 'Guía de la Cocina',
    kitchen_sub: 'Cómo usar todo en la cocina',
    k_hob_h: 'Vitrocerámica de Inducción',
    k_hob1: 'Coloca una cazuela compatible (magnética) sobre la superficie.',
    k_hob2: 'Pulsa el botón de encendido.',
    k_hob3: 'Selecciona tu zona y ajusta el calor con los controles + / –.',
    k_hob4: 'La vitro se apaga automáticamente después de 2 horas.',
    k_hood_h: 'Campana Extractora',
    k_hood1: 'Enciéndela antes de cocinar para evitar acumulación de humo.',
    k_hood2: 'Ajusta la velocidad (1 = baja · 3 = alta).',
    k_hood3: 'Déjala en marcha un momento tras cocinar, luego apágala.',
    k_oven_h: 'Mini Horno',
    k_oven1: 'Coloca la comida en la bandeja o rejilla.',
    k_oven2: 'Ajusta la temperatura con el dial izquierdo.',
    k_oven3: 'Ajusta el tiempo con el dial derecho.',
    k_oven4: 'El horno se apaga automáticamente al finalizar.',
    k_micro_h: 'Microondas',
    k_micro1: 'Usa solo recipientes aptos para microondas.',
    k_micro2: 'Ajusta tiempo y potencia, luego pulsa iniciar.',
    k_micro3: 'Nunca uses recipientes metálicos o papel de aluminio.',
    k_kettle_h: 'Hervidor',
    k_kettle1: 'Llena hasta la línea máxima indicada.',
    k_kettle2: 'Coloca sobre la base y pulsa el interruptor.',
    k_kettle3: 'Se apaga automáticamente al hervir.',
    k_coffee_h: 'Cafetera de Cápsulas',
    k_coffee1: 'Llena el depósito de agua y enciende la máquina.',
    k_coffee2: 'Inserta una cápsula compatible.',
    k_coffee3: 'Coloca tu taza y pulsa preparar.',
    k_coffee4: 'Retira y desecha la cápsula usada tras cada uso.',
    k_utensils_h: 'Qué hay Disponible',
    k_utensils_p: 'Platos, boles, vasos, tazas, cubiertos, ollas, sartenes, tablas, cuchillos, colador, rallador y utensilios de cocina.',
    k_clean_h: 'Productos de Limpieza',
    k_clean_p: 'Bolsas de basura, esponja, trapos y lavavajillas bajo el fregadero.',
    k_etiquette_h: 'Etiqueta en la Cocina',
    k_eq1: '🍽️ Lava y seca los platos inmediatamente tras cada uso.',
    k_eq2: '🧹 Limpia la vitro, superficies y fregadero tras usar.',
    k_eq3: '🗑️ Desecha la basura en las bolsas proporcionadas.',
    k_eq4: '♻️ Separa el reciclaje de los residuos generales.',
    k_eq5: '🤝 Es una cocina compartida — déjala tal como la encontraste.',
    rooms_title: 'Guías de Habitaciones',
    ribeira_tagline: 'Elegante, espacioso y urbano — el alma del viejo Oporto',
    feat_tv_h: 'TV & Dongle Android',
    feat_tv_p: 'Usa el mando del dongle Android (negro, más pequeño) para navegar por las apps. Usa el mando de la TV para cambiar la entrada HDMI si es necesario.',
    feat_remotes_h: 'Dos Mandos',
    ribeira_remotes_p: 'Tienes dos mandos: uno para la TV y uno para el dongle Android. El mando del dongle también controla la tira LED detrás de la TV.',
    feat_led_h: 'Iluminación LED',
    ribeira_led_p: 'El mando LED controla la lámpara de mesita y la tira LED detrás de la TV.',
    ribeira_curtains_h: 'Cortinas & Ventanas',
    ribeira_curtains_p: 'Por favor maneja las cortinas y ventanas con cuidado. Cierra siempre todas las ventanas antes de salir.',
    ribeira_storage_h: 'Almacenamiento & Zona de Trabajo',
    ribeira_storage_p: 'Ribeira es la habitación más espaciosa con amplio almacenamiento. El mueble de pared sirve también como escritorio.',
    feat_fan_h: 'Ventilador',
    feat_fan_p: 'Hay un ventilador disponible. Ajusta la velocidad y dirección a tu gusto.',
    feat_fridge_h: 'Mininevera',
    feat_fridge_p: 'Hay una mininevera disponible para uso personal.',
    feat_sockets_h: 'Enchufes con USB & USB-C',
    feat_sockets_p: 'Todos los enchufes incluyen puertos USB-A y USB-C.',
    feat_mirror_h: 'Espejo',
    feat_mirror_p: 'Hay un espejo de cuerpo entero disponible.',
    feat_rail_h: 'Perchero',
    feat_rail_p: 'Hay un perchero disponible para colgar ropa.',
    feat_blanket_h: 'Manta Extra',
    feat_blanket_p: 'Una manta extra está guardada en el puf a los pies de la cama.',
    room_reminder: '💡 Antes de salir: apaga las luces · cierra las ventanas · apaga los electrodomésticos',
    douro_tagline: 'Cálido, dorado y acogedor — como un atardecer en Oporto',
    douro_remotes_p: 'Dos mandos: uno para la TV y uno para el dongle. El mando LED controla el color de la lámpara de mesita.',
    douro_led_p: 'Usa el mando LED para ajustar el color y brillo de la lámpara de mesita.',
    douro_storage_h: 'Almacenamiento',
    douro_storage_p: 'Douro tiene una zona de almacenamiento dedicada. Compacta y perfectamente organizada.',
    atlantico_tagline: 'Luminoso, tranquilo y aireado — tu refugio costero en la ciudad',
    atlantico_remotes_p: 'Dos mandos: TV y dongle Android. El mando LED controla la lámpara de mesita.',
    atlantico_led_p: '⚠️ Para cambiar solo el color de la lámpara de mesita sin afectar a la TV: primero apaga la TV, luego apunta el mando LED directamente hacia la lámpara.',
    atlantico_desk_h: 'Escritorio / Zona de Trabajo',
    atlantico_desk_p: 'Atlântico incluye una zona de escritorio dedicada — perfecta para trabajo remoto.',
    bath_title: 'Guía del Baño',
    bath_shared_h: 'Baño Compartido',
    bath_shared_p: 'El baño es compartido. Sé considerado y déjalo limpio tras cada uso.',
    bath_shower_h: 'Duración de la Ducha',
    bath_shower_p: 'Evita duchas muy largas, especialmente por las mañanas, para que todos tengan agua caliente.',
    bath_toilet_h: 'Inodoro',
    bath_t1: '✔ Comprueba siempre que la cisterna se ha vaciado completamente.',
    bath_t2: '✔ Solo papel higiénico en el inodoro.',
    bath_t3: '✘ Sin toallitas, algodones ni artículos higiénicos.',
    bath_cabinet_h: 'Armario de Almacenamiento',
    bath_cabinet_p: 'Artículos de aseo y productos de limpieza extra en el armario junto al baño.',
    bath_dryer_h: 'Secador de Pelo',
    bath_dryer_p: 'Hay un secador de pelo en el armario espejo. Por favor devuélvelo tras usarlo.',
    bath_adapter_h: 'Adaptador Universal',
    bath_adapter_p: 'Hay un adaptador universal en el armario espejo para huéspedes internacionales.',
    transport_title: 'Moverse por Oporto',
    transport_sub: 'Oporto es muy caminable y bien conectada por transporte público',
    tr_metro_h: 'Parada de Metro Más Cercana',
    tr_metro_map: 'Ver Mapa del Metro',
    tr_bus_h: 'Autobús & Tranvía',
    tr_stcp: 'Líneas de Autobús STCP',
    tr_ride_h: 'Taxis & Apps de Transporte',
    tr_taxi: 'Taxi',
    tr_maps_h: 'Indicaciones desde Porto Peace Haven',
    nearby_title: 'Lugares Útiles Cercanos',
    nb_supermarket: 'Supermercado',
    nb_pharmacy: 'Farmacia',
    nb_hospital: 'Hospital',
    nb_cafe: 'Restaurante',
    nb_transport: 'Transporte',
    nb_atm: 'Cajero',
    nb_laundry: 'Lavandería',
    go_btn: 'Ir →',
    porto_title: 'Qué Hacer en Oporto',
    porto_sub: 'Nuestras recomendaciones favoritas para tu estancia',
    tag_sunset: '🌅 Atardecer',
    porto_sunset_h: 'Mejores Puntos para el Atardecer',
    porto_sunset_p: 'El Jardim do Morro en Vila Nova de Gaia ofrece vistas espectaculares sobre el Duero y el Puente Dom Luís en la hora dorada.',
    tag_photo: '📸 Fotografía',
    porto_photo_h: 'Mejores Spots Fotográficos',
    porto_photo_p: 'Puente Dom Luís I, la icónica Livraria Lello, el frente fluvial de Ribeira, los azulejos de la Estación de São Bento y las casas de colores de Bonfim.',
    tag_rainy: '🌧️ Día de Lluvia',
    porto_rainy_h: 'Plan para Día de Lluvia',
    porto_rainy_p: 'Librería Lello, Casa da Música, Museo Serralves o un largo almuerzo en una tasca tradicional.',
    tag_classic: '🗺️ Clásico',
    porto_classic_h: 'Itinerario Clásico de Oporto',
    porto_classic_p: 'Estación São Bento → Catedral Sé → Ribeira → Puente Dom Luís → cata de vino de Oporto en Gaia → atardecer en Jardim do Morro.',
    tag_food: '🍷 Gastronomía',
    porto_food_h: 'Gastronomía & Vino',
    porto_food_p: 'Una Francesinha en el Café Santiago, pastel de nata, bacalhau à Brás y termina con una cata de vino de Oporto.',
    tag_beach: '🏖️ Playa',
    porto_beach_h: 'Día de Playa',
    porto_beach_p: 'La playa de Matosinhos está a solo 15 minutos en metro — ideal para bañarse y comer marisco fresco.',
    em_title: 'Emergencia & Asistencia',
    em_sub: 'Esperamos que nunca lo necesites — pero aquí está por si acaso',
    em_112_h: 'Servicios de Emergencia',
    em_112_sub: 'Policía · Bomberos · Ambulancia',
    em_call: 'Llamar',
    em_host_h: 'Contactar Anfitrión',
    em_host_sub: 'Para cualquier problema en la propiedad',
    em_hospital_h: 'Hospital Más Cercano',
    em_pharmacy_h: 'Farmacia 24h',
    em_ride_h: 'Uber / Bolt',
    em_taxi_h: 'Taxi',
    footer_rights: 'Todos los derechos reservados',
    copied: '✓ ¡Copiado!',
    nav_mapa: '🗺️ Mapa de Oporto',
    nb_nos: 'Tienda NOS (SIM)',
    dl_guide_title: 'Descargar Guía Sin Conexión',
    dl_guide_desc: 'Guarda esta guía en tu dispositivo — útil sin internet.',
    dl_guide_btn: '⬇ Descargar Guía (ES)',
    map_title: 'Mapa de la Ciudad de Oporto',
    map_sub: 'Mapa turístico oficial — toca para abrir o descargar',
    map_open: 'Abrir Mapa',
    map_pdf_label: 'Mapa Turístico Oficial de Porto',
    map_open_full: 'Abrir Mapa Completo',
    map_download: 'Descargar PDF',
  },

  /* ══════════ DEUTSCH ══════════ */
  de: {
    logo_sub: 'Gästeguide',
    nav_home: 'Startseite',
    nav_info: 'Wichtige Infos',
    nav_checkin: 'An- & Abreise',
    nav_rules: 'Hausregeln',
    nav_guide: 'Hausführer',
    nav_kitchen: 'Küche',
    nav_rooms_label: 'Zimmer',
    nav_bathroom: 'Badezimmer',
    nav_transport: 'Transport',
    nav_nearby: 'In der Nähe',
    nav_porto: 'Porto-Guide',
    nav_emergency: '🆘 Notfall',
    bnav_home: 'Start',
    bnav_info: 'Info',
    bnav_rooms: 'Zimmer',
    bnav_porto: 'Porto',
    bnav_help: 'Hilfe',
    hero_badge: 'Porto · Portugal',
    hero_welcome: 'Willkommen im',
    hero_tagline: 'Ihr ruhiges Zuhause im Herzen von Porto',
    rooms_preview_title: 'Wählen Sie Ihr Zimmer',
    ribeira_mood_short: 'Elegant · Urban · Geräumig',
    douro_mood_short: 'Warm · Gemütlich · Golden',
    atlantico_mood_short: 'Ruhig · Küstennahe · Hell',
    room_discover: 'Entdecken →',
    info_title: 'Wichtige Informationen',
    info_subtitle: 'Alles, was Sie brauchen, direkt hier',
    address_title: 'Adresse',
    open_maps: 'In Google Maps öffnen',
    wifi_title: 'WLAN',
    wifi_network: 'Netzwerk',
    wifi_password: 'Passwort',
    tap_copy: 'tippen zum Kopieren',
    wifi_scan: '📷 Scannen für automatische Verbindung',
    contact_title: 'Gastgeber kontaktieren',
    contact_urgent: 'Notfallnummer',
    contact_note: '⚠️ Ersetzen Sie die Kontaktdaten in index.html vor der Veröffentlichung',
    guide_qr_title: 'Dieser Gästeguide',
    guide_qr_desc: 'Teilen Sie diesen Link mit Ihren Gästen oder scannen Sie den QR-Code',
    guide_qr_note: '⚠️ Aktualisieren Sie SITE_URL in script.js nach der Bereitstellung',
    checkin_title: 'An- & Abreise',
    checkin_label: 'Anreise',
    checkin_time_label: 'Ab:',
    checkin_late_label: 'Späte Ankunft:',
    checkout_label: 'Abreise',
    checkout_time_label: 'Bis:',
    checkout_late_label: 'Späte Abreise:',
    checkout_late_desc: 'Bitte vorab anfragen — wir tun unser Bestes!',
    key_title: 'Schlüssel & Zugang',
    key_1: 'Sie erhalten einen Schlüssel für Ihr Zimmer und den Haupteingang.',
    key_2: 'Bitte bewahren Sie den Schlüssel sicher auf und geben Sie ihn bei Abreise zurück.',
    safe_title: 'Zimmer-Safe',
    safe_1: 'Ein Safe steht zur Verfügung — nutzen Sie ihn für Pässe und Wertsachen.',
    safe_2: 'Legen Sie bei Ankunft Ihren PIN fest und setzen Sie ihn bei Abreise zurück.',
    rules_title: 'Hausregeln',
    rules_subtitle: 'Wir bitten alle Gäste, diese Richtlinien zu respektieren',
    rule_noise_h: 'Lärm & Ruhezeiten',
    rule_n1: 'Bitte halten Sie Lärm jederzeit auf ein Minimum.',
    rule_n2: 'Seien Sie besonders rücksichtsvoll an Werktagen.',
    rule_n3: 'Keine laute Musik oder erhobene Stimmen im Haus.',
    rule_smoke_h: 'Rauchverbot',
    rule_s1: 'Rauchen und Dampfen ist im Gebäude verboten.',
    rule_s2: 'Rauchen ist nur außerhalb des Gebäudes gestattet.',
    rule_s3: 'Kerzen und Räucherstäbchen sind nicht erlaubt.',
    rule_guests_h: 'Besucher & Veranstaltungen',
    rule_g1: 'Nicht registrierte Besucher sind nicht gestattet.',
    rule_g2: 'Partys und gesellschaftliche Zusammenkünfte sind streng verboten.',
    rule_kitchen_h: 'Küche & Gemeinschaftsbereiche',
    rule_k1: 'Spülen Sie das Geschirr immer sofort nach der Benutzung.',
    rule_k2: 'Reinigen Sie die Arbeitsflächen und den Herd nach jedem Gebrauch.',
    rule_k3: 'Behandeln Sie Gemeinschaftsbereiche mit Sorgfalt.',
    rule_energy_h: 'Bevor Sie Ihr Zimmer verlassen',
    rule_e1: 'Schließen Sie alle Fenster.',
    rule_e2: 'Schalten Sie alle Lichter aus.',
    rule_e3: 'Schalten Sie alle Geräte aus.',
    rule_bath_h: 'Badezimmer',
    rule_b1: 'Überprüfen Sie immer, dass die Toilettenspülung vollständig gestoppt hat.',
    rule_b2: 'Nur Toilettenpapier darf gespült werden.',
    rule_b3: 'Hinterlassen Sie das Badezimmer sauber.',
    rule_pets_h: 'Haustiere',
    rule_p1: 'Haustiere sind nicht gestattet.',
    rule_furniture_h: 'Möbel & Böden',
    rule_f1: 'Bitte ziehen Sie keine Stühle oder Möbel über den Boden.',
    rule_f2: 'Behandeln Sie alle Einrichtungsgegenstände mit Sorgfalt.',
    rules_thank: 'Vielen Dank, dass Sie Porto Peace Haven als ruhigen, einladenden Ort für alle bewahren helfen. 🙏',
    guide_title: 'Hausführer',
    guide_sub: 'Wir freuen uns sehr, Sie hier zu haben. Alles, was Sie brauchen, um sich wie zu Hause zu fühlen.',
    g_wifi_h: 'WLAN',
    g_wifi_link: 'QR-Code anzeigen →',
    g_bath_h: 'Gemeinsames Badezimmer',
    g_bath_p: 'Das Badezimmer wird von Gästen geteilt. Bitte seien Sie rücksichtsvoll und hinterlassen Sie es makellos.',
    g_leave_h: 'Bevor Sie gehen',
    g_c1: '✔ Alle Lichter ausschalten',
    g_c2: '✔ Alle Fenster schließen',
    g_c3: '✔ Alle Geräte ausschalten',
    g_c4: '✔ Prüfen, dass die Toilettenspülung gestoppt hat',
    g_c5: '✔ Schlüssel beim Check-out zurückgeben',
    g_quiet_h: 'Ruhiges Zusammenleben',
    g_quiet_p: 'Dies ist ein Wohngebäude. Bitte halten Sie Stimmen und Geräusche niedrig, besonders früh morgens und abends.',
    g_tv_h: 'TV & Streaming',
    g_tv_p: 'Jedes Zimmer hat einen TV mit Android TV Dongle. Verwenden Sie die Dongle-Fernbedienung für Netflix, YouTube und andere Apps.',
    g_lamps_h: 'LED-Stimmungslampen',
    g_lamps_p: 'Ihr Zimmer hat per Fernbedienung steuerbare LED-Lampen. Wählen Sie Ihre Lieblingsfarbe und -helligkeit.',
    g_safety_h: 'Sicherheit',
    g_sf1: '🔥 Rauchmelder: Küche & Eingang',
    g_sf2: '⚡ Sicherungskasten: am Eingang',
    g_sf3: '🚨 Notruf: <strong>112</strong>',
    g_problem_h: 'Etwas stimmt nicht?',
    g_problem_p: 'Bitte informieren Sie uns sofort — wir lösen Probleme lieber direkt. Wir sind nur eine Nachricht entfernt.',
    g_contact_btn: 'Gastgeber kontaktieren',
    review_h: 'Gefällt Ihnen Ihr Aufenthalt?',
    review_p: 'Wir stecken sehr viel Sorgfalt in jedes Detail von Porto Peace Haven. Eine Bewertung bedeutet uns sehr viel.',
    review_btn: 'Bewertung hinterlassen ⭐',
    kitchen_title: 'Küchenführer',
    kitchen_sub: 'Wie man alles in der Küche benutzt',
    k_hob_h: 'Induktionskochfeld',
    k_hob1: 'Stellen Sie einen kompatiblen (magnetischen) Topf auf die Kochfläche.',
    k_hob2: 'Drücken Sie den Ein-/Ausschalter.',
    k_hob3: 'Wählen Sie Ihre Zone und passen Sie die Hitze an.',
    k_hob4: 'Das Kochfeld schaltet sich nach 2 Stunden automatisch ab.',
    k_hood_h: 'Dunstabzugshaube',
    k_hood1: 'Vor dem Kochen einschalten, um Rauchentwicklung zu vermeiden.',
    k_hood2: 'Geschwindigkeit anpassen (1 = niedrig · 3 = hoch).',
    k_hood3: 'Nach dem Kochen kurz laufen lassen, dann ausschalten.',
    k_oven_h: 'Mini-Ofen',
    k_oven1: 'Legen Sie das Essen auf das mitgelieferte Blech oder Gitter.',
    k_oven2: 'Temperatur mit dem linken Regler einstellen.',
    k_oven3: 'Garzeit mit dem rechten Regler einstellen.',
    k_oven4: 'Der Ofen schaltet sich automatisch ab, wenn der Timer endet.',
    k_micro_h: 'Mikrowelle',
    k_micro1: 'Nur mikrowellengeeignete Behälter verwenden.',
    k_micro2: 'Zeit und Leistung einstellen, dann Start drücken.',
    k_micro3: 'Niemals Metallbehälter oder Alufolie verwenden.',
    k_kettle_h: 'Wasserkocher',
    k_kettle1: 'Bis zur Maximalmarkierung mit Wasser füllen.',
    k_kettle2: 'Auf die Basis stellen und den Schalter drücken.',
    k_kettle3: 'Schaltet sich automatisch aus, wenn das Wasser kocht.',
    k_coffee_h: 'Kapsel-Kaffeemaschine',
    k_coffee1: 'Wassertank füllen und Maschine einschalten.',
    k_coffee2: 'Kompatible Kapsel einlegen.',
    k_coffee3: 'Tasse hinstellen und Brühen drücken.',
    k_coffee4: 'Benutzte Kapsel nach jeder Verwendung entfernen und entsorgen.',
    k_utensils_h: 'Was vorhanden ist',
    k_utensils_p: 'Teller, Schüsseln, Gläser, Becher, Tassen, Besteck, Töpfe, Pfannen, Schneidbretter, Messer, Sieb, Reibe und Kochutensilien.',
    k_clean_h: 'Reinigungsmittel',
    k_clean_p: 'Müllbeutel, Schwamm, Tücher und Spülmittel unter der Spüle.',
    k_etiquette_h: 'Küchenregeln',
    k_eq1: '🍽️ Geschirr sofort nach jedem Gebrauch spülen und abtrocknen.',
    k_eq2: '🧹 Kochfeld, Arbeitsflächen und Spüle nach der Benutzung reinigen.',
    k_eq3: '🗑️ Müll in den bereitgestellten Müllbeuteln entsorgen.',
    k_eq4: '♻️ Recycling von Restmüll trennen.',
    k_eq5: '🤝 Dies ist eine geteilte Küche — hinterlassen Sie sie so, wie Sie sie vorgefunden haben.',
    rooms_title: 'Zimmerführer',
    ribeira_tagline: 'Elegant, geräumig und urban — die Seele des alten Porto',
    feat_tv_h: 'TV & Android Dongle',
    feat_tv_p: 'Verwenden Sie die Android Dongle-Fernbedienung (schwarz, kleiner) zum Navigieren. Verwenden Sie die TV-Fernbedienung, um den HDMI-Eingang zu wechseln.',
    feat_remotes_h: 'Zwei Fernbedienungen',
    ribeira_remotes_p: 'Sie haben zwei Fernbedienungen: eine für den TV und eine für den Android Dongle. Die Dongle-Fernbedienung steuert auch das LED-Band hinter dem TV.',
    feat_led_h: 'LED-Beleuchtung',
    ribeira_led_p: 'Die LED-Fernbedienung steuert die Nachttischlampe und das LED-Band hinter dem TV.',
    ribeira_curtains_h: 'Vorhänge & Fenster',
    ribeira_curtains_p: 'Bitte behandeln Sie Vorhänge und Fenster sorgfältig. Schließen Sie immer alle Fenster, bevor Sie das Zimmer verlassen.',
    ribeira_storage_h: 'Stauraum & Arbeitsbereich',
    ribeira_storage_p: 'Ribeira ist das geräumigste Zimmer mit viel Stauraum. Das große Wandregal dient auch als Schreibtisch.',
    feat_fan_h: 'Ventilator',
    feat_fan_p: 'Ein Ventilator steht zur Verfügung. Geschwindigkeit und Richtung nach Belieben anpassen.',
    feat_fridge_h: 'Mini-Kühlschrank',
    feat_fridge_p: 'Ein Mini-Kühlschrank steht für den persönlichen Gebrauch zur Verfügung.',
    feat_sockets_h: 'Steckdosen mit USB & USB-C',
    feat_sockets_p: 'Alle Steckdosen haben USB-A und USB-C Anschlüsse.',
    feat_mirror_h: 'Spiegel',
    feat_mirror_p: 'Ein Ganzkörperspiegel steht im Zimmer zur Verfügung.',
    feat_rail_h: 'Kleiderständer',
    feat_rail_p: 'Ein Kleiderständer zum Aufhängen von Kleidung steht zur Verfügung.',
    feat_blanket_h: 'Zusatzdecke',
    feat_blanket_p: 'Eine Zusatzdecke befindet sich im Pouf zu Füßen des Bettes.',
    room_reminder: '💡 Vor dem Verlassen: Lichter ausschalten · Fenster schließen · Geräte ausschalten',
    douro_tagline: 'Warm, golden und gemütlich — wie ein Sonnenuntergang in Porto',
    douro_remotes_p: 'Zwei Fernbedienungen: eine für den TV und eine für den Dongle. Die LED-Fernbedienung steuert die Farbe der Nachttischlampe.',
    douro_led_p: 'Verwenden Sie die LED-Fernbedienung, um Farbe und Helligkeit der Nachttischlampe anzupassen.',
    douro_storage_h: 'Stauraum',
    douro_storage_p: 'Douro hat einen eigenen Stauraum für Ihr Gepäck. Kompakt und perfekt organisiert.',
    atlantico_tagline: 'Hell, friedlich und luftig — Ihr küstennahes Refugium in der Stadt',
    atlantico_remotes_p: 'Zwei Fernbedienungen: TV und Android Dongle. Die LED-Fernbedienung steuert die Nachttischlampe.',
    atlantico_led_p: '⚠️ Um nur die Farbe der Nachttischlampe zu ändern ohne den TV zu beeinflussen: zuerst TV ausschalten, dann LED-Fernbedienung direkt auf die Lampe richten.',
    atlantico_desk_h: 'Schreibtisch / Arbeitsbereich',
    atlantico_desk_p: 'Atlântico hat einen eigenen Schreibtischbereich — ideal für mobiles Arbeiten.',
    bath_title: 'Badezimmerführer',
    bath_shared_h: 'Gemeinsames Badezimmer',
    bath_shared_p: 'Das Badezimmer wird geteilt. Bitte seien Sie rücksichtsvoll und hinterlassen Sie es sauber.',
    bath_shower_h: 'Duschdauer',
    bath_shower_p: 'Bitte vermeiden Sie sehr lange Duschen, besonders morgens, damit alle Gäste Zugang zu warmem Wasser haben.',
    bath_toilet_h: 'Toilette',
    bath_t1: '✔ Immer überprüfen, dass die Spülung vollständig gestoppt hat.',
    bath_t2: '✔ Nur Toilettenpapier in die Toilette.',
    bath_t3: '✘ Keine Feuchttücher, Wattepads oder Hygieneartikel.',
    bath_cabinet_h: 'Aufbewahrungsschrank',
    bath_cabinet_p: 'Zusätzliche Toilettenartikel und Reinigungsmittel im Schrank neben dem Badezimmer.',
    bath_dryer_h: 'Föhn',
    bath_dryer_p: 'Ein Föhn befindet sich im Spiegelschrank. Bitte nach Gebrauch zurücklegen.',
    bath_adapter_h: 'Universal-Adapter',
    bath_adapter_p: 'Ein Universal-Adapter befindet sich im Spiegelschrank — für internationale Gäste.',
    transport_title: 'In Porto unterwegs',
    transport_sub: 'Porto ist sehr fußgängerfreundlich und gut mit öffentlichen Verkehrsmitteln verbunden',
    tr_metro_h: 'Nächste U-Bahn-Haltestelle',
    tr_metro_map: 'U-Bahn-Karte anzeigen',
    tr_bus_h: 'Bus & Straßenbahn',
    tr_stcp: 'STCP Buslinien',
    tr_ride_h: 'Taxis & Ride-Apps',
    tr_taxi: 'Taxi',
    tr_maps_h: 'Wegbeschreibung ab Porto Peace Haven',
    nearby_title: 'Nützliche Orte in der Nähe',
    nb_supermarket: 'Supermarkt',
    nb_pharmacy: 'Apotheke',
    nb_hospital: 'Krankenhaus',
    nb_cafe: 'Restaurant',
    nb_transport: 'Transport',
    nb_atm: 'Geldautomat',
    nb_laundry: 'Wäscherei',
    go_btn: 'Los →',
    porto_title: 'Was man in Porto tun kann',
    porto_sub: 'Unsere Lieblingsempfehlungen für Ihren Aufenthalt',
    tag_sunset: '🌅 Sonnenuntergang',
    porto_sunset_h: 'Beste Sonnenuntergangs-Spots',
    porto_sunset_p: 'Der Jardim do Morro in Vila Nova de Gaia bietet spektakuläre Ausblicke über den Douro und die Dom Luís Brücke.',
    tag_photo: '📸 Fotografie',
    porto_photo_h: 'Beste Foto-Spots',
    porto_photo_p: 'Dom Luís I Brücke, die ikonische Livraria Lello, das Ribeira-Ufer, die blauen Kacheln des Bahnhofs São Bento und die bunten Häuser von Bonfim.',
    tag_rainy: '🌧️ Regentag',
    porto_rainy_h: 'Plan für einen Regentag',
    porto_rainy_p: 'Buchhandlung Lello, Casa da Música, Serralves Museum oder ein langes Mittagessen in einer traditionellen Tasca.',
    tag_classic: '🗺️ Klassisch',
    porto_classic_h: 'Klassische Porto-Stadtführung',
    porto_classic_p: 'Bahnhof São Bento → Kathedrale Sé → Ribeira-Ufer → Dom Luís Brücke → Portwein-Verkostung in Gaia → Sonnenuntergang am Jardim do Morro.',
    tag_food: '🍷 Kulinarik',
    porto_food_h: 'Kulinarik & Wein',
    porto_food_p: 'Eine Francesinha im Café Santiago, Pastel de Nata, Bacalhau à Brás und zum Abschluss eine Portwein-Verkostung.',
    tag_beach: '🏖️ Strand',
    porto_beach_h: 'Tag am Strand',
    porto_beach_p: 'Der Strand von Matosinhos ist nur 15 Minuten mit der U-Bahn entfernt — ideal zum Schwimmen und für frische Meeresfrüchte.',
    em_title: 'Notfall & Support',
    em_sub: 'Wir hoffen, Sie brauchen das nie — aber für alle Fälle ist es hier',
    em_112_h: 'Notfalldienste',
    em_112_sub: 'Polizei · Feuerwehr · Krankenwagen',
    em_call: 'Anrufen',
    em_host_h: 'Gastgeber kontaktieren',
    em_host_sub: 'Bei jedem Problem mit der Unterkunft',
    em_hospital_h: 'Nächstgelegenes Krankenhaus',
    em_pharmacy_h: '24h-Apotheke',
    em_ride_h: 'Uber / Bolt',
    em_taxi_h: 'Taxi',
    footer_rights: 'Alle Rechte vorbehalten',
    copied: '✓ Kopiert!',
    nav_mapa: '🗺️ Porto-Karte',
    nb_nos: 'NOS Shop (SIM-Karten)',
    dl_guide_title: 'Offline-Reiseführer herunterladen',
    dl_guide_desc: 'Speichern Sie diesen Leitfaden auf Ihrem Gerät — nützlich ohne Internet.',
    dl_guide_btn: '⬇ Handbuch herunterladen (DE)',
    map_title: 'Stadtplan von Porto',
    map_sub: 'Offizieller Touristenplan — tippen zum Öffnen oder Herunterladen',
    map_open: 'Karte öffnen',
    map_pdf_label: 'Offizieller Touristenkarte von Porto',
    map_open_full: 'Vollständige Karte öffnen',
    map_download: 'PDF herunterladen',
  },

  /* ══════════ ITALIANO ══════════ */
  it: {
    logo_sub: 'Guida degli Ospiti',
    nav_home: 'Home',
    nav_info: 'Info Essenziali',
    nav_checkin: 'Check-in / Check-out',
    nav_rules: 'Regole della Casa',
    nav_guide: 'Guida della Casa',
    nav_kitchen: 'Cucina',
    nav_rooms_label: 'Camere',
    nav_bathroom: 'Bagno',
    nav_transport: 'Trasporti',
    nav_nearby: 'Luoghi Vicini',
    nav_porto: 'Guida Porto',
    nav_emergency: '🆘 Emergenza',
    bnav_home: 'Home',
    bnav_info: 'Info',
    bnav_rooms: 'Camere',
    bnav_porto: 'Porto',
    bnav_help: 'Aiuto',
    hero_badge: 'Porto · Portogallo',
    hero_welcome: 'Benvenuto al',
    hero_tagline: 'La vostra casa tranquilla nel cuore di Porto',
    rooms_preview_title: 'Scegliete la vostra Camera',
    ribeira_mood_short: 'Elegante · Urbano · Spazioso',
    douro_mood_short: 'Caldo · Accogliente · Dorato',
    atlantico_mood_short: 'Calmo · Costiero · Luminoso',
    room_discover: 'Scopri →',
    info_title: 'Informazioni Essenziali',
    info_subtitle: 'Tutto ciò di cui avete bisogno, qui',
    address_title: 'Indirizzo',
    open_maps: 'Apri in Google Maps',
    wifi_title: 'Wi-Fi',
    wifi_network: 'Rete',
    wifi_password: 'Password',
    tap_copy: 'tocca per copiare',
    wifi_scan: '📷 Scansiona per connetterti automaticamente',
    contact_title: "Contatta l'Host",
    contact_urgent: 'Linea Urgente',
    contact_note: '⚠️ Sostituire i contatti in index.html prima della pubblicazione',
    guide_qr_title: 'Questa Guida degli Ospiti',
    guide_qr_desc: 'Condividi questo link con i tuoi ospiti o scansiona il codice QR',
    guide_qr_note: '⚠️ Aggiorna SITE_URL in script.js dopo il deployment',
    checkin_title: 'Check-in & Check-out',
    checkin_label: 'Check-in',
    checkin_time_label: 'Dalle:',
    checkin_late_label: 'Arrivo tardivo:',
    checkout_label: 'Check-out',
    checkout_time_label: 'Entro:',
    checkout_late_label: 'Check-out tardivo:',
    checkout_late_desc: 'Si prega di avvisare in anticipo — faremo del nostro meglio!',
    key_title: 'Chiavi & Accesso',
    key_1: 'Riceverete una chiave per la vostra camera e per l\'ingresso principale.',
    key_2: 'Custodite la chiave e riconsegnatela alla partenza.',
    safe_title: 'Cassaforte in Camera',
    safe_1: 'È disponibile una cassaforte — usatela per passaporti e oggetti di valore.',
    safe_2: 'Impostate il vostro PIN personale all\'arrivo e reimpostatelo alla partenza.',
    rules_title: 'Regole della Casa',
    rules_subtitle: 'Chiediamo a tutti gli ospiti di rispettare queste linee guida',
    rule_noise_h: 'Rumore & Ore Silenziose',
    rule_n1: 'Si prega di mantenere il rumore al minimo in ogni momento.',
    rule_n2: 'Siate particolarmente rispettosi nei giorni feriali.',
    rule_n3: 'Nessuna musica alta o voci elevate all\'interno.',
    rule_smoke_h: 'Vietato Fumare',
    rule_s1: 'È vietato fumare o svapare all\'interno.',
    rule_s2: 'È consentito fumare solo all\'esterno dell\'edificio.',
    rule_s3: 'Candele e incenso non sono consentiti.',
    rule_guests_h: 'Visitatori & Eventi',
    rule_g1: 'Nessun visitatore non registrato è ammesso.',
    rule_g2: 'Feste e riunioni sono severamente vietate.',
    rule_kitchen_h: 'Cucina & Spazi Comuni',
    rule_k1: 'Lavate sempre i piatti immediatamente dopo l\'uso.',
    rule_k2: 'Pulite le superfici e il piano cottura dopo ogni utilizzo.',
    rule_k3: 'Trattate gli spazi comuni con cura e considerazione.',
    rule_energy_h: 'Prima di Lasciare la Camera',
    rule_e1: 'Chiudete tutte le finestre.',
    rule_e2: 'Spegnete tutte le luci.',
    rule_e3: 'Spegnete tutti gli elettrodomestici.',
    rule_bath_h: 'Bagno',
    rule_b1: 'Verificate sempre che lo sciacquone si sia fermato completamente.',
    rule_b2: 'Solo carta igienica nel water.',
    rule_b3: 'Lasciate il bagno pulito per il prossimo ospite.',
    rule_pets_h: 'Animali Domestici',
    rule_p1: 'Gli animali domestici non sono ammessi.',
    rule_furniture_h: 'Mobili & Pavimenti',
    rule_f1: 'Si prega di non trascinare sedie o mobili sul pavimento.',
    rule_f2: 'Trattate tutti i mobili con cura.',
    rules_thank: 'Grazie per aiutarci a mantenere Porto Peace Haven uno spazio tranquillo e accogliente per tutti. 🙏',
    guide_title: 'Guida della Casa',
    guide_sub: 'Siamo lieti di avervi qui. Tutto ciò di cui avete bisogno per sentirvi a casa.',
    g_wifi_h: 'Wi-Fi',
    g_wifi_link: 'Vedi codice QR →',
    g_bath_h: 'Bagno Condiviso',
    g_bath_p: 'Il bagno è condiviso tra gli ospiti. Siate premurosi e lasciatelo impeccabile dopo ogni utilizzo.',
    g_leave_h: 'Prima di Partire',
    g_c1: '✔ Spegnere tutte le luci',
    g_c2: '✔ Chiudere tutte le finestre',
    g_c3: '✔ Spegnere tutti gli elettrodomestici',
    g_c4: '✔ Verificare che lo sciacquone si sia fermato',
    g_c5: '✔ Riconsegnare la chiave al check-out',
    g_quiet_h: 'Vita Tranquilla',
    g_quiet_p: 'È un edificio residenziale. Mantenete voci e suoni bassi, soprattutto di mattina presto e di sera.',
    g_tv_h: 'TV & Streaming',
    g_tv_p: 'Ogni camera ha una TV con dongle Android TV. Utilizzate il telecomando del dongle per accedere a Netflix, YouTube e altre app.',
    g_lamps_h: 'Lampade LED',
    g_lamps_p: 'La vostra camera ha lampade LED controllabili a distanza. Scegliete il vostro colore e luminosità preferiti.',
    g_safety_h: 'Sicurezza',
    g_sf1: '🔥 Rilevatori di fumo: cucina e ingresso',
    g_sf2: '⚡ Quadro elettrico: all\'ingresso',
    g_sf3: '🚨 Servizi di emergenza: <strong>112</strong>',
    g_problem_h: 'Qualcosa non va?',
    g_problem_p: 'Comunicatecelo immediatamente — preferiamo risolvere le cose subito. Siamo a portata di messaggio.',
    g_contact_btn: "Contatta l'Host",
    review_h: 'Vi sta piacendo il soggiorno?',
    review_p: 'Mettiamo molta cura in ogni dettaglio di Porto Peace Haven. Una recensione significa moltissimo per noi.',
    review_btn: 'Lascia una Recensione ⭐',
    kitchen_title: 'Guida della Cucina',
    kitchen_sub: 'Come usare tutto in cucina',
    k_hob_h: 'Piano a Induzione',
    k_hob1: 'Posizionate una pentola compatibile (magnetica) sulla superficie.',
    k_hob2: 'Premete il pulsante di accensione.',
    k_hob3: 'Selezionate la zona e regolate il calore.',
    k_hob4: 'Il piano si spegne automaticamente dopo 2 ore.',
    k_hood_h: 'Cappa Aspirante',
    k_hood1: 'Accendete prima di cucinare per evitare accumuli di fumo.',
    k_hood2: 'Regolate la velocità (1 = bassa · 3 = alta).',
    k_hood3: 'Lasciate accesa brevemente dopo la cottura, poi spegnete.',
    k_oven_h: 'Mini Forno',
    k_oven1: 'Posizionate il cibo sulla teglia o sulla griglia fornite.',
    k_oven2: 'Impostate la temperatura con la manopola sinistra.',
    k_oven3: 'Impostate il tempo con la manopola destra.',
    k_oven4: 'Il forno si spegne automaticamente allo scadere del timer.',
    k_micro_h: 'Microonde',
    k_micro1: 'Utilizzate solo contenitori adatti al microonde.',
    k_micro2: 'Impostate tempo e potenza, poi premete avvia.',
    k_micro3: 'Non utilizzate mai contenitori metallici o alluminio.',
    k_kettle_h: 'Bollitore',
    k_kettle1: 'Riempite fino alla linea massima indicata.',
    k_kettle2: 'Posizionate sulla base e premete l\'interruttore.',
    k_kettle3: 'Si spegne automaticamente quando l\'acqua bolle.',
    k_coffee_h: 'Macchina da Caffè a Capsule',
    k_coffee1: 'Riempite il serbatoio dell\'acqua e accendete la macchina.',
    k_coffee2: 'Inserite una capsula compatibile.',
    k_coffee3: 'Posizionate la tazza e premete prepara.',
    k_coffee4: 'Rimuovete e smaltite la capsula usata dopo ogni utilizzo.',
    k_utensils_h: 'Cosa è Disponibile',
    k_utensils_p: 'Piatti, ciotole, bicchieri, tazze, posate, pentole, padelle, taglieri, coltelli, scolapasta, grattugia e utensili da cucina.',
    k_clean_h: 'Prodotti per la Pulizia',
    k_clean_p: 'Sacchi per l\'immondizia, spugna, stracci e detersivo sotto il lavello.',
    k_etiquette_h: 'Galateo in Cucina',
    k_eq1: '🍽️ Lavate e asciugate i piatti immediatamente dopo ogni utilizzo.',
    k_eq2: '🧹 Pulite il piano, le superfici e il lavello dopo l\'uso.',
    k_eq3: '🗑️ Smaltite i rifiuti nei sacchi forniti.',
    k_eq4: '♻️ Separate la raccolta differenziata dai rifiuti generali.',
    k_eq5: '🤝 È una cucina condivisa — lasciatela come l\'avete trovata.',
    rooms_title: 'Guide delle Camere',
    ribeira_tagline: 'Elegante, spazioso e urbano — l\'anima della vecchia Porto',
    feat_tv_h: 'TV & Dongle Android',
    feat_tv_p: 'Utilizzate il telecomando del dongle Android (nero, più piccolo) per navigare nelle app. Usate il telecomando TV per cambiare l\'ingresso HDMI se necessario.',
    feat_remotes_h: 'Due Telecomandi',
    ribeira_remotes_p: 'Avete due telecomandi: uno per la TV e uno per il dongle Android. Il telecomando del dongle controlla anche la striscia LED dietro la TV.',
    feat_led_h: 'Illuminazione LED',
    ribeira_led_p: 'Il telecomando LED controlla la lampada comodino e la striscia LED dietro la TV.',
    ribeira_curtains_h: 'Tende & Finestre',
    ribeira_curtains_p: 'Maneggiate le tende e le finestre con cura. Chiudete sempre tutte le finestre prima di lasciare la camera.',
    ribeira_storage_h: 'Spazio Armadietto & Area di Lavoro',
    ribeira_storage_p: 'Ribeira è la camera più spaziosa con ampio armadietto. Il mobile a parete funge anche da scrivania.',
    feat_fan_h: 'Ventilatore',
    feat_fan_p: 'È disponibile un ventilatore. Regolate velocità e direzione come preferite.',
    feat_fridge_h: 'Mini Frigorifero',
    feat_fridge_p: 'È disponibile un mini frigorifero per uso personale.',
    feat_sockets_h: 'Prese con USB & USB-C',
    feat_sockets_p: 'Tutte le prese includono porte USB-A e USB-C.',
    feat_mirror_h: 'Specchio',
    feat_mirror_p: 'È disponibile uno specchio a figura intera.',
    feat_rail_h: 'Appendiabiti',
    feat_rail_p: 'È disponibile un appendiabiti per i vestiti.',
    feat_blanket_h: 'Coperta Extra',
    feat_blanket_p: 'Una coperta extra è riposta nel pouf ai piedi del letto.',
    room_reminder: '💡 Prima di partire: spegnete le luci · chiudete le finestre · spegnete gli elettrodomestici',
    douro_tagline: 'Caldo, dorato e meravigliosamente accogliente — come un tramonto a Porto',
    douro_remotes_p: 'Due telecomandi: uno per la TV e uno per il dongle. Il telecomando LED controlla il colore della lampada comodino.',
    douro_led_p: 'Utilizzate il telecomando LED per regolare il colore e la luminosità della lampada comodino.',
    douro_storage_h: 'Spazio Armadietto',
    douro_storage_p: 'Douro ha uno spazio armadietto dedicato. Compatto e perfettamente organizzato.',
    atlantico_tagline: 'Luminoso, pacifico e arioso — il vostro rifugio costiero in città',
    atlantico_remotes_p: 'Due telecomandi: TV e dongle Android. Il telecomando LED controlla la lampada comodino.',
    atlantico_led_p: '⚠️ Per cambiare solo il colore della lampada comodino senza influenzare la TV: prima spegnete la TV, poi puntate il telecomando LED direttamente sulla lampada.',
    atlantico_desk_h: 'Scrivania / Area di Lavoro',
    atlantico_desk_p: 'Atlântico include un\'area scrivania dedicata — perfetta per il lavoro da remoto.',
    bath_title: 'Guida del Bagno',
    bath_shared_h: 'Bagno Condiviso',
    bath_shared_p: 'Il bagno è condiviso. Siate premurosi e lasciatelo pulito dopo ogni utilizzo.',
    bath_shower_h: 'Durata della Doccia',
    bath_shower_p: 'Evitate docce molto lunghe, soprattutto di mattina, affinché tutti gli ospiti abbiano accesso all\'acqua calda.',
    bath_toilet_h: 'WC',
    bath_t1: '✔ Verificate sempre che lo sciacquone si sia fermato completamente.',
    bath_t2: '✔ Solo carta igienica nel WC.',
    bath_t3: '✘ Niente salviettine, cotone o articoli igienici.',
    bath_cabinet_h: 'Armadietto',
    bath_cabinet_p: 'Articoli da toilette e prodotti per la pulizia extra nell\'armadietto accanto al bagno.',
    bath_dryer_h: 'Asciugacapelli',
    bath_dryer_p: 'È disponibile un asciugacapelli nell\'armadietto specchio. Si prega di rimetterlo dopo l\'uso.',
    bath_adapter_h: 'Adattatore Universale',
    bath_adapter_p: 'Un adattatore universale è disponibile nell\'armadietto specchio per gli ospiti internazionali.',
    transport_title: 'Muoversi a Porto',
    transport_sub: 'Porto è molto vivibile a piedi e ben collegata con i mezzi pubblici',
    tr_metro_h: 'Fermata Metro più Vicina',
    tr_metro_map: 'Vedi Mappa Metro',
    tr_bus_h: 'Bus & Tram',
    tr_stcp: 'Linee Bus STCP',
    tr_ride_h: 'Taxi & App di Trasporto',
    tr_taxi: 'Taxi',
    tr_maps_h: 'Indicazioni da Porto Peace Haven',
    nearby_title: 'Luoghi Utili Vicino',
    nb_supermarket: 'Supermercato',
    nb_pharmacy: 'Farmacia',
    nb_hospital: 'Ospedale',
    nb_cafe: 'Ristoranti',
    nb_transport: 'Trasporti',
    nb_atm: 'Bancomat',
    nb_laundry: 'Lavanderia',
    go_btn: 'Vai →',
    porto_title: 'Cosa Fare a Porto',
    porto_sub: 'I nostri consigli preferiti per il vostro soggiorno',
    tag_sunset: '🌅 Tramonto',
    porto_sunset_h: 'I Migliori Posti per il Tramonto',
    porto_sunset_p: 'Il Jardim do Morro a Vila Nova de Gaia offre viste spettacolari sul Douro e sul Ponte Dom Luís all\'ora d\'oro.',
    tag_photo: '📸 Fotografia',
    porto_photo_h: 'I Migliori Spot Fotografici',
    porto_photo_p: 'Ponte Dom Luís I, la celebre Livraria Lello, il lungofiume Ribeira, le piastrelle blu della Stazione di São Bento e le case colorate di Bonfim.',
    tag_rainy: '🌧️ Giorno di Pioggia',
    porto_rainy_h: 'Piano per Giorno di Pioggia',
    porto_rainy_p: 'Libreria Lello, Casa da Música, Museo Serralves o un lungo pranzo in una tasca tradizionale.',
    tag_classic: '🗺️ Classico',
    porto_classic_h: 'Itinerario Classico di Porto',
    porto_classic_p: 'Stazione São Bento → Cattedrale Sé → Ribeira → Ponte Dom Luís → degustazione di Porto a Gaia → tramonto al Jardim do Morro.',
    tag_food: '🍷 Enogastronomia',
    porto_food_h: 'Enogastronomia',
    porto_food_p: 'Una Francesinha al Café Santiago, pastel de nata, bacalhau à Brás e conclude con una degustazione di vino Porto.',
    tag_beach: '🏖️ Spiaggia',
    porto_beach_h: 'Giornata in Spiaggia',
    porto_beach_p: 'La spiaggia di Matosinhos è a soli 15 minuti in metro — ideale per nuotare e gustare frutti di mare freschi.',
    em_title: 'Emergenza & Assistenza',
    em_sub: 'Speriamo non vi serva mai — ma eccolo nel caso',
    em_112_h: 'Servizi di Emergenza',
    em_112_sub: 'Polizia · Pompieri · Ambulanza',
    em_call: 'Chiama',
    em_host_h: "Contatta l'Host",
    em_host_sub: 'Per qualsiasi problema alla proprietà',
    em_hospital_h: 'Ospedale più Vicino',
    em_pharmacy_h: 'Farmacia 24h',
    em_ride_h: 'Uber / Bolt',
    em_taxi_h: 'Taxi',
    footer_rights: 'Tutti i diritti riservati',
    copied: '✓ Copiato!',
    nav_mapa: '🗺️ Mappa di Porto',
    nb_nos: 'Negozio NOS (SIM)',
    dl_guide_title: 'Scarica Guida Offline',
    dl_guide_desc: 'Salva questa guida sul tuo dispositivo — utile senza internet.',
    dl_guide_btn: '⬇ Scarica la Guida (IT)',
    map_title: 'Mappa della Città di Porto',
    map_sub: 'Mappa turistica ufficiale — tocca per aprire o scaricare',
    map_open: 'Apri Mappa',
    map_pdf_label: 'Mappa Turistica Ufficiale di Porto',
    map_open_full: 'Apri Mappa Completa',
    map_download: 'Scarica PDF',
  },
};

/* ─────────────────────────────────────────────────────────────
   AVALIAR A ESTADIA — review funnel strings
   EN + PT done; FR/ES/DE/IT fall back to EN until the full
   translation pass (see task: "Translate all new content").
───────────────────────────────────────────────────────────────── */
const AV_I18N = {
  en: {
    nav_avaliar: '⭐ Review Your Stay',
    bnav_avaliar: 'Review',
    av_section_title: 'Review Your Stay',
    av_section_sub: 'Your voice is what shapes everything we do here',
    av_eyebrow1: 'Your opinion',
    av_title1: 'How is your stay so far?',
    av_lead1: 'Your experience is what moves us. Tell us how you feel — it only takes a few seconds.',
    av_feel_excelente: 'Excellent',
    av_feel_boa: 'Good',
    av_feel_regular: 'Could be better',
    av_feel_ruim: 'Poor',
    av_hint1: 'Booked through Booking? You can still leave your review on Airbnb or Google — it helps us even more.',
    av_eyebrow2: 'What a joy',
    av_title2: 'Wonderful to hear 💛',
    av_lead2: "It stays with us. If you'd like, leave a review where you booked — it's what helps other travellers find this little corner of Porto.",
    av_q_platform: 'Where did you book your stay?',
    av_plat_outra: 'Another platform',
    av_airbnb_h: 'A review on Airbnb is worth its weight in gold',
    av_airbnb_p: "It's where your words make the biggest difference for us — and it takes less than a minute.",
    av_airbnb_btn: 'Review on Airbnb',
    av_airbnb_alt: 'Prefer to review on Google?',
    av_booking_h: 'Thank you for staying with us',
    av_booking_p: "On Booking, your review arrives by email after check-out. If you'd like to help us even more right now, a review on Google makes all the difference.",
    av_booking_btn: 'Review on Google',
    av_booking_alt: 'Have an Airbnb account? You can review there too',
    av_outra_h: 'Your review helps us so much',
    av_outra_p: 'A review on Google takes less than a minute and helps other travellers discover us.',
    av_outra_btn: 'Review on Google',
    av_back: '← Back',
    av_eyebrow3: 'Tell us',
    av_title3: 'Thank you for telling us',
    av_lead3: "We want to put it right now — during your stay, not after it. Tell us what's going on and our team acts on it as a priority.",
    av_f_room: 'Which room are you staying in?',
    av_f_phase: 'What stage of your stay are you at?',
    av_phase_select: 'Select…',
    av_phase_arrival: 'Arrival',
    av_phase_middle: 'Middle of stay',
    av_phase_pre: 'Pre-checkout',
    av_phase_post: 'Post-checkout',
    av_f_area: 'What can we improve?',
    av_area_cleaning: 'Cleaning',
    av_area_comfort: 'Room comfort',
    av_area_wifi: 'Wi-Fi',
    av_area_bathroom: 'Bathroom',
    av_area_kitchen: 'Kitchen',
    av_area_noise: 'Noise',
    av_area_comm: 'Communication',
    av_area_other: 'Other',
    av_f_detail: 'Tell us in your own words',
    av_detail_ph: "What isn't quite as you expected? The more you tell us, the faster we can fix it.",
    av_f_urgency: 'Does this need quick action?',
    av_urg_no: "No, it's just a suggestion",
    av_urg_yes: 'Yes, I need help today',
    av_urgent_p: "For something urgent, talk to us right away — we'll get back to you as fast as we can.",
    av_urgent_btn: 'Talk to us now on WhatsApp',
    av_f_via: 'Best way to reach you',
    av_via_wa: 'WhatsApp',
    av_via_phone: 'Phone',
    av_f_contact: 'Name or contact number',
    av_contact_opt: '(optional — it helps us reply to you)',
    av_contact_ph: 'E.g.: Maria · +351 9XX XXX XXX',
    av_submit: 'Send suggestion',
    av_form_note: 'Your message goes straight to our team. It is never made public.',
    av_thanks_title: "We've received your message",
    av_thanks_lead: "We'll act on this as a priority. Thank you for giving us the chance to make your stay better.",
    av_thanks_box_h: 'When everything feels the way it should…',
    av_thanks_box_p: "…we'd love to hear from you. But only when it feels right for you — let us put things right first.",
    av_thanks_btn: 'Leave a review',
    av_thanks_back: '← Start over',
    av_alert_areas: 'Please choose at least one area we can improve.',
    av_wa_msg: "Hello! I'm staying at Porto Peace Haven and I need help with something during my stay.",
  },
  pt: {
    nav_avaliar: '⭐ Avaliar a Estadia',
    bnav_avaliar: 'Avaliar',
    av_section_title: 'Avaliar a Estadia',
    av_section_sub: 'A sua voz é o que dá forma a tudo o que fazemos aqui',
    av_eyebrow1: 'A sua opinião',
    av_title1: 'Como está a sua estadia?',
    av_lead1: 'A sua experiência é o que nos move. Conte-nos como se sente — leva apenas alguns segundos.',
    av_feel_excelente: 'Excelente',
    av_feel_boa: 'Boa',
    av_feel_regular: 'Pode melhorar',
    av_feel_ruim: 'Má',
    av_hint1: 'Reservou pelo Booking? Pode na mesma deixar a sua avaliação no Airbnb ou no Google — ajuda-nos ainda mais.',
    av_eyebrow2: 'Que alegria',
    av_title2: 'Que bom saber 💛',
    av_lead2: 'Fica connosco. Se quiser, deixe uma avaliação onde reservou — é o que ajuda outros viajantes a encontrar este cantinho do Porto.',
    av_q_platform: 'Onde reservou a sua estadia?',
    av_plat_outra: 'Outra plataforma',
    av_airbnb_h: 'Uma avaliação no Airbnb vale ouro',
    av_airbnb_p: 'É onde as suas palavras fazem maior diferença para nós — e leva menos de um minuto.',
    av_airbnb_btn: 'Avaliar no Airbnb',
    av_airbnb_alt: 'Prefere avaliar no Google?',
    av_booking_h: 'Obrigado por ficar connosco',
    av_booking_p: 'No Booking, a avaliação chega por email depois do check-out. Se quiser ajudar-nos ainda mais agora, uma avaliação no Google faz toda a diferença.',
    av_booking_btn: 'Avaliar no Google',
    av_booking_alt: 'Tem conta no Airbnb? Também pode avaliar por lá',
    av_outra_h: 'A sua avaliação ajuda-nos imenso',
    av_outra_p: 'Uma avaliação no Google leva menos de um minuto e ajuda outros viajantes a descobrir-nos.',
    av_outra_btn: 'Avaliar no Google',
    av_back: '← Voltar',
    av_eyebrow3: 'Conte-nos',
    av_title3: 'Obrigado por nos dizer',
    av_lead3: 'Queremos corrigir agora — durante a sua estadia, não depois dela. Conte-nos o que se passa e a nossa equipa age com prioridade.',
    av_f_room: 'Em que quarto está hospedado?',
    av_f_phase: 'Em que fase da estadia está?',
    av_phase_select: 'Selecionar…',
    av_phase_arrival: 'Chegada',
    av_phase_middle: 'Meio da estadia',
    av_phase_pre: 'Pré-checkout',
    av_phase_post: 'Pós-checkout',
    av_f_area: 'O que podemos melhorar?',
    av_area_cleaning: 'Limpeza',
    av_area_comfort: 'Conforto do quarto',
    av_area_wifi: 'Wi-Fi',
    av_area_bathroom: 'Casa de banho',
    av_area_kitchen: 'Cozinha',
    av_area_noise: 'Ruído',
    av_area_comm: 'Comunicação',
    av_area_other: 'Outro',
    av_f_detail: 'Conte-nos com as suas palavras',
    av_detail_ph: 'O que não está como esperava? Quanto mais nos contar, mais rápido conseguimos resolver.',
    av_f_urgency: 'Isto precisa de ação rápida?',
    av_urg_no: 'Não, é apenas uma sugestão',
    av_urg_yes: 'Sim, preciso de ajuda ainda hoje',
    av_urgent_p: 'Para algo urgente, fale connosco já — respondemos o mais rápido possível.',
    av_urgent_btn: 'Falar connosco agora no WhatsApp',
    av_f_via: 'Melhor forma de o contactarmos',
    av_via_wa: 'WhatsApp',
    av_via_phone: 'Telefone',
    av_f_contact: 'Nome ou nº de contacto',
    av_contact_opt: '(opcional — ajuda-nos a responder-lhe)',
    av_contact_ph: 'Ex.: Maria · +351 9XX XXX XXX',
    av_submit: 'Enviar sugestão',
    av_form_note: 'A sua mensagem chega diretamente à nossa equipa. Nunca é tornada pública.',
    av_thanks_title: 'Recebemos a sua mensagem',
    av_thanks_lead: 'Vamos agir nisto com prioridade. Obrigado por nos dar a oportunidade de melhorar a sua estadia.',
    av_thanks_box_h: 'Quando sentir que está tudo como merece…',
    av_thanks_box_p: '…adoraríamos ouvir de si. Mas só quando fizer sentido para si — deixe-nos resolver primeiro.',
    av_thanks_btn: 'Deixar uma avaliação',
    av_thanks_back: '← Recomeçar',
    av_alert_areas: 'Por favor, escolha pelo menos uma área que possamos melhorar.',
    av_wa_msg: 'Olá! Estou hospedado no Porto Peace Haven e preciso de ajuda com algo durante a minha estadia.',
  },
};
Object.assign(translations.en, AV_I18N.en);
Object.assign(translations.pt, AV_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], AV_I18N.en);
});

/* ─────────────────────────────────────────────────────────────
   ROOM "FICHA DE CUIDADO" — strings
   EN + PT done; FR/ES/DE/IT fall back to EN until the full
   translation pass.
───────────────────────────────────────────────────────────────── */
const ROOMS_I18N = {
  en: {
    ficha_g_comfort: 'For your comfort',
    ficha_g_work: 'For working',
    ficha_g_rest: 'For resting',
    ficha_g_light: 'Light, sound &amp; screen',
    ficha_g_storage: 'Storage &amp; details',
    ficha_cta_p: 'We prepared this room down to the smallest detail, so you would rest better. If anything is not the way you hoped, tell us now — we would rather put it right during your stay than after it.',
    ficha_cta_suggest: 'Could something here be better?',
    ficha_cta_review: 'Review my stay ⭐',
    rib_intro: 'The deep blue of the Douro at dusk. The largest of the three rooms — room to breathe, and room to work without rushing.',
    rib_comfort: '<li>A bed dressed with two pillows — one higher, one lower — so you sleep the way that suits you.</li><li>A fan, and windows that open wide to air and cool the room (there is no air conditioning, but Porto comes in nicely).</li><li>A mini fridge for whatever you would like to keep close.</li>',
    rib_work: '<li>A proper office chair — not a dining chair pretending to be one.</li><li>A wide shelf built into the wall that doubles as a desk — made for remote work and longer stays.</li>',
    rib_light: '<li>Two RGB LED lamps plus an LED strip behind the TV, all remote-controlled — set the colour and the mood you feel like tonight.</li><li>A TV with an Android player: Netflix, HBO Max, Prime Video, Disney+ with your own accounts — just remember to log out before check-out.</li>',
    rib_storage: '<li>Generous storage plus a clothes rail, with plenty of room for your suitcase.</li><li>Two framed prints of the Ribeira, chosen with this room in mind.</li><li>Sockets with USB-A and USB-C, and a full-length mirror.</li>',
    dou_intro: 'The warm gold of a late afternoon over the Douro. The cosiest room — made for slowing down and sleeping well.',
    dou_comfort: '<li>A bed dressed with two pillows — one higher, one lower — pick the one you sleep best on.</li><li>A fan, and windows that open to air and cool the room (no air conditioning, but it freshens up well).</li><li>A mini fridge for your personal use.</li>',
    dou_rest: '<li>No desk here, and that is on purpose — Douro is the room to switch off, not to work.</li><li>Warm light, calm air and a soft golden tone, made for the end of the day.</li>',
    dou_light: '<li>Two RGB LED lamps plus an LED strip behind the TV, all remote-controlled.</li><li>A TV with an Android player: Netflix, HBO Max, Prime Video, Disney+ with your own accounts — please log out before check-out.</li>',
    dou_curio: '<strong>A little Douro detail:</strong> the lamp has three light temperatures — amber, white and a mix of the two. Each time you switch it on, it changes. Try turning it on and off a few times and keep the one that feels right.',
    dou_storage: "<li>A dedicated storage area and a clothes rail.</li><li>Two framed prints on the room's theme, sockets with USB-A and USB-C, and a mirror.</li>",
    atl_intro: 'The light blue of the ocean on a clear morning. Airy, bright and serene — for waking up slowly.',
    atl_comfort: '<li>A bed dressed with two pillows — one higher, one lower — choose what suits you.</li><li>A fan, and windows that open and air the room beautifully (no air conditioning, but it cools well).</li><li>A mini fridge for your personal use.</li>',
    atl_work: '<li>An office chair and a small work table — enough to answer a few emails with a calm view.</li>',
    atl_light: '<li>Two RGB LED lamps plus an LED strip behind the TV, all remote-controlled.</li><li>A TV with an Android player: Netflix, HBO Max, Prime Video, Disney+ with your own accounts — please log out before check-out.</li><li><strong>Good to know:</strong> to change only the lamp colour without affecting the TV, switch the TV off first, then point the LED remote straight at the lamp.</li>',
    atl_storage: "<li>A clothes rail for hanging your things.</li><li>A framed print on the room's theme, sockets with USB-A and USB-C, and a mirror.</li>",
  },
  pt: {
    ficha_g_comfort: 'Para o seu conforto',
    ficha_g_work: 'Para trabalhar',
    ficha_g_rest: 'Para descansar',
    ficha_g_light: 'Luz, som e imagem',
    ficha_g_storage: 'Arrumação e detalhes',
    ficha_cta_p: 'Preparámos este quarto ao pormenor, para que descansasse melhor. Se algo não estiver como esperava, diga-nos agora — preferimos corrigir durante a sua estadia, não depois dela.',
    ficha_cta_suggest: 'Algo pode melhorar neste quarto?',
    ficha_cta_review: 'Avaliar a minha estadia ⭐',
    rib_intro: 'O azul profundo do Douro ao anoitecer. O maior dos três quartos — espaço para respirar, e para trabalhar sem pressa.',
    rib_comfort: '<li>Cama preparada com duas almofadas — uma mais alta, uma mais baixa — para dormir como lhe assenta melhor.</li><li>Ventilador, e janelas que abrem de par em par para arejar e refrescar o quarto (não há ar condicionado, mas o Porto entra bem).</li><li>Um frigorífico para o que quiser manter por perto.</li>',
    rib_work: '<li>Uma verdadeira cadeira de escritório — não uma cadeira de sala a fingir que é.</li><li>Uma prateleira larga integrada na parede que serve de secretária — pensada para trabalho remoto e estadias mais longas.</li>',
    rib_light: '<li>Dois candeeiros LED RGB e uma fita LED atrás da TV, todos com comando — escolha a cor e o ambiente que lhe apetecer esta noite.</li><li>TV com aparelho Android: Netflix, HBO Max, Prime Video, Disney+ com as suas próprias contas — lembre-se apenas de terminar sessão antes do check-out.</li>',
    rib_storage: '<li>Arrumação ampla e cabideiro, com espaço à vontade para a mala.</li><li>Duas telas com imagens da Ribeira, escolhidas a pensar neste quarto.</li><li>Tomadas com USB-A e USB-C, e um espelho de corpo inteiro.</li>',
    dou_intro: 'O dourado quente de um fim de tarde sobre o Douro. O quarto mais aconchegante — feito para abrandar e dormir bem.',
    dou_comfort: '<li>Cama preparada com duas almofadas — uma mais alta, uma mais baixa — escolha aquela em que dorme melhor.</li><li>Ventilador, e janelas que abrem para arejar e refrescar o quarto (sem ar condicionado, mas refresca bem).</li><li>Um frigorífico para uso pessoal.</li>',
    dou_rest: '<li>Aqui não há secretária, e é de propósito — o Douro é o quarto para desligar, não para trabalhar.</li><li>Luz quente, ambiente calmo e um tom dourado suave, feito para o fim do dia.</li>',
    dou_light: '<li>Dois candeeiros LED RGB e uma fita LED atrás da TV, todos com comando.</li><li>TV com aparelho Android: Netflix, HBO Max, Prime Video, Disney+ com as suas contas — por favor termine sessão antes do check-out.</li>',
    dou_curio: '<strong>Um pormenor do Douro:</strong> o candeeiro tem três temperaturas de luz — amarela, branca e uma mistura das duas. Cada vez que o acende, muda. Experimente acender e apagar algumas vezes e fique com a que lhe apetecer.',
    dou_storage: '<li>Uma zona de arrumação dedicada e um cabideiro.</li><li>Duas telas com imagens do tema do quarto, tomadas com USB-A e USB-C, e um espelho.</li>',
    atl_intro: 'O azul claro do oceano numa manhã limpa. Arejado, luminoso e sereno — para acordar sem pressa.',
    atl_comfort: '<li>Cama preparada com duas almofadas — uma mais alta, uma mais baixa — escolha a que lhe assenta melhor.</li><li>Ventilador, e janelas que abrem e arejam o quarto lindamente (sem ar condicionado, mas refresca bem).</li><li>Um frigorífico para uso pessoal.</li>',
    atl_work: '<li>Uma cadeira de escritório e uma pequena mesa de trabalho — o suficiente para responder a uns emails com uma vista tranquila.</li>',
    atl_light: '<li>Dois candeeiros LED RGB e uma fita LED atrás da TV, todos com comando.</li><li>TV com aparelho Android: Netflix, HBO Max, Prime Video, Disney+ com as suas contas — por favor termine sessão antes do check-out.</li><li><strong>Bom saber:</strong> para mudar só a cor do candeeiro sem afetar a TV, desligue primeiro a TV e aponte o comando LED diretamente ao candeeiro.</li>',
    atl_storage: '<li>Um cabideiro para pendurar as suas coisas.</li><li>Uma tela com imagem do tema do quarto, tomadas com USB-A e USB-C, e um espelho.</li>',
  },
};
Object.assign(translations.en, ROOMS_I18N.en);
Object.assign(translations.pt, ROOMS_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], ROOMS_I18N.en);
});
translations.pt.room_photos = 'Fotos do quarto';
['en', 'fr', 'es', 'de', 'it'].forEach(function (l) {
  translations[l].room_photos = 'Room photos';
});

translations.pt.wa_msg_contact = 'Olá! Estou hospedado no Porto Peace Haven — pode ajudar-me com uma coisa?';
['en', 'fr', 'es', 'de', 'it'].forEach(function (l) {
  translations[l].wa_msg_contact = "Hello! I'm staying at Porto Peace Haven — could you help me with something?";
});

/* ─────────────────────────────────────────────────────────────
   CONHEÇA O PORTO — strings
   EN + PT done; FR/ES/DE/IT fall back to EN until the full
   translation pass.
───────────────────────────────────────────────────────────────── */
const PORTO_I18N = {
  en: {
    nav_porto: 'Get to Know Porto',
    porto_title: 'Get to Know Porto',
    porto_sub: 'Beyond the postcards — the places that make us love living here',
    porto_intro: "Porto isn't a city you tick off a list. It rewards the wanderers — the ones who turn down the narrow street, who sit on the steps a while, who order the thing they can't pronounce. Here are the places we'd send a friend to: a few that everyone knows, and a few that most visitors walk straight past.",
    porto_g1_title: 'Porto off the beaten path',
    porto_g2_title: 'The classics, taken slowly',
    porto_wonder_tag: '🌀 Different',
    porto_wonder_h: 'Wondersense — the museum of the five senses',
    porto_wonder_p: 'A few steps from Livraria Lello, five floors of rooms built to be tasted, heard, touched and smelled. Sixteen experiences, no two alike — the kind of hour that makes adults forget to check their phones. Book a time slot ahead.',
    porto_capela_tag: '🍷 Curious',
    porto_capela_h: 'Capela Incomum — wine in a chapel',
    porto_capela_p: 'A small wine bar inside a former chapel — the altar is still there. Low light, a quiet glass of Douro red, and the strange, lovely feeling of a toast under a vaulted ceiling. Not somewhere you stumble into by accident.',
    porto_virtudes_tag: '🌳 Sunset',
    porto_virtudes_h: 'Passeio das Virtudes — the local sunset',
    porto_virtudes_p: 'While everyone crowds Jardim do Morro across the river, locals come here: a garden that tumbles down the hillside in terraces, with the largest ginkgo tree in Portugal and an open view over the Douro. Bring something to drink and stay for the colour of the sky.',
    porto_guindais_tag: '🌉 View',
    porto_guindais_h: 'Escadas dos Guindais — under the bridge',
    porto_guindais_p: "A steep, narrow staircase that drops down the cliff right beneath the Dom Luís I Bridge. You've seen the bridge in every postcard — here you stand under its iron belly, close enough to hear it. Take it slow on the way down.",
    porto_almas_tag: '🔵 Azulejos',
    porto_almas_h: 'Capela das Almas — a chapel of blue tiles',
    porto_almas_p: "On busy Rua de Santa Catarina, stop and look up: sixteen thousand blue azulejos wrap the whole outside of this chapel like a story told on the wall. Most people walk past it on the way to the shops. Don't.",
    porto_foto_tag: '📷 Free',
    porto_foto_h: 'Centro Português de Fotografia — the old prison',
    porto_foto_p: 'A photography museum housed in a 19th-century prison — you can still see the cell doors and the iron walkways. Free to enter, rarely crowded, and quietly one of the most atmospheric buildings in the city.',
    porto_lello_tag: '📚 Classic',
    porto_lello_h: 'Livraria Lello — go early',
    porto_lello_p: "Yes, it's famous, and yes, there's a queue. Worth it — but buy the timed ticket online and go right at opening or in the last hour, when the carved staircase is almost yours. The ticket price comes off a book.",
    porto_morro_tag: '🌅 Must-see',
    porto_morro_h: 'Cross the bridge on the top deck',
    porto_morro_p: "Walk the upper deck of the Dom Luís I Bridge — the metro shares it, but there's room, and the view stops you mid-step. On the Gaia side, Jardim do Morro is the postcard sunset. Go — just go early to find a spot.",
    porto_rib_tag: '🏛️ The heart',
    porto_rib_h: 'Get lost in the Ribeira',
    porto_rib_p: 'The oldest part of Porto, right on the water — tilting houses, laundry strung between windows, alleys that lead nowhere and everywhere. Touristy, yes. Still the soul of the city. Go in the morning, before the boats fill up.',
    porto_gaia_tag: '🍷 Taste',
    porto_gaia_h: 'Cross to Gaia for a port tasting',
    porto_gaia_p: "The port wine cellars line the Gaia bank, ten minutes' walk over the bridge. Pick one of the smaller houses for an unhurried tasting — they'll explain the difference between a tawny and a ruby, and you'll never forget it.",
    porto_cta_h: 'Found a corner you loved?',
    porto_cta_p: 'If Porto — and our little place in it — became part of a good memory, a review helps the next traveller find their way here too.',
    porto_cta_btn: 'Leave a review ⭐',
  },
  pt: {
    nav_porto: 'Conheça o Porto',
    porto_title: 'Conheça o Porto',
    porto_sub: 'Para lá dos postais — os lugares que nos fazem gostar de viver aqui',
    porto_intro: 'O Porto não é uma cidade para riscar de uma lista. Recompensa quem se perde — quem desce a rua mais estreita, quem se senta um bocado nas escadas, quem pede aquilo que não sabe pronunciar. Estes são os sítios para onde mandaríamos um amigo: alguns que toda a gente conhece, e outros por onde a maioria passa ao lado.',
    porto_g1_title: 'O Porto fora do roteiro',
    porto_g2_title: 'Os clássicos, sem pressa',
    porto_wonder_tag: '🌀 Diferente',
    porto_wonder_h: 'Wondersense — o museu dos cinco sentidos',
    porto_wonder_p: 'A poucos passos da Livraria Lello, cinco pisos de salas feitas para serem provadas, ouvidas, tocadas e cheiradas. Dezasseis experiências, todas diferentes — daquelas horas que fazem os adultos esquecerem-se do telemóvel. Reserve um horário com antecedência.',
    porto_capela_tag: '🍷 Curioso',
    porto_capela_h: 'Capela Incomum — vinho numa capela',
    porto_capela_p: 'Um pequeno bar de vinhos dentro de uma antiga capela — o altar ainda lá está. Luz baixa, um copo tranquilo de tinto do Douro, e a sensação estranha e bonita de um brinde sob um teto abobadado. Não é sítio onde se entre por acaso.',
    porto_virtudes_tag: '🌳 Pôr do sol',
    porto_virtudes_h: 'Passeio das Virtudes — o pôr do sol dos locais',
    porto_virtudes_p: 'Enquanto toda a gente se junta no Jardim do Morro do outro lado do rio, os portuenses vêm aqui: um jardim que desce a encosta em socalcos, com a maior árvore ginkgo de Portugal e uma vista aberta sobre o Douro. Leve algo para beber e fique para a cor do céu.',
    porto_guindais_tag: '🌉 Vista',
    porto_guindais_h: 'Escadas dos Guindais — debaixo da ponte',
    porto_guindais_p: 'Uma escadaria estreita e íngreme que desce o penhasco mesmo por baixo da Ponte Dom Luís I. Já viu a ponte em todos os postais — aqui fica debaixo da sua barriga de ferro, perto o suficiente para a ouvir. Desça com calma.',
    porto_almas_tag: '🔵 Azulejos',
    porto_almas_h: 'Capela das Almas — uma capela de azulejos azuis',
    porto_almas_p: 'Na movimentada Rua de Santa Catarina, pare e olhe para cima: dezasseis mil azulejos azuis cobrem todo o exterior desta capela como uma história contada na parede. A maioria passa por ela a caminho das lojas. Não faça o mesmo.',
    porto_foto_tag: '📷 Grátis',
    porto_foto_h: 'Centro Português de Fotografia — a antiga prisão',
    porto_foto_p: 'Um museu de fotografia instalado numa prisão do século XIX — ainda se veem as portas das celas e as varandas de ferro. Entrada gratuita, raramente cheio, e um dos edifícios com mais atmosfera da cidade.',
    porto_lello_tag: '📚 Clássico',
    porto_lello_h: 'Livraria Lello — vá cedo',
    porto_lello_p: 'Sim, é famosa, e sim, há fila. Vale a pena — mas compre o bilhete com hora marcada online e vá logo à abertura ou na última hora, quando a escadaria esculpida é quase só sua. O valor do bilhete é descontado num livro.',
    porto_morro_tag: '🌅 Imperdível',
    porto_morro_h: 'Atravesse a ponte pelo tabuleiro de cima',
    porto_morro_p: 'Atravesse o tabuleiro superior da Ponte Dom Luís I — o metro partilha-o, mas há espaço, e a vista pára-o a meio do passo. Do lado de Gaia, o Jardim do Morro é o pôr do sol de postal. Vá — mas vá cedo para apanhar lugar.',
    porto_rib_tag: '🏛️ O coração',
    porto_rib_h: 'Perca-se na Ribeira',
    porto_rib_p: 'A parte mais antiga do Porto, mesmo à beira-rio — casas tortas, roupa estendida entre janelas, becos que não levam a lado nenhum e a todo o lado. Turística, sim. Continua a ser a alma da cidade. Vá de manhã, antes de os barcos encherem.',
    porto_gaia_tag: '🍷 Provar',
    porto_gaia_h: 'Atravesse para Gaia para uma prova de vinho do Porto',
    porto_gaia_p: 'As caves de vinho do Porto alinham-se na margem de Gaia, a dez minutos a pé pela ponte. Escolha uma das casas mais pequenas para uma prova sem pressa — explicam-lhe a diferença entre um tawny e um ruby, e nunca mais se esquece.',
    porto_cta_h: 'Encontrou um canto de que gostou?',
    porto_cta_p: 'Se o Porto — e o nosso cantinho nele — entrou numa boa memória, uma avaliação ajuda o próximo viajante a encontrar também o caminho até aqui.',
    porto_cta_btn: 'Deixar uma avaliação ⭐',
  },
};
Object.assign(translations.en, PORTO_I18N.en);
Object.assign(translations.pt, PORTO_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], PORTO_I18N.en);
});

/* ─────────────────────────────────────────────────────────────
   ANTES DE PARTIR + common-areas gallery — strings
   EN + PT done; FR/ES/DE/IT fall back to EN until the full
   translation pass.
───────────────────────────────────────────────────────────────── */
const BYE_I18N = {
  en: {
    nav_bye: '🧳 Before You Leave',
    bye_title: 'Before You Leave',
    bye_sub: 'A short list, a small ask, and a thank you.',
    bye_checklist_h: 'A small checklist for the room',
    bye_checklist: '<li>Close the windows — Porto rain finds its way in through the old window frames.</li><li>Switch off all the lights and the LED lamps.</li><li>Wait a few seconds and make sure the toilet flush has stopped.</li><li>Log out of Netflix, HBO Max, Prime Video and Disney+ on the TV — your accounts, your privacy.</li><li>Turn off the fan, the TV and the mini fridge if you used it.</li><li>Leave the key as we agreed.</li>',
    bye_ask_h: 'Before you go',
    bye_ask_p: 'If we became part of a good memory of your trip, your review means the world to us — and helps other travellers find their way to this little corner of Porto.',
    bye_review_btn: 'Leave a review ⭐',
    bye_note_link: 'Or tell us privately first — what could have been better?',
    common_photos: 'Our shared spaces',
  },
  pt: {
    nav_bye: '🧳 Antes de Partir',
    bye_title: 'Antes de Partir',
    bye_sub: 'Uma pequena lista, um pedido pequeno, e um obrigado.',
    bye_checklist_h: 'Uma pequena lista para o quarto',
    bye_checklist: '<li>Feche as janelas — a chuva do Porto entra pelas armações antigas se as deixar abertas.</li><li>Apague todas as luzes e os candeeiros LED.</li><li>Espere uns segundos e confirme que o autoclismo parou.</li><li>Termine sessão em Netflix, HBO Max, Prime Video e Disney+ na TV — as contas são suas, a privacidade também.</li><li>Desligue o ventilador, a TV e o frigorífico se o usou.</li><li>Deixe a chave como combinámos.</li>',
    bye_ask_h: 'Antes de partir',
    bye_ask_p: 'Se fizemos parte de uma boa memória da sua viagem, a sua avaliação significa muito para nós — e ajuda outros viajantes a encontrar o caminho até este cantinho do Porto.',
    bye_review_btn: 'Deixar uma avaliação ⭐',
    bye_note_link: 'Ou diga-nos em privado primeiro — o que poderia ter sido melhor?',
    common_photos: 'Os nossos espaços',
  },
};
Object.assign(translations.en, BYE_I18N.en);
Object.assign(translations.pt, BYE_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], BYE_I18N.en);
});

/* ─────────────────────────────────────────────────────────────
   REAL-DATA additions (times, condomínio rule, second pharmacy,
   backup contact) — EN + PT; FR/ES/DE/IT fall back to EN.
───────────────────────────────────────────────────────────────── */
const REAL_I18N = {
  en: {
    checkin_late_desc: 'Please message us in advance and we will send you the entry instructions.',
    rule_condo_h: 'Common Building Areas',
    rule_c1: 'We rent this space inside a private residential building — please treat the lift, the hall and the corridors with extra care.',
    rule_c2: 'Keep your voice low in shared building areas, especially early mornings and late evenings — neighbours live behind those doors.',
    rule_c3: 'This small consideration is what keeps us welcome in the building.',
    nb_pharmacy_2: 'Pharmacy (until 8pm)',
    em_alt_note: "If we don't answer right away, try the backup line:",
    k_eq3: "🗑️ Dispose of rubbish in the bin bags provided. Sealed bags go to the building's waste collection — message us if you would like the exact spot.",
    k_eq4: '♻️ Please separate recycling — yellow for plastic and metal, blue for paper, green for glass — using the public recycling bins on the street.',
  },
  pt: {
    checkin_late_desc: 'Avise-nos com antecedência e enviamos-lhe as instruções de entrada.',
    rule_condo_h: 'Áreas Comuns do Prédio',
    rule_c1: 'Alugamos este espaço dentro de um prédio residencial privado — por favor trate o elevador, o hall e os corredores com um cuidado extra.',
    rule_c2: 'Mantenha a voz baixa nas áreas comuns do prédio, sobretudo de manhã cedo e à noite — vivem vizinhos atrás daquelas portas.',
    rule_c3: 'Esta pequena consideração é o que faz com que continuemos bem-vindos no prédio.',
    nb_pharmacy_2: 'Farmácia (até às 20h)',
    em_alt_note: 'Se não atendermos de imediato, tente a linha alternativa:',
    k_eq3: '🗑️ Coloque o lixo nos sacos fornecidos. Sacos fechados vão para o ponto de recolha do prédio — diga-nos se quiser saber o sítio exato.',
    k_eq4: '♻️ Por favor separe a reciclagem — amarelo para plástico e metal, azul para papel, verde para vidro — usando os ecopontos na rua.',
  },
};
Object.assign(translations.en, REAL_I18N.en);
Object.assign(translations.pt, REAL_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], REAL_I18N.en);
});



/* ─────────────────────────────────────────────────────────────
   GUIDE DOWNLOAD — language-aware
───────────────────────────────────────────────────────────────── */
const guideFiles = {
  en: { file: 'assets/guides/guide-en.docx', label: '⬇ Download Guide (English)' },
  pt: { file: 'assets/guides/guide_pt.docx', label: '⬇ Descarregar Guia (Português)' },
  fr: { file: 'assets/guides/guide_fr.docx', label: '⬇ Télécharger le Guide (Français)' },
  es: { file: 'assets/guides/guide_es.docx', label: '⬇ Descargar Guía (Español)' },
  de: { file: 'assets/guides/guide_de.docx', label: '⬇ Handbuch herunterladen (Deutsch)' },
  it: { file: 'assets/guides/guide_it.docx', label: '⬇ Scarica la Guida (Italiano)' },
};

function updateGuideDownload(lang) {
  const btn = document.getElementById('guide-download-btn');
  if (!btn) return;
  const g = guideFiles[lang] || guideFiles.en;
  btn.href = g.file;
  btn.download = g.file.split('/').pop();
  btn.textContent = g.label;
}

/* ─────────────────────────────────────────────────────────────
   LANGUAGE SWITCHER
───────────────────────────────────────────────────────────────── */
/* Pick the starting language:
   1. a previously stored choice (manual switch or earlier detection) wins;
   2. otherwise detect it from the browser (navigator.languages);
   3. fall back to English when there is no match.
   ▶ When a new language is added (e.g. 'nl'), add it to AVAILABLE_LANGS. */
const AVAILABLE_LANGS = ['en', 'pt', 'fr', 'es', 'de', 'it', 'nl'];
function detectInitialLang() {
  try {
    const stored = localStorage.getItem('pph-lang');
    if (stored && AVAILABLE_LANGS.indexOf(stored) >= 0) return stored;
  } catch (e) { /* private mode */ }
  const navLangs = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || 'en'];
  for (let i = 0; i < navLangs.length; i++) {
    const base = String(navLangs[i] || '').toLowerCase().split('-')[0];
    if (AVAILABLE_LANGS.indexOf(base) >= 0) return base;
  }
  return 'en';
}
let currentLang = detectInitialLang();

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  currentLang = lang;
  localStorage.setItem('pph-lang', lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Use innerHTML to allow <strong> tags in some translations
      el.innerHTML = t[key];
    }
  });

  // Update <html lang> attribute
  document.documentElement.lang = lang;

  // Update language button display
  const flags = { en: '🇬🇧', pt: '🇵🇹', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪', it: '🇮🇹', nl: '🇳🇱' };
  const codes = { en: 'EN', pt: 'PT', fr: 'FR', es: 'ES', de: 'DE', it: 'IT', nl: 'NL' };
  const flagEl = document.getElementById('current-lang-flag');
  const codeEl = document.getElementById('current-lang-code');
  if (flagEl) flagEl.textContent = flags[lang] || '🇬🇧';
  if (codeEl) codeEl.textContent = codes[lang] || 'EN';

  // Update guide download button
  updateGuideDownload(lang);

  // Update active class on options
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Language dropdown toggle
const langBtn      = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langDropdown.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', isOpen);
  });

  langDropdown.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-option');
    if (!btn) return;
    applyLanguage(btn.dataset.lang);
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  });
}

/* ─────────────────────────────────────────────────────────────
   NAV DRAWER
───────────────────────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navDrawer  = document.getElementById('nav-drawer');
const navClose   = document.getElementById('nav-close');
const navOverlay = document.getElementById('nav-overlay');

function openNav() {
  navDrawer.classList.add('open');
  navOverlay.classList.add('visible');
  navDrawer.setAttribute('aria-hidden', 'false');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close navigation');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navDrawer.classList.remove('open');
  navOverlay.classList.remove('visible');
  navDrawer.setAttribute('aria-hidden', 'true');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open navigation');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openNav);
if (navClose)  navClose.addEventListener('click', closeNav);
if (navOverlay) navOverlay.addEventListener('click', closeNav);

// Close nav when a link is clicked
if (navDrawer) {
  navDrawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// Escape key closes nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeNav();
    langDropdown?.classList.remove('open');
    langBtn?.setAttribute('aria-expanded', 'false');
  }
});

/* ─────────────────────────────────────────────────────────────
   BOTTOM NAV — ACTIVE STATE
───────────────────────────────────────────────────────────────── */
const bnavItems = document.querySelectorAll('.bnav-item');

function updateBottomNav() {
  const scrollY = window.scrollY + window.innerHeight / 3;

  const sections = ['home', 'rooms', 'porto', 'avaliar', 'emergency'];
  let activeSection = 'home';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) {
      activeSection = id;
    }
  });

  bnavItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === activeSection);
  });
}

// Scroll-based bottom-nav highlighting is disabled in SPA mode; the router
// (see "APP SHELL — screen routing" below) sets the active tab on every nav.

/* ─────────────────────────────────────────────────────────────
   QR CODE GENERATION
   Uses qrcodejs CDN library loaded in index.html
───────────────────────────────────────────────────────────────── */
function generateQRCodes() {
  if (typeof QRCode === 'undefined') {
    // Library not loaded yet, try again shortly
    setTimeout(generateQRCodes, 500);
    return;
  }

  // Wi-Fi QR code (standard wifi:// format)
  const wifiQrEl = document.getElementById('wifi-qr');
  if (wifiQrEl && wifiQrEl.childElementCount === 0) {
    const wifiString = `WIFI:T:WPA;S:${WIFI_SSID};P:${WIFI_PASSWORD};;`;
    try {
      new QRCode(wifiQrEl, {
        text: wifiString,
        width: 160,
        height: 160,
        colorDark: '#1B2A4A',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {
      console.warn('Wi-Fi QR code generation failed:', e);
    }
  }

  // Website QR code
  const siteQrEl = document.getElementById('website-qr');
  if (siteQrEl && siteQrEl.childElementCount === 0 && SITE_URL !== 'https://YOUR-SITE-URL.netlify.app') {
    try {
      new QRCode(siteQrEl, {
        text: SITE_URL,
        width: 160,
        height: 160,
        colorDark: '#1B2A4A',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {
      console.warn('Site QR code generation failed:', e);
    }
  } else if (siteQrEl && siteQrEl.childElementCount === 0) {
    siteQrEl.innerHTML = '<p style="font-size:0.78rem;color:#9A9490;padding:1rem;text-align:center;">Update SITE_URL in script.js to generate this QR code</p>';
  }
}

/* ─────────────────────────────────────────────────────────────
   COPY-TO-CLIPBOARD (Wi-Fi values)
───────────────────────────────────────────────────────────────── */
const toast = document.getElementById('toast');

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      const t = translations[currentLang];
      showToast(t?.copied || '✓ Copied!');
    } catch {
      // Fallback for browsers without clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        const t = translations[currentLang];
        showToast(t?.copied || '✓ Copied!');
      } catch (err) {
        showToast(text); // Just show the value if copy fails
      }
      document.body.removeChild(textarea);
    }
  });
});

/* ─────────────────────────────────────────────────────────────
   SMOOTH SCROLL — offset for fixed header
───────────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 60;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─────────────────────────────────────────────────────────────
   INITIALISE
───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  generateQRCodes();
});

/* ─────────────────────────────────────────────────────────────
   DARK MODE TOGGLE
───────────────────────────────────────────────────────────────── */
const darkToggle = document.getElementById('dark-toggle');

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('pph-theme', dark ? 'dark' : 'light');
}

function initTheme() {
  const saved = localStorage.getItem('pph-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved ? saved === 'dark' : prefersDark);
}

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(!isDark);
  });
}

// System preference change listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('pph-theme')) applyTheme(e.matches);
});

// Run on load
initTheme();

/* ─────────────────────────────────────────────────────────────
   AVALIAR A ESTADIA — review & feedback funnel
───────────────────────────────────────────────────────────────── */
(function () {
  const section = document.getElementById('avaliar');
  if (!section) return;

  /* CONFIG — Airbnb is per-room (each room is a separate listing).
     Google: paste the Google Business "write a review" link. */
  const REVIEW_LINKS = {
    airbnb: {
      ribeira:   'COLAR_LINK_AIRBNB_RIBEIRA',
      douro:     'https://www.airbnb.pt/rooms/1684934509981187232',
      atlantico: 'https://www.airbnb.com.br/rooms/1684880628111075712',
    },
    google: 'COLAR_LINK_GOOGLE',
  };
  const WHATSAPP_URGENTE = '351913874921';

  /* Room detection — order of precedence: URL ?room=X, localStorage,
     room hash visited (set by tracker below), fallback to picker. */
  function getRoom() {
    try { return localStorage.getItem('pph-room'); } catch (e) { return null; }
  }
  function setRoom(r) {
    try { localStorage.setItem('pph-room', r); } catch (e) {}
  }
  function applyAirbnbForRoom() {
    const room = getRoom();
    const picker = document.getElementById('av-room-picker');
    const cta = document.getElementById('av-airbnb-cta');
    const link = document.getElementById('av-link-airbnb');
    const url = (room && REVIEW_LINKS.airbnb[room]) || '';
    if (url) {
      if (picker) picker.hidden = true;
      if (cta)    cta.hidden = false;
      if (link)   link.href = url;
    } else {
      if (picker) picker.hidden = false;
      if (cta)    cta.hidden = true;
    }
  }
  window.__pphApplyAirbnbForRoom = applyAirbnbForRoom; // for QR-param IIFE

  // Pre-fill the suggestion form's room radio when we know it
  (function prefillRoom() {
    const r = getRoom();
    if (!r) return;
    const labels = { ribeira: 'Ribeira', douro: 'Douro', atlantico: 'Atlântico' };
    const radio = section.querySelector('input[name="quarto"][value="' + labels[r] + '"]');
    if (radio) radio.checked = true;
  })();

  function show(stepId) {
    section.querySelectorAll('.av-step').forEach(function (s) {
      s.classList.toggle('active', s.id === stepId);
    });
    const header = document.getElementById('site-header');
    const offset = (header ? header.offsetHeight : 60) + 8;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  /* Step 1 — the feeling chosen decides the path */
  section.querySelectorAll('.av-feel').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expEl = document.getElementById('av-f-experiencia');
      if (expEl) expEl.value = btn.dataset.v;
      show(btn.dataset.path === 'positive' ? 'av-step-platform' : 'av-step-form');
    });
  });

  /* Step 2 — the platform chosen reveals the right call to action */
  function pickPlatform(plat) {
    ['airbnb', 'booking', 'outra'].forEach(function (p) {
      const el = document.getElementById('av-res-' + p);
      if (el) el.classList.toggle('show', p === plat);
    });
    if (plat === 'airbnb') applyAirbnbForRoom();
  }
  section.querySelectorAll('[data-plat]').forEach(function (el) {
    el.addEventListener('click', function () { pickPlatform(el.dataset.plat); });
  });

  /* Room picker (inside #av-res-airbnb, shown when room unknown) */
  section.querySelectorAll('[data-room]').forEach(function (b) {
    b.addEventListener('click', function () {
      setRoom(b.dataset.room);
      applyAirbnbForRoom();
    });
  });

  /* back / restart buttons */
  section.querySelectorAll('[data-goto]').forEach(function (b) {
    b.addEventListener('click', function () { show(b.dataset.goto); });
  });

  /* apply the real review links (Airbnb is set per-room by applyAirbnbForRoom) */
  function setLink(id, url) {
    const el = document.getElementById(id);
    if (el) el.href = url || '#';
  }
  setLink('av-link-google-b', REVIEW_LINKS.google);
  setLink('av-link-google-o', REVIEW_LINKS.google);
  setLink('av-link-google-t', REVIEW_LINKS.google);
  applyAirbnbForRoom();

  /* urgency — reveal the WhatsApp shortcut with a message in the active language */
  const urgentBox = document.getElementById('av-urgent-box');
  const urgentYes = document.getElementById('av-f-urgent-yes');
  const waUrgent = document.getElementById('av-wa-urgent');
  function refreshUrgent() {
    const on = !!(urgentYes && urgentYes.checked);
    if (urgentBox) urgentBox.classList.toggle('show', on);

    /* Contact block (best-way-to-reach + name/number) only matters when help
       is needed today. When "No" is selected we keep the form short and
       just let the guest hit Send. */
    const contactBlock = document.getElementById('av-contact-block');
    if (contactBlock) contactBlock.hidden = !on;
    section.querySelectorAll('input[name="contacto_via"]').forEach(function (r) {
      r.required = on;
      if (!on) r.checked = false;
    });
    if (!on) {
      const contactoEl = document.getElementById('av-f-contacto');
      if (contactoEl) contactoEl.value = '';
    }

    if (on && waUrgent) {
      const msg = (translations[currentLang] && translations[currentLang].av_wa_msg) ||
        "Hello! I'm staying at Porto Peace Haven and I need help during my stay.";
      waUrgent.href = 'https://wa.me/' + WHATSAPP_URGENTE + '?text=' + encodeURIComponent(msg);
    }
  }
  section.querySelectorAll('input[name="urgencia"]').forEach(function (r) {
    r.addEventListener('change', refreshUrgent);
  });

  /* translated placeholders — applyLanguage only handles innerHTML, not placeholders */
  function applyAvaliarPlaceholders() {
    section.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      const v = translations[currentLang] && translations[currentLang][el.getAttribute('data-i18n-ph')];
      if (v) el.setAttribute('placeholder', v);
    });
  }
  const _applyLanguage = applyLanguage;
  applyLanguage = function (lang) {
    _applyLanguage(lang);
    const idEl = document.getElementById('av-f-idioma');
    if (idEl) idEl.value = currentLang;
    applyAvaliarPlaceholders();
  };
  applyAvaliarPlaceholders();
  const idiomaEl = document.getElementById('av-f-idioma');
  if (idiomaEl) idiomaEl.value = currentLang;

  /* submit — on Netlify this is captured in the Forms dashboard;
     opened locally the POST fails harmlessly and we still confirm. */
  const form = document.getElementById('av-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const areas = form.querySelectorAll('input[name="area"]:checked');
      if (areas.length === 0) {
        alert((translations[currentLang] && translations[currentLang].av_alert_areas) ||
          'Please choose at least one area we can improve.');
        return;
      }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function () { show('av-step-thanks'); })
        .catch(function () { show('av-step-thanks'); });
    });
  }
})();

/* ─────────────────────────────────────────────────────────────
   ROOM PHOTO GALLERIES + LIGHTBOX
───────────────────────────────────────────────────────────────── */
(function () {
  const galleries = document.querySelectorAll('.room-gallery');
  if (!galleries.length) return;

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-label', 'Photo viewer');
  lb.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');

  function openLb(src) {
    lbImg.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }
  lb.addEventListener('click', closeLb);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLb();
  });

  document.querySelectorAll('.room-gallery-item').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      openLb(a.getAttribute('href'));
    });
  });

  /* If every photo in a gallery failed to load, hide that section */
  window.addEventListener('load', function () {
    galleries.forEach(function (g) {
      if (!g.querySelector('.room-gallery-item')) {
        const sec = g.closest('.room-gallery-section');
        if (sec) sec.style.display = 'none';
      }
    });
  });
})();

/* ─────────────────────────────────────────────────────────────
   QR ENTRY PARAMETERS + WHATSAPP LOCALISATION
   ?src=X       → tracking tag (Cloudflare Web Analytics picks
                  the URL up automatically; appears as /?src=X
                  in the "Top pages" view).
   ?platform=X  → pre-routes the Avaliar funnel straight to the
                  platform-review CTA for X (airbnb|booking|outra).
                  Use on the printed "leave a review" QR codes so
                  the guest lands one tap away from reviewing.
───────────────────────────────────────────────────────────────── */
(function () {
  const PHONE = '351913874921';

  /* Localised WhatsApp link for the Contact Host and Emergency host
     buttons. The Avaliar urgent button (#av-wa-urgent) manages its
     own urgency-specific message and is left alone. */
  function refreshContactWa() {
    const msg = (translations[currentLang] && translations[currentLang].wa_msg_contact) ||
      "Hello! I'm staying at Porto Peace Haven — could you help me with something?";
    const url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
    document.querySelectorAll('a[href*="wa.me/' + PHONE + '"]').forEach(function (a) {
      if (a.id === 'av-wa-urgent') return;
      a.href = url;
    });
  }
  const _applyLang = applyLanguage;
  applyLanguage = function (lang) {
    _applyLang(lang);
    refreshContactWa();
  };
  refreshContactWa();

  /* Read URL params on entry */
  const params = new URLSearchParams(location.search);
  const src = params.get('src');
  const platform = params.get('platform');
  const roomParam = params.get('room');

  if (src) {
    try { sessionStorage.setItem('pph-src', src); } catch (e) { /* private mode */ }
  }

  /* Room detection: URL param wins; then track navigation to a room hash */
  const ROOMS = ['ribeira', 'douro', 'atlantico'];
  if (roomParam && ROOMS.indexOf(roomParam) >= 0) {
    try { localStorage.setItem('pph-room', roomParam); } catch (e) {}
  }
  function trackRoomFromHash() {
    const h = location.hash.replace('#', '');
    if (ROOMS.indexOf(h) >= 0) {
      try { localStorage.setItem('pph-room', h); } catch (e) {}
    }
  }
  window.addEventListener('hashchange', trackRoomFromHash);
  trackRoomFromHash();

  if (platform && ['airbnb', 'booking', 'outra'].indexOf(platform) >= 0) {
    function route() {
      const avaliar = document.getElementById('avaliar');
      if (!avaliar) { setTimeout(route, 80); return; }
      const expEl = document.getElementById('av-f-experiencia');
      if (expEl) expEl.value = 'Excelente';
      avaliar.querySelectorAll('.av-step').forEach(function (s) {
        s.classList.remove('active');
      });
      const platStep = document.getElementById('av-step-platform');
      if (platStep) platStep.classList.add('active');
      ['airbnb', 'booking', 'outra'].forEach(function (p) {
        const el = document.getElementById('av-res-' + p);
        if (el) el.classList.toggle('show', p === platform);
      });
      // For Airbnb, apply the right per-room URL (or show the picker)
      if (platform === 'airbnb' && typeof window.__pphApplyAirbnbForRoom === 'function') {
        window.__pphApplyAirbnbForRoom();
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', route);
    } else {
      route();
    }
  }
})();

/* ═════════════════════════════════════════════════════════════
   FULL TRANSLATIONS — FR · ES · DE · IT
   Overrides the English fallback set earlier for all new content
   (Avaliar funnel, ficha de cuidado, Conheça o Porto, Antes de
   Partir, room/common photos, contact WhatsApp message).
═════════════════════════════════════════════════════════════ */

Object.assign(translations.fr, {
  nav_avaliar: '⭐ Évaluer votre séjour',
  bnav_avaliar: 'Évaluer',
  av_section_title: 'Évaluer votre séjour',
  av_section_sub: 'Votre voix façonne tout ce que nous faisons ici',
  av_eyebrow1: 'Votre avis',
  av_title1: 'Comment se passe votre séjour ?',
  av_lead1: 'Votre expérience est ce qui nous fait avancer. Dites-nous comment vous vous sentez — quelques secondes suffisent.',
  av_feel_excelente: 'Excellent',
  av_feel_boa: 'Bien',
  av_feel_regular: 'Peut mieux faire',
  av_feel_ruim: 'Mauvais',
  av_hint1: 'Réservé sur Booking ? Vous pouvez tout de même laisser votre avis sur Airbnb ou Google — cela nous aide encore plus.',
  av_eyebrow2: 'Quelle joie',
  av_title2: 'Quel bonheur 💛',
  av_lead2: "Cela nous touche. Si vous le souhaitez, laissez un avis là où vous avez réservé — c'est ce qui aide d'autres voyageurs à trouver ce petit coin de Porto.",
  av_q_platform: 'Où avez-vous réservé votre séjour ?',
  av_plat_outra: 'Une autre plateforme',
  av_airbnb_h: "Un avis sur Airbnb vaut son pesant d'or",
  av_airbnb_p: "C'est là que vos mots font la plus grande différence pour nous — et cela prend moins d'une minute.",
  av_airbnb_btn: 'Évaluer sur Airbnb',
  av_airbnb_alt: 'Vous préférez évaluer sur Google ?',
  av_booking_h: "Merci d'avoir séjourné chez nous",
  av_booking_p: "Sur Booking, votre avis arrive par e-mail après le départ. Si vous souhaitez nous aider encore plus dès maintenant, un avis sur Google fait toute la différence.",
  av_booking_btn: 'Évaluer sur Google',
  av_booking_alt: 'Vous avez un compte Airbnb ? Vous pouvez aussi y laisser un avis',
  av_outra_h: 'Votre avis nous aide énormément',
  av_outra_p: "Un avis sur Google prend moins d'une minute et aide d'autres voyageurs à nous découvrir.",
  av_outra_btn: 'Évaluer sur Google',
  av_back: '← Retour',
  av_eyebrow3: 'Dites-nous',
  av_title3: 'Merci de nous le dire',
  av_lead3: 'Nous voulons corriger maintenant — pendant votre séjour, pas après. Dites-nous ce qui se passe et notre équipe agit en priorité.',
  av_f_room: 'Dans quelle chambre êtes-vous ?',
  av_f_phase: 'À quelle étape de votre séjour êtes-vous ?',
  av_phase_select: 'Sélectionner…',
  av_phase_arrival: 'Arrivée',
  av_phase_middle: 'Milieu du séjour',
  av_phase_pre: 'Avant le départ',
  av_phase_post: 'Après le départ',
  av_f_area: 'Que pouvons-nous améliorer ?',
  av_area_cleaning: 'Propreté',
  av_area_comfort: 'Confort de la chambre',
  av_area_wifi: 'Wi-Fi',
  av_area_bathroom: 'Salle de bain',
  av_area_kitchen: 'Cuisine',
  av_area_noise: 'Bruit',
  av_area_comm: 'Communication',
  av_area_other: 'Autre',
  av_f_detail: 'Dites-le-nous avec vos mots',
  av_detail_ph: "Qu'est-ce qui n'est pas comme vous l'attendiez ? Plus vous nous en direz, plus vite nous pourrons corriger.",
  av_f_urgency: 'Cela nécessite-t-il une action rapide ?',
  av_urg_no: "Non, c'est juste une suggestion",
  av_urg_yes: "Oui, j'ai besoin d'aide aujourd'hui",
  av_urgent_p: "Pour quelque chose d'urgent, parlez-nous tout de suite — nous vous répondrons aussi vite que possible.",
  av_urgent_btn: 'Nous parler maintenant sur WhatsApp',
  av_f_via: 'Meilleur moyen de vous joindre',
  av_via_wa: 'WhatsApp',
  av_via_phone: 'Téléphone',
  av_f_contact: 'Nom ou numéro de contact',
  av_contact_opt: '(optionnel — cela nous aide à vous répondre)',
  av_contact_ph: 'Ex. : Marie · +351 9XX XXX XXX',
  av_submit: 'Envoyer la suggestion',
  av_form_note: "Votre message arrive directement à notre équipe. Il n'est jamais rendu public.",
  av_thanks_title: 'Nous avons reçu votre message',
  av_thanks_lead: "Nous agirons en priorité. Merci de nous donner la chance d'améliorer votre séjour.",
  av_thanks_box_h: 'Quand tout sera comme il se doit…',
  av_thanks_box_p: "…nous aimerions avoir de vos nouvelles. Mais seulement quand le moment vous semblera juste — laissez-nous d'abord arranger les choses.",
  av_thanks_btn: 'Laisser un avis',
  av_thanks_back: '← Recommencer',
  av_alert_areas: 'Veuillez choisir au moins un domaine que nous pouvons améliorer.',
  av_wa_msg: "Bonjour ! Je séjourne au Porto Peace Haven et j'aurais besoin d'aide pour quelque chose pendant mon séjour.",
  ficha_g_comfort: 'Pour votre confort',
  ficha_g_work: 'Pour travailler',
  ficha_g_rest: 'Pour vous reposer',
  ficha_g_light: 'Lumière, son &amp; écran',
  ficha_g_storage: 'Rangement &amp; détails',
  ficha_cta_p: "Nous avons préparé cette chambre dans le moindre détail, pour que vous vous reposiez mieux. Si quelque chose ne va pas comme vous l'espériez, dites-le-nous maintenant — nous préférons arranger les choses pendant votre séjour, pas après.",
  ficha_cta_suggest: 'Quelque chose ici pourrait être mieux ?',
  ficha_cta_review: 'Évaluer mon séjour ⭐',
  rib_intro: 'Le bleu profond du Douro au crépuscule. La plus grande des trois chambres — de la place pour respirer, et pour travailler sans précipitation.',
  rib_comfort: "<li>Un lit garni de deux oreillers — un plus haut, un plus bas — pour dormir comme cela vous convient.</li><li>Un ventilateur, et des fenêtres qui s'ouvrent largement pour aérer et rafraîchir la chambre (pas de climatisation, mais Porto entre bien).</li><li>Un mini-frigo pour ce que vous souhaitez garder à portée de main.</li>",
  rib_work: '<li>Une vraie chaise de bureau — pas une chaise de salle à manger qui prétend en être une.</li><li>Une large étagère intégrée au mur qui sert de bureau — pensée pour le télétravail et les séjours plus longs.</li>',
  rib_light: "<li>Deux lampes LED RGB et une bande LED derrière la TV, toutes avec télécommande — choisissez la couleur et l'ambiance qui vous plaisent ce soir.</li><li>Une TV avec lecteur Android : Netflix, HBO Max, Prime Video, Disney+ avec vos propres comptes — pensez juste à vous déconnecter avant le départ.</li>",
  rib_storage: '<li>Un grand rangement et un portant à vêtements, avec beaucoup de place pour votre valise.</li><li>Deux toiles encadrées de la Ribeira, choisies en pensant à cette chambre.</li><li>Des prises avec USB-A et USB-C, et un miroir pleine hauteur.</li>',
  dou_intro: "L'or chaud d'une fin d'après-midi sur le Douro. La chambre la plus douillette — faite pour ralentir et bien dormir.",
  dou_comfort: "<li>Un lit garni de deux oreillers — un plus haut, un plus bas — choisissez celui qui vous convient le mieux.</li><li>Un ventilateur, et des fenêtres qui s'ouvrent pour aérer et rafraîchir (pas de climatisation, mais cela rafraîchit bien).</li><li>Un mini-frigo pour votre usage personnel.</li>",
  dou_rest: "<li>Pas de bureau ici, et c'est voulu — Douro est la chambre pour décrocher, pas pour travailler.</li><li>Lumière chaude, atmosphère calme et une teinte dorée douce, faite pour la fin de la journée.</li>",
  dou_light: '<li>Deux lampes LED RGB et une bande LED derrière la TV, toutes avec télécommande.</li><li>Une TV avec lecteur Android : Netflix, HBO Max, Prime Video, Disney+ avec vos propres comptes — merci de vous déconnecter avant le départ.</li>',
  dou_curio: "<strong>Un détail Douro :</strong> la lampe a trois températures de lumière — ambre, blanche et un mélange des deux. À chaque allumage, elle change. Essayez de l'allumer et de l'éteindre plusieurs fois et gardez celle qui vous plaît.",
  dou_storage: '<li>Une zone de rangement dédiée et un portant à vêtements.</li><li>Deux toiles encadrées sur le thème de la chambre, des prises avec USB-A et USB-C, et un miroir.</li>',
  atl_intro: "Le bleu clair de l'océan un matin limpide. Aéré, lumineux et serein — pour se réveiller sans hâte.",
  atl_comfort: "<li>Un lit garni de deux oreillers — un plus haut, un plus bas — choisissez ce qui vous convient.</li><li>Un ventilateur, et des fenêtres qui s'ouvrent et aèrent magnifiquement (pas de climatisation, mais cela rafraîchit bien).</li><li>Un mini-frigo pour votre usage personnel.</li>",
  atl_work: '<li>Une chaise de bureau et une petite table de travail — assez pour répondre à quelques e-mails avec une vue paisible.</li>',
  atl_light: "<li>Deux lampes LED RGB et une bande LED derrière la TV, toutes avec télécommande.</li><li>Une TV avec lecteur Android : Netflix, HBO Max, Prime Video, Disney+ avec vos propres comptes — merci de vous déconnecter avant le départ.</li><li><strong>Bon à savoir :</strong> pour changer uniquement la couleur de la lampe sans affecter la TV, éteignez d'abord la TV, puis pointez la télécommande LED directement vers la lampe.</li>",
  atl_storage: '<li>Un portant à vêtements pour suspendre vos affaires.</li><li>Une toile encadrée sur le thème de la chambre, des prises avec USB-A et USB-C, et un miroir.</li>',
  nav_porto: 'Découvrez Porto',
  porto_title: 'Découvrez Porto',
  porto_sub: 'Au-delà des cartes postales — les endroits qui nous font aimer vivre ici',
  porto_intro: "Porto n'est pas une ville qu'on coche sur une liste. Elle récompense les flâneurs — ceux qui prennent la rue étroite, qui s'asseyent un moment sur les marches, qui commandent ce qu'ils ne savent pas prononcer. Voici les endroits où nous enverrions un ami : quelques-uns que tout le monde connaît, et quelques-uns devant lesquels la plupart des visiteurs passent sans s'arrêter.",
  porto_g1_title: 'Porto hors des sentiers battus',
  porto_g2_title: 'Les classiques, sans se presser',
  porto_wonder_tag: '🌀 Différent',
  porto_wonder_h: 'Wondersense — le musée des cinq sens',
  porto_wonder_p: "À quelques pas de la Livraria Lello, cinq étages de salles faites pour être goûtées, entendues, touchées et senties. Seize expériences, toutes différentes — le genre d'heure qui fait oublier le téléphone aux adultes. Réservez un créneau à l'avance.",
  porto_capela_tag: '🍷 Curieux',
  porto_capela_h: 'Capela Incomum — un verre dans une chapelle',
  porto_capela_p: "Un petit bar à vin dans une ancienne chapelle — l'autel est toujours là. Lumière tamisée, un verre tranquille de rouge du Douro, et la sensation étrange et belle de trinquer sous une voûte. Pas un endroit où l'on entre par hasard.",
  porto_virtudes_tag: '🌳 Coucher de soleil',
  porto_virtudes_h: 'Passeio das Virtudes — le coucher de soleil des locaux',
  porto_virtudes_p: "Pendant que tout le monde se presse au Jardim do Morro de l'autre côté du fleuve, les habitants viennent ici : un jardin qui descend la colline en terrasses, avec le plus grand ginkgo du Portugal et une vue ouverte sur le Douro. Apportez quelque chose à boire et restez pour la couleur du ciel.",
  porto_guindais_tag: '🌉 Vue',
  porto_guindais_h: 'Escadas dos Guindais — sous le pont',
  porto_guindais_p: "Un escalier raide et étroit qui dévale la falaise juste sous le pont Dom Luís I. Vous avez vu le pont sur toutes les cartes postales — ici vous êtes sous son ventre de fer, assez près pour l'entendre. Descendez doucement.",
  porto_almas_tag: '🔵 Azulejos',
  porto_almas_h: "Capela das Almas — une chapelle d'azulejos bleus",
  porto_almas_p: "Sur la très fréquentée Rua de Santa Catarina, arrêtez-vous et levez les yeux : seize mille azulejos bleus enveloppent tout l'extérieur de cette chapelle comme une histoire racontée sur le mur. La plupart passent devant en allant faire du shopping. Pas vous.",
  porto_foto_tag: '📷 Gratuit',
  porto_foto_h: "Centro Português de Fotografia — l'ancienne prison",
  porto_foto_p: "Un musée de la photographie installé dans une prison du XIXe siècle — on voit encore les portes des cellules et les passerelles en fer. Entrée gratuite, rarement bondé, et l'un des bâtiments les plus atmosphériques de la ville en toute discrétion.",
  porto_lello_tag: '📚 Classique',
  porto_lello_h: 'Livraria Lello — allez-y tôt',
  porto_lello_p: "Oui, c'est célèbre, et oui, il y a la queue. Cela vaut le coup — mais achetez le billet horodaté en ligne et allez-y dès l'ouverture ou dans la dernière heure, quand l'escalier sculpté est presque à vous. Le prix du billet est déduit d'un livre.",
  porto_morro_tag: '🌅 Incontournable',
  porto_morro_h: 'Traversez le pont par le tablier supérieur',
  porto_morro_p: "Marchez sur le tablier supérieur du pont Dom Luís I — le métro le partage, mais il y a de la place, et la vue vous arrête en plein élan. Du côté Gaia, le Jardim do Morro est le coucher de soleil de carte postale. Allez-y — mais allez-y tôt pour trouver une place.",
  porto_rib_tag: '🏛️ Le cœur',
  porto_rib_h: 'Perdez-vous dans la Ribeira',
  porto_rib_p: "La partie la plus ancienne de Porto, au bord de l'eau — maisons penchées, linge tendu entre les fenêtres, ruelles qui ne mènent nulle part et partout. Touristique, oui. C'est toujours l'âme de la ville. Allez-y le matin, avant que les bateaux ne se remplissent.",
  porto_gaia_tag: '🍷 Déguster',
  porto_gaia_h: 'Traversez vers Gaia pour une dégustation de Porto',
  porto_gaia_p: "Les caves de vin de Porto longent la rive de Gaia, à dix minutes à pied par le pont. Choisissez une des plus petites maisons pour une dégustation sans hâte — on vous expliquera la différence entre un tawny et un ruby, et vous ne l'oublierez jamais.",
  porto_cta_h: 'Trouvé un coin que vous avez aimé ?',
  porto_cta_p: "Si Porto — et notre petit endroit dedans — est devenu une bonne mémoire, un avis aide le prochain voyageur à trouver son chemin jusqu'ici aussi.",
  porto_cta_btn: 'Laisser un avis ⭐',
  nav_bye: '🧳 Avant de partir',
  bye_title: 'Avant de partir',
  bye_sub: 'Une petite liste, une petite demande, et un merci.',
  bye_checklist_h: 'Une petite liste pour la chambre',
  bye_checklist: "<li>Fermez les fenêtres — la pluie de Porto trouve son chemin par les vieux châssis.</li><li>Éteignez toutes les lumières et les lampes LED.</li><li>Attendez quelques secondes et vérifiez que la chasse d'eau s'est bien arrêtée.</li><li>Déconnectez-vous de Netflix, HBO Max, Prime Video et Disney+ sur la TV — vos comptes, votre vie privée.</li><li>Éteignez le ventilateur, la TV et le mini-frigo si vous l'avez utilisé.</li><li>Laissez la clé comme convenu.</li>",
  bye_ask_h: 'Avant de partir',
  bye_ask_p: "Si nous avons fait partie d'un bon souvenir de votre voyage, votre avis compte beaucoup pour nous — et aide d'autres voyageurs à trouver le chemin de ce petit coin de Porto.",
  bye_review_btn: 'Laisser un avis ⭐',
  bye_note_link: "Ou dites-le-nous d'abord en privé — qu'est-ce qui aurait pu être mieux ?",
  common_photos: 'Nos espaces communs',
  room_photos: 'Photos de la chambre',
  wa_msg_contact: "Bonjour ! Je séjourne au Porto Peace Haven — pouvez-vous m'aider avec quelque chose ?",
});

Object.assign(translations.es, {
  nav_avaliar: '⭐ Valorar tu estancia',
  bnav_avaliar: 'Valorar',
  av_section_title: 'Valorar tu estancia',
  av_section_sub: 'Tu voz es lo que da forma a todo lo que hacemos aquí',
  av_eyebrow1: 'Tu opinión',
  av_title1: '¿Cómo va tu estancia?',
  av_lead1: 'Tu experiencia es lo que nos mueve. Cuéntanos cómo te sientes — solo lleva unos segundos.',
  av_feel_excelente: 'Excelente',
  av_feel_boa: 'Bien',
  av_feel_regular: 'Puede mejorar',
  av_feel_ruim: 'Mal',
  av_hint1: '¿Reservaste por Booking? También puedes dejar tu reseña en Airbnb o Google — nos ayuda aún más.',
  av_eyebrow2: 'Qué alegría',
  av_title2: '¡Qué bueno saberlo! 💛',
  av_lead2: 'Se nos queda dentro. Si quieres, deja una reseña donde reservaste — es lo que ayuda a otros viajeros a encontrar este rinconcito de Oporto.',
  av_q_platform: '¿Dónde reservaste tu estancia?',
  av_plat_outra: 'Otra plataforma',
  av_airbnb_h: 'Una reseña en Airbnb vale oro',
  av_airbnb_p: 'Es donde tus palabras marcan la mayor diferencia para nosotros — y lleva menos de un minuto.',
  av_airbnb_btn: 'Reseñar en Airbnb',
  av_airbnb_alt: '¿Prefieres reseñar en Google?',
  av_booking_h: 'Gracias por quedarte con nosotros',
  av_booking_p: 'En Booking, tu reseña llega por email después del check-out. Si quieres ayudarnos aún más ahora mismo, una reseña en Google marca toda la diferencia.',
  av_booking_btn: 'Reseñar en Google',
  av_booking_alt: '¿Tienes cuenta en Airbnb? También puedes reseñar allí',
  av_outra_h: 'Tu reseña nos ayuda muchísimo',
  av_outra_p: 'Una reseña en Google lleva menos de un minuto y ayuda a otros viajeros a descubrirnos.',
  av_outra_btn: 'Reseñar en Google',
  av_back: '← Volver',
  av_eyebrow3: 'Cuéntanos',
  av_title3: 'Gracias por decírnoslo',
  av_lead3: 'Queremos arreglarlo ahora — durante tu estancia, no después. Cuéntanos qué pasa y nuestro equipo actúa con prioridad.',
  av_f_room: '¿En qué habitación te alojas?',
  av_f_phase: '¿En qué momento de tu estancia estás?',
  av_phase_select: 'Seleccionar…',
  av_phase_arrival: 'Llegada',
  av_phase_middle: 'A mitad de estancia',
  av_phase_pre: 'Antes del check-out',
  av_phase_post: 'Después del check-out',
  av_f_area: '¿Qué podemos mejorar?',
  av_area_cleaning: 'Limpieza',
  av_area_comfort: 'Confort de la habitación',
  av_area_wifi: 'Wi-Fi',
  av_area_bathroom: 'Baño',
  av_area_kitchen: 'Cocina',
  av_area_noise: 'Ruido',
  av_area_comm: 'Comunicación',
  av_area_other: 'Otro',
  av_f_detail: 'Cuéntanoslo con tus palabras',
  av_detail_ph: '¿Qué no está como esperabas? Cuanto más nos cuentes, más rápido podremos arreglarlo.',
  av_f_urgency: '¿Esto necesita acción rápida?',
  av_urg_no: 'No, es solo una sugerencia',
  av_urg_yes: 'Sí, necesito ayuda hoy',
  av_urgent_p: 'Para algo urgente, habla con nosotros ya — respondemos lo más rápido posible.',
  av_urgent_btn: 'Hablar ahora por WhatsApp',
  av_f_via: 'Mejor manera de contactarte',
  av_via_wa: 'WhatsApp',
  av_via_phone: 'Teléfono',
  av_f_contact: 'Nombre o número de contacto',
  av_contact_opt: '(opcional — nos ayuda a responderte)',
  av_contact_ph: 'Ej.: María · +351 9XX XXX XXX',
  av_submit: 'Enviar sugerencia',
  av_form_note: 'Tu mensaje llega directamente a nuestro equipo. Nunca se hace público.',
  av_thanks_title: 'Recibimos tu mensaje',
  av_thanks_lead: 'Actuaremos con prioridad. Gracias por darnos la oportunidad de mejorar tu estancia.',
  av_thanks_box_h: 'Cuando sientas que todo está como debe…',
  av_thanks_box_p: '…nos encantaría saber de ti. Pero solo cuando lo sientas oportuno — déjanos arreglarlo primero.',
  av_thanks_btn: 'Dejar una reseña',
  av_thanks_back: '← Empezar de nuevo',
  av_alert_areas: 'Por favor, elige al menos un área que podamos mejorar.',
  av_wa_msg: '¡Hola! Estoy alojado en Porto Peace Haven y necesito ayuda con algo durante mi estancia.',
  ficha_g_comfort: 'Para tu confort',
  ficha_g_work: 'Para trabajar',
  ficha_g_rest: 'Para descansar',
  ficha_g_light: 'Luz, sonido &amp; pantalla',
  ficha_g_storage: 'Almacenaje &amp; detalles',
  ficha_cta_p: 'Preparamos esta habitación al detalle, para que descansaras mejor. Si algo no está como esperabas, dínoslo ahora — preferimos arreglarlo durante tu estancia, no después.',
  ficha_cta_suggest: '¿Algo podría estar mejor?',
  ficha_cta_review: 'Valorar mi estancia ⭐',
  rib_intro: 'El azul profundo del Duero al anochecer. La más amplia de las tres habitaciones — espacio para respirar, y para trabajar sin prisa.',
  rib_comfort: '<li>Una cama con dos almohadas — una más alta, una más baja — para dormir como mejor te venga.</li><li>Un ventilador, y ventanas que se abren de par en par para airear y refrescar la habitación (no hay aire acondicionado, pero Oporto entra bien).</li><li>Una mini nevera para lo que quieras tener a mano.</li>',
  rib_work: '<li>Una silla de oficina de verdad — no una silla de comedor disfrazada.</li><li>Una balda ancha integrada en la pared que hace de escritorio — pensada para trabajo remoto y estancias más largas.</li>',
  rib_light: '<li>Dos lámparas LED RGB y una tira LED detrás de la TV, todas con mando — elige el color y el ambiente que te apetezca esta noche.</li><li>TV con reproductor Android: Netflix, HBO Max, Prime Video, Disney+ con tus propias cuentas — recuerda cerrar sesión antes del check-out.</li>',
  rib_storage: '<li>Amplio almacenaje y un perchero, con espacio de sobra para la maleta.</li><li>Dos láminas enmarcadas de la Ribeira, elegidas pensando en esta habitación.</li><li>Enchufes con USB-A y USB-C, y un espejo de cuerpo entero.</li>',
  dou_intro: 'El dorado cálido de un atardecer sobre el Duero. La habitación más acogedora — hecha para ir más despacio y dormir bien.',
  dou_comfort: '<li>Una cama con dos almohadas — una más alta, una más baja — elige aquella con la que duermes mejor.</li><li>Un ventilador, y ventanas que se abren para airear y refrescar (sin aire acondicionado, pero refresca bien).</li><li>Una mini nevera de uso personal.</li>',
  dou_rest: '<li>Aquí no hay escritorio, y es a propósito — Duero es la habitación para desconectar, no para trabajar.</li><li>Luz cálida, ambiente tranquilo y un tono dorado suave, hecho para el final del día.</li>',
  dou_light: '<li>Dos lámparas LED RGB y una tira LED detrás de la TV, todas con mando.</li><li>TV con reproductor Android: Netflix, HBO Max, Prime Video, Disney+ con tus propias cuentas — por favor cierra sesión antes del check-out.</li>',
  dou_curio: '<strong>Un detalle de Duero:</strong> la lámpara tiene tres temperaturas de luz — ámbar, blanca y una mezcla de las dos. Cada vez que la enciendes, cambia. Pruébala encendiéndola y apagándola unas veces y quédate con la que te apetezca.',
  dou_storage: '<li>Una zona de almacenaje dedicada y un perchero.</li><li>Dos láminas enmarcadas con el tema de la habitación, enchufes con USB-A y USB-C, y un espejo.</li>',
  atl_intro: 'El azul claro del océano una mañana clara. Aireada, luminosa y serena — para despertarse sin prisa.',
  atl_comfort: '<li>Una cama con dos almohadas — una más alta, una más baja — elige la que mejor te quede.</li><li>Un ventilador, y ventanas que se abren y airean la habitación maravillosamente (sin aire acondicionado, pero refresca bien).</li><li>Una mini nevera de uso personal.</li>',
  atl_work: '<li>Una silla de oficina y una mesita de trabajo — lo justo para responder unos correos con vistas tranquilas.</li>',
  atl_light: '<li>Dos lámparas LED RGB y una tira LED detrás de la TV, todas con mando.</li><li>TV con reproductor Android: Netflix, HBO Max, Prime Video, Disney+ con tus propias cuentas — por favor cierra sesión antes del check-out.</li><li><strong>Bueno saber:</strong> para cambiar solo el color de la lámpara sin afectar la TV, apaga primero la TV y apunta el mando LED directamente a la lámpara.</li>',
  atl_storage: '<li>Un perchero para colgar tus cosas.</li><li>Una lámina enmarcada con el tema de la habitación, enchufes con USB-A y USB-C, y un espejo.</li>',
  nav_porto: 'Conoce Oporto',
  porto_title: 'Conoce Oporto',
  porto_sub: 'Más allá de las postales — los lugares que nos hacen amar vivir aquí',
  porto_intro: 'Oporto no es una ciudad para tachar de una lista. Premia a quien se pierde — al que baja por la calle estrecha, al que se sienta un rato en las escaleras, al que pide eso que no sabe pronunciar. Estos son los sitios donde mandaríamos a un amigo: algunos que todo el mundo conoce, y otros por los que la mayoría pasa de largo.',
  porto_g1_title: 'Oporto fuera de la ruta',
  porto_g2_title: 'Los clásicos, sin prisa',
  porto_wonder_tag: '🌀 Diferente',
  porto_wonder_h: 'Wondersense — el museo de los cinco sentidos',
  porto_wonder_p: 'A pocos pasos de la Livraria Lello, cinco plantas de salas hechas para ser saboreadas, oídas, tocadas y olidas. Dieciséis experiencias, ninguna igual a otra — de esas horas que hacen que los adultos se olviden del móvil. Reserva un horario con antelación.',
  porto_capela_tag: '🍷 Curioso',
  porto_capela_h: 'Capela Incomum — una copa en una capilla',
  porto_capela_p: 'Un pequeño bar de vinos dentro de una antigua capilla — el altar sigue ahí. Luz baja, una copa tranquila de tinto del Duero, y la sensación extraña y bonita de brindar bajo una bóveda. No es un sitio donde entras por casualidad.',
  porto_virtudes_tag: '🌳 Atardecer',
  porto_virtudes_h: 'Passeio das Virtudes — el atardecer de los locales',
  porto_virtudes_p: 'Mientras todo el mundo se agolpa en el Jardim do Morro al otro lado del río, los locales vienen aquí: un jardín que baja la ladera en terrazas, con el mayor ginkgo de Portugal y una vista abierta sobre el Duero. Lleva algo para beber y quédate por el color del cielo.',
  porto_guindais_tag: '🌉 Vista',
  porto_guindais_h: 'Escadas dos Guindais — bajo el puente',
  porto_guindais_p: 'Una escalera estrecha y empinada que baja por el acantilado justo debajo del puente Dom Luís I. Has visto el puente en todas las postales — aquí estás bajo su vientre de hierro, lo bastante cerca para oírlo. Bájala con calma.',
  porto_almas_tag: '🔵 Azulejos',
  porto_almas_h: 'Capela das Almas — una capilla de azulejos azules',
  porto_almas_p: 'En la concurrida Rua de Santa Catarina, párate y mira hacia arriba: dieciséis mil azulejos azules envuelven todo el exterior de esta capilla como una historia contada en la pared. La mayoría pasa de largo camino de las tiendas. No lo hagas.',
  porto_foto_tag: '📷 Gratis',
  porto_foto_h: 'Centro Português de Fotografia — la antigua cárcel',
  porto_foto_p: 'Un museo de fotografía instalado en una cárcel del siglo XIX — aún se ven las puertas de las celdas y las pasarelas de hierro. Entrada gratis, rara vez lleno, y discretamente uno de los edificios con más atmósfera de la ciudad.',
  porto_lello_tag: '📚 Clásico',
  porto_lello_h: 'Livraria Lello — ve temprano',
  porto_lello_p: 'Sí, es famosa, y sí, hay cola. Vale la pena — pero compra la entrada con hora online y ve nada más abrir o en la última hora, cuando la escalera tallada es casi tuya. El precio de la entrada se descuenta de un libro.',
  porto_morro_tag: '🌅 Imprescindible',
  porto_morro_h: 'Cruza el puente por la cubierta superior',
  porto_morro_p: 'Camina por la cubierta superior del puente Dom Luís I — el metro la comparte, pero hay sitio, y la vista te detiene en seco. Del lado de Gaia, el Jardim do Morro es el atardecer de postal. Ve — pero ve temprano para encontrar sitio.',
  porto_rib_tag: '🏛️ El corazón',
  porto_rib_h: 'Piérdete en la Ribeira',
  porto_rib_p: 'La parte más antigua de Oporto, justo al borde del agua — casas torcidas, ropa tendida entre ventanas, callejones que no llevan a ninguna parte y a todas. Turística, sí. Sigue siendo el alma de la ciudad. Ve por la mañana, antes de que los barcos se llenen.',
  porto_gaia_tag: '🍷 Catar',
  porto_gaia_h: 'Cruza a Gaia para una cata de vino de Oporto',
  porto_gaia_p: 'Las bodegas de vino de Oporto se alinean en la orilla de Gaia, a diez minutos a pie por el puente. Elige una de las casas más pequeñas para una cata sin prisa — te explicarán la diferencia entre un tawny y un ruby, y no la olvidarás nunca.',
  porto_cta_h: '¿Encontraste un rincón que te gustó?',
  porto_cta_p: 'Si Oporto — y nuestro rinconcito en él — entró en una buena memoria, una reseña ayuda al próximo viajero a encontrar también el camino hasta aquí.',
  porto_cta_btn: 'Dejar una reseña ⭐',
  nav_bye: '🧳 Antes de irte',
  bye_title: 'Antes de irte',
  bye_sub: 'Una pequeña lista, una pequeña petición, y un gracias.',
  bye_checklist_h: 'Una pequeña lista para la habitación',
  bye_checklist: '<li>Cierra las ventanas — la lluvia de Oporto se cuela por los marcos antiguos.</li><li>Apaga todas las luces y las lámparas LED.</li><li>Espera unos segundos y comprueba que la cisterna ha parado.</li><li>Cierra sesión en Netflix, HBO Max, Prime Video y Disney+ en la TV — tus cuentas, tu privacidad.</li><li>Apaga el ventilador, la TV y la mini nevera si la has usado.</li><li>Deja la llave como acordamos.</li>',
  bye_ask_h: 'Antes de irte',
  bye_ask_p: 'Si formamos parte de un buen recuerdo de tu viaje, tu reseña significa muchísimo para nosotros — y ayuda a otros viajeros a encontrar el camino a este rinconcito de Oporto.',
  bye_review_btn: 'Dejar una reseña ⭐',
  bye_note_link: 'O cuéntanos primero en privado — ¿qué podría haber sido mejor?',
  common_photos: 'Nuestros espacios comunes',
  room_photos: 'Fotos de la habitación',
  wa_msg_contact: '¡Hola! Estoy alojado en Porto Peace Haven — ¿podríais ayudarme con algo?',
});

Object.assign(translations.de, {
  nav_avaliar: '⭐ Aufenthalt bewerten',
  bnav_avaliar: 'Bewerten',
  av_section_title: 'Aufenthalt bewerten',
  av_section_sub: 'Ihre Stimme prägt alles, was wir hier tun',
  av_eyebrow1: 'Ihre Meinung',
  av_title1: 'Wie ist Ihr Aufenthalt bisher?',
  av_lead1: 'Ihre Erfahrung treibt uns an. Sagen Sie uns, wie Sie sich fühlen — es dauert nur ein paar Sekunden.',
  av_feel_excelente: 'Ausgezeichnet',
  av_feel_boa: 'Gut',
  av_feel_regular: 'Könnte besser sein',
  av_feel_ruim: 'Schlecht',
  av_hint1: 'Über Booking gebucht? Sie können Ihre Bewertung trotzdem auf Airbnb oder Google hinterlassen — das hilft uns noch mehr.',
  av_eyebrow2: 'Was für eine Freude',
  av_title2: 'Schön, das zu hören 💛',
  av_lead2: 'Das bleibt bei uns. Wenn Sie mögen, hinterlassen Sie eine Bewertung dort, wo Sie gebucht haben — das hilft anderen Reisenden, diesen kleinen Winkel von Porto zu finden.',
  av_q_platform: 'Wo haben Sie Ihren Aufenthalt gebucht?',
  av_plat_outra: 'Eine andere Plattform',
  av_airbnb_h: 'Eine Bewertung auf Airbnb ist Gold wert',
  av_airbnb_p: 'Dort machen Ihre Worte den größten Unterschied für uns — und es dauert weniger als eine Minute.',
  av_airbnb_btn: 'Auf Airbnb bewerten',
  av_airbnb_alt: 'Lieber auf Google bewerten?',
  av_booking_h: 'Danke, dass Sie bei uns gewohnt haben',
  av_booking_p: 'Auf Booking kommt Ihre Bewertung nach dem Check-out per E-Mail. Wenn Sie uns jetzt noch mehr helfen möchten, macht eine Bewertung auf Google den ganzen Unterschied.',
  av_booking_btn: 'Auf Google bewerten',
  av_booking_alt: 'Haben Sie ein Airbnb-Konto? Dort können Sie auch bewerten',
  av_outra_h: 'Ihre Bewertung hilft uns enorm',
  av_outra_p: 'Eine Bewertung auf Google dauert weniger als eine Minute und hilft anderen Reisenden, uns zu entdecken.',
  av_outra_btn: 'Auf Google bewerten',
  av_back: '← Zurück',
  av_eyebrow3: 'Sagen Sie uns',
  av_title3: 'Danke, dass Sie es uns sagen',
  av_lead3: 'Wir möchten es jetzt richten — während Ihres Aufenthalts, nicht danach. Sagen Sie uns, was los ist, und unser Team handelt vorrangig.',
  av_f_room: 'In welchem Zimmer wohnen Sie?',
  av_f_phase: 'In welcher Phase Ihres Aufenthalts sind Sie?',
  av_phase_select: 'Auswählen…',
  av_phase_arrival: 'Ankunft',
  av_phase_middle: 'Mitte des Aufenthalts',
  av_phase_pre: 'Vor dem Check-out',
  av_phase_post: 'Nach dem Check-out',
  av_f_area: 'Was können wir verbessern?',
  av_area_cleaning: 'Sauberkeit',
  av_area_comfort: 'Zimmerkomfort',
  av_area_wifi: 'WLAN',
  av_area_bathroom: 'Bad',
  av_area_kitchen: 'Küche',
  av_area_noise: 'Lärm',
  av_area_comm: 'Kommunikation',
  av_area_other: 'Sonstiges',
  av_f_detail: 'Sagen Sie es uns mit Ihren eigenen Worten',
  av_detail_ph: 'Was ist nicht ganz so, wie Sie es erwartet haben? Je mehr Sie uns sagen, desto schneller können wir es beheben.',
  av_f_urgency: 'Braucht das schnelles Handeln?',
  av_urg_no: 'Nein, es ist nur ein Vorschlag',
  av_urg_yes: 'Ja, ich brauche heute Hilfe',
  av_urgent_p: 'Für dringende Dinge schreiben Sie uns gleich — wir antworten so schnell wie möglich.',
  av_urgent_btn: 'Jetzt auf WhatsApp schreiben',
  av_f_via: 'Beste Art, Sie zu erreichen',
  av_via_wa: 'WhatsApp',
  av_via_phone: 'Telefon',
  av_f_contact: 'Name oder Kontaktnummer',
  av_contact_opt: '(optional — hilft uns, Ihnen zu antworten)',
  av_contact_ph: 'z. B.: Maria · +351 9XX XXX XXX',
  av_submit: 'Vorschlag senden',
  av_form_note: 'Ihre Nachricht geht direkt an unser Team. Sie wird nie veröffentlicht.',
  av_thanks_title: 'Wir haben Ihre Nachricht erhalten',
  av_thanks_lead: 'Wir werden vorrangig handeln. Danke, dass Sie uns die Chance geben, Ihren Aufenthalt besser zu machen.',
  av_thanks_box_h: 'Wenn alles so ist, wie es sein soll…',
  av_thanks_box_p: '…würden wir gern von Ihnen hören. Aber nur, wenn es sich für Sie richtig anfühlt — lassen Sie uns zuerst die Dinge in Ordnung bringen.',
  av_thanks_btn: 'Bewertung hinterlassen',
  av_thanks_back: '← Von vorn',
  av_alert_areas: 'Bitte wählen Sie mindestens einen Bereich aus, den wir verbessern können.',
  av_wa_msg: 'Hallo! Ich wohne im Porto Peace Haven und brauche während meines Aufenthalts Hilfe mit etwas.',
  ficha_g_comfort: 'Für Ihren Komfort',
  ficha_g_work: 'Zum Arbeiten',
  ficha_g_rest: 'Zum Ausruhen',
  ficha_g_light: 'Licht, Ton &amp; Bildschirm',
  ficha_g_storage: 'Stauraum &amp; Details',
  ficha_cta_p: 'Wir haben dieses Zimmer bis ins kleinste Detail vorbereitet, damit Sie besser ruhen. Wenn etwas nicht so ist, wie Sie es gehofft haben, sagen Sie es uns jetzt — wir bringen es lieber während Ihres Aufenthalts in Ordnung als danach.',
  ficha_cta_suggest: 'Könnte hier etwas besser sein?',
  ficha_cta_review: 'Aufenthalt bewerten ⭐',
  rib_intro: 'Das tiefe Blau des Douro in der Dämmerung. Das größte der drei Zimmer — Raum zum Atmen und zum Arbeiten ohne Eile.',
  rib_comfort: '<li>Ein Bett mit zwei Kissen — einem höheren und einem flacheren — damit Sie so schlafen, wie es Ihnen passt.</li><li>Ein Ventilator, und Fenster, die sich weit öffnen lassen, um zu lüften und das Zimmer zu kühlen (keine Klimaanlage, aber Porto kommt schön herein).</li><li>Ein Minikühlschrank für alles, was Sie nah bei sich haben möchten.</li>',
  rib_work: '<li>Ein echter Bürostuhl — kein Esszimmerstuhl, der vorgibt, einer zu sein.</li><li>Ein breites, in die Wand eingebautes Regal, das als Schreibtisch dient — gemacht für Remote-Arbeit und längere Aufenthalte.</li>',
  rib_light: '<li>Zwei RGB-LED-Lampen plus ein LED-Streifen hinter dem Fernseher, alle mit Fernbedienung — wählen Sie die Farbe und Stimmung, die Ihnen heute Abend gefällt.</li><li>Ein Fernseher mit Android-Player: Netflix, HBO Max, Prime Video, Disney+ mit Ihren eigenen Konten — denken Sie daran, sich vor dem Check-out abzumelden.</li>',
  rib_storage: '<li>Großzügiger Stauraum und eine Kleiderstange, mit reichlich Platz für Ihren Koffer.</li><li>Zwei gerahmte Drucke der Ribeira, ausgewählt mit Blick auf dieses Zimmer.</li><li>Steckdosen mit USB-A und USB-C, und ein Ganzkörperspiegel.</li>',
  dou_intro: 'Das warme Gold eines späten Nachmittags über dem Douro. Das gemütlichste Zimmer — gemacht, um zur Ruhe zu kommen und gut zu schlafen.',
  dou_comfort: '<li>Ein Bett mit zwei Kissen — einem höheren und einem flacheren — wählen Sie das, mit dem Sie am besten schlafen.</li><li>Ein Ventilator, und Fenster, die sich öffnen lassen, um zu lüften und zu kühlen (keine Klimaanlage, aber es kühlt gut ab).</li><li>Ein Minikühlschrank zur persönlichen Nutzung.</li>',
  dou_rest: '<li>Hier gibt es keinen Schreibtisch, und das ist Absicht — Douro ist das Zimmer zum Abschalten, nicht zum Arbeiten.</li><li>Warmes Licht, ruhige Luft und ein sanfter goldener Ton, gemacht für das Ende des Tages.</li>',
  dou_light: '<li>Zwei RGB-LED-Lampen plus ein LED-Streifen hinter dem Fernseher, alle mit Fernbedienung.</li><li>Ein Fernseher mit Android-Player: Netflix, HBO Max, Prime Video, Disney+ mit Ihren eigenen Konten — bitte melden Sie sich vor dem Check-out ab.</li>',
  dou_curio: '<strong>Ein kleines Douro-Detail:</strong> die Lampe hat drei Lichttemperaturen — Bernstein, Weiß und eine Mischung aus beiden. Bei jedem Einschalten wechselt sie. Schalten Sie sie ein paar Mal aus und ein und behalten Sie die, die Ihnen gefällt.',
  dou_storage: '<li>Ein eigener Stauraum und eine Kleiderstange.</li><li>Zwei gerahmte Drucke zum Thema des Zimmers, Steckdosen mit USB-A und USB-C, und ein Spiegel.</li>',
  atl_intro: 'Das helle Blau des Ozeans an einem klaren Morgen. Luftig, hell und heiter — um ohne Hast aufzuwachen.',
  atl_comfort: '<li>Ein Bett mit zwei Kissen — einem höheren und einem flacheren — wählen Sie, was zu Ihnen passt.</li><li>Ein Ventilator, und Fenster, die sich öffnen lassen und das Zimmer wunderbar lüften (keine Klimaanlage, aber es kühlt gut ab).</li><li>Ein Minikühlschrank zur persönlichen Nutzung.</li>',
  atl_work: '<li>Ein Bürostuhl und ein kleiner Arbeitstisch — genug, um mit ruhigem Ausblick ein paar E-Mails zu beantworten.</li>',
  atl_light: '<li>Zwei RGB-LED-Lampen plus ein LED-Streifen hinter dem Fernseher, alle mit Fernbedienung.</li><li>Ein Fernseher mit Android-Player: Netflix, HBO Max, Prime Video, Disney+ mit Ihren eigenen Konten — bitte melden Sie sich vor dem Check-out ab.</li><li><strong>Gut zu wissen:</strong> Um nur die Lampenfarbe ohne Einfluss auf den Fernseher zu ändern, schalten Sie zuerst den Fernseher aus und richten dann die LED-Fernbedienung direkt auf die Lampe.</li>',
  atl_storage: '<li>Eine Kleiderstange zum Aufhängen Ihrer Sachen.</li><li>Ein gerahmter Druck zum Thema des Zimmers, Steckdosen mit USB-A und USB-C, und ein Spiegel.</li>',
  nav_porto: 'Porto entdecken',
  porto_title: 'Porto entdecken',
  porto_sub: 'Jenseits der Postkarten — die Orte, die uns das Leben hier lieben lassen',
  porto_intro: 'Porto ist keine Stadt, die man von einer Liste hakt. Sie belohnt die Bummler — die, die in die enge Gasse einbiegen, die sich eine Weile auf die Stufen setzen, die das bestellen, was sie nicht aussprechen können. Hier sind die Orte, an die wir einen Freund schicken würden: ein paar, die jeder kennt, und ein paar, an denen die meisten Besucher direkt vorbeigehen.',
  porto_g1_title: 'Porto abseits der ausgetretenen Pfade',
  porto_g2_title: 'Die Klassiker, in Ruhe',
  porto_wonder_tag: '🌀 Anders',
  porto_wonder_h: 'Wondersense — das Museum der fünf Sinne',
  porto_wonder_p: 'Wenige Schritte von der Livraria Lello, fünf Etagen mit Räumen, die zum Schmecken, Hören, Berühren und Riechen gemacht sind. Sechzehn Erlebnisse, keines gleicht dem anderen — die Art Stunde, bei der Erwachsene vergessen, aufs Handy zu schauen. Buchen Sie ein Zeitfenster im Voraus.',
  porto_capela_tag: '🍷 Kuriös',
  porto_capela_h: 'Capela Incomum — Wein in einer Kapelle',
  porto_capela_p: 'Eine kleine Weinbar in einer ehemaligen Kapelle — der Altar steht noch. Gedämpftes Licht, ein ruhiges Glas Douro-Rotwein und das seltsame, schöne Gefühl, unter einem Gewölbe anzustoßen. Kein Ort, an den man zufällig stolpert.',
  porto_virtudes_tag: '🌳 Sonnenuntergang',
  porto_virtudes_h: 'Passeio das Virtudes — der lokale Sonnenuntergang',
  porto_virtudes_p: 'Während sich alle am Jardim do Morro auf der anderen Flussseite drängen, kommen die Einheimischen hierher: ein Garten, der in Terrassen den Hang hinunterläuft, mit dem größten Ginkgo Portugals und einem offenen Blick über den Douro. Bringen Sie etwas zu trinken mit und bleiben Sie wegen der Farbe des Himmels.',
  porto_guindais_tag: '🌉 Aussicht',
  porto_guindais_h: 'Escadas dos Guindais — unter der Brücke',
  porto_guindais_p: 'Eine steile, schmale Treppe, die direkt unter der Brücke Dom Luís I die Felswand hinabführt. Sie haben die Brücke auf jeder Postkarte gesehen — hier stehen Sie unter ihrem eisernen Bauch, nahe genug, um sie zu hören. Steigen Sie langsam hinab.',
  porto_almas_tag: '🔵 Azulejos',
  porto_almas_h: 'Capela das Almas — eine Kapelle aus blauen Kacheln',
  porto_almas_p: 'In der belebten Rua de Santa Catarina, halten Sie inne und schauen Sie hoch: sechzehntausend blaue Azulejos umhüllen die gesamte Außenseite dieser Kapelle wie eine Geschichte an der Wand. Die meisten gehen auf dem Weg zu den Geschäften daran vorbei. Tun Sie das nicht.',
  porto_foto_tag: '📷 Gratis',
  porto_foto_h: 'Centro Português de Fotografia — das alte Gefängnis',
  porto_foto_p: 'Ein Fotomuseum, untergebracht in einem Gefängnis aus dem 19. Jahrhundert — man sieht noch die Zellentüren und die Eisenstege. Eintritt frei, selten überfüllt, und leise eines der atmosphärischsten Gebäude der Stadt.',
  porto_lello_tag: '📚 Klassisch',
  porto_lello_h: 'Livraria Lello — kommen Sie früh',
  porto_lello_p: 'Ja, sie ist berühmt, und ja, es gibt eine Warteschlange. Es lohnt sich — aber kaufen Sie das Zeitticket online und gehen Sie direkt zur Öffnung oder in der letzten Stunde, wenn die geschnitzte Treppe fast Ihnen allein gehört. Der Ticketpreis wird auf ein Buch angerechnet.',
  porto_morro_tag: '🌅 Pflicht',
  porto_morro_h: 'Überqueren Sie die Brücke auf der oberen Ebene',
  porto_morro_p: 'Gehen Sie über die obere Ebene der Brücke Dom Luís I — die Metro teilt sie, aber es ist Platz, und die Aussicht hält Sie mitten im Schritt an. Auf der Gaia-Seite ist der Jardim do Morro der Postkarten-Sonnenuntergang. Gehen Sie hin — aber gehen Sie früh, um einen Platz zu bekommen.',
  porto_rib_tag: '🏛️ Das Herz',
  porto_rib_h: 'Verlieren Sie sich in der Ribeira',
  porto_rib_p: 'Der älteste Teil von Porto, direkt am Wasser — schiefe Häuser, Wäsche zwischen den Fenstern, Gassen, die nirgendwohin und überall hinführen. Touristisch, ja. Trotzdem die Seele der Stadt. Gehen Sie am Morgen, bevor die Boote sich füllen.',
  porto_gaia_tag: '🍷 Verkosten',
  porto_gaia_h: 'Gehen Sie nach Gaia für eine Portwein-Verkostung',
  porto_gaia_p: 'Die Portweinkeller säumen das Gaia-Ufer, zehn Minuten zu Fuß über die Brücke. Wählen Sie eines der kleineren Häuser für eine unbeschwerte Verkostung — man erklärt Ihnen den Unterschied zwischen einem Tawny und einem Ruby, und Sie werden ihn nie vergessen.',
  porto_cta_h: 'Eine Ecke gefunden, die Sie geliebt haben?',
  porto_cta_p: 'Wenn Porto — und unser kleiner Platz darin — Teil einer schönen Erinnerung wurde, hilft eine Bewertung dem nächsten Reisenden, auch hierherzufinden.',
  porto_cta_btn: 'Bewertung hinterlassen ⭐',
  nav_bye: '🧳 Vor der Abreise',
  bye_title: 'Vor der Abreise',
  bye_sub: 'Eine kleine Liste, eine kleine Bitte, und ein Danke.',
  bye_checklist_h: 'Eine kleine Liste für das Zimmer',
  bye_checklist: '<li>Schließen Sie die Fenster — Portos Regen findet seinen Weg durch die alten Fensterrahmen.</li><li>Schalten Sie alle Lichter und die LED-Lampen aus.</li><li>Warten Sie ein paar Sekunden und stellen Sie sicher, dass die Spülung aufgehört hat.</li><li>Melden Sie sich auf dem Fernseher von Netflix, HBO Max, Prime Video und Disney+ ab — Ihre Konten, Ihre Privatsphäre.</li><li>Schalten Sie den Ventilator, den Fernseher und den Minikühlschrank aus, falls Sie ihn genutzt haben.</li><li>Lassen Sie den Schlüssel wie vereinbart.</li>',
  bye_ask_h: 'Bevor Sie gehen',
  bye_ask_p: 'Wenn wir Teil einer schönen Erinnerung Ihrer Reise geworden sind, bedeutet uns Ihre Bewertung die Welt — und sie hilft anderen Reisenden, den Weg in diesen kleinen Winkel von Porto zu finden.',
  bye_review_btn: 'Bewertung hinterlassen ⭐',
  bye_note_link: 'Oder sagen Sie es uns zuerst privat — was hätte besser sein können?',
  common_photos: 'Unsere gemeinsamen Räume',
  room_photos: 'Zimmerfotos',
  wa_msg_contact: 'Hallo! Ich wohne im Porto Peace Haven — könnten Sie mir mit etwas helfen?',
});

Object.assign(translations.it, {
  nav_avaliar: '⭐ Valuta il tuo soggiorno',
  bnav_avaliar: 'Valuta',
  av_section_title: 'Valuta il tuo soggiorno',
  av_section_sub: 'La tua voce dà forma a tutto ciò che facciamo qui',
  av_eyebrow1: 'La tua opinione',
  av_title1: 'Come va il tuo soggiorno?',
  av_lead1: 'La tua esperienza è ciò che ci muove. Dicci come ti senti — bastano pochi secondi.',
  av_feel_excelente: 'Eccellente',
  av_feel_boa: 'Bene',
  av_feel_regular: 'Si può migliorare',
  av_feel_ruim: 'Male',
  av_hint1: 'Hai prenotato su Booking? Puoi comunque lasciare la tua recensione su Airbnb o Google — ci aiuta ancora di più.',
  av_eyebrow2: 'Che gioia',
  av_title2: 'Che bello sentirlo 💛',
  av_lead2: 'Rimane con noi. Se vuoi, lascia una recensione dove hai prenotato — è ciò che aiuta altri viaggiatori a trovare questo angolino di Porto.',
  av_q_platform: 'Dove hai prenotato il tuo soggiorno?',
  av_plat_outra: "Un'altra piattaforma",
  av_airbnb_h: 'Una recensione su Airbnb vale oro',
  av_airbnb_p: 'È dove le tue parole fanno la più grande differenza per noi — e ci vuole meno di un minuto.',
  av_airbnb_btn: 'Recensisci su Airbnb',
  av_airbnb_alt: 'Preferisci recensire su Google?',
  av_booking_h: 'Grazie per essere stato con noi',
  av_booking_p: 'Su Booking, la tua recensione arriva via email dopo il check-out. Se vuoi aiutarci ancora di più ora, una recensione su Google fa tutta la differenza.',
  av_booking_btn: 'Recensisci su Google',
  av_booking_alt: 'Hai un account Airbnb? Puoi recensire anche lì',
  av_outra_h: 'La tua recensione ci aiuta tantissimo',
  av_outra_p: 'Una recensione su Google richiede meno di un minuto e aiuta altri viaggiatori a scoprirci.',
  av_outra_btn: 'Recensisci su Google',
  av_back: '← Indietro',
  av_eyebrow3: 'Dicci',
  av_title3: 'Grazie per averci avvisati',
  av_lead3: 'Vogliamo sistemare ora — durante il tuo soggiorno, non dopo. Dicci cosa succede e il nostro team agirà con priorità.',
  av_f_room: 'In quale camera sei alloggiato?',
  av_f_phase: 'In che fase del soggiorno sei?',
  av_phase_select: 'Seleziona…',
  av_phase_arrival: 'Arrivo',
  av_phase_middle: 'A metà soggiorno',
  av_phase_pre: 'Prima del check-out',
  av_phase_post: 'Dopo il check-out',
  av_f_area: 'Cosa possiamo migliorare?',
  av_area_cleaning: 'Pulizia',
  av_area_comfort: 'Comfort della camera',
  av_area_wifi: 'Wi-Fi',
  av_area_bathroom: 'Bagno',
  av_area_kitchen: 'Cucina',
  av_area_noise: 'Rumore',
  av_area_comm: 'Comunicazione',
  av_area_other: 'Altro',
  av_f_detail: 'Diccelo con parole tue',
  av_detail_ph: 'Cosa non è come ti aspettavi? Più ci dici, più velocemente possiamo risolvere.',
  av_f_urgency: "Serve un'azione rapida?",
  av_urg_no: 'No, è solo un suggerimento',
  av_urg_yes: 'Sì, ho bisogno di aiuto oggi',
  av_urgent_p: 'Per qualcosa di urgente, scrivici subito — risponderemo il più velocemente possibile.',
  av_urgent_btn: 'Scrivici ora su WhatsApp',
  av_f_via: 'Modo migliore per contattarti',
  av_via_wa: 'WhatsApp',
  av_via_phone: 'Telefono',
  av_f_contact: 'Nome o numero di contatto',
  av_contact_opt: '(opzionale — ci aiuta a risponderti)',
  av_contact_ph: 'Es.: Maria · +351 9XX XXX XXX',
  av_submit: 'Invia il suggerimento',
  av_form_note: 'Il tuo messaggio arriva direttamente al nostro team. Non è mai reso pubblico.',
  av_thanks_title: 'Abbiamo ricevuto il tuo messaggio',
  av_thanks_lead: 'Agiremo con priorità. Grazie per averci dato la possibilità di migliorare il tuo soggiorno.',
  av_thanks_box_h: 'Quando senti che tutto è come deve essere…',
  av_thanks_box_p: '…ci piacerebbe sentirti. Ma solo quando ti sembrerà il momento giusto — lascia che sistemiamo prima.',
  av_thanks_btn: 'Lascia una recensione',
  av_thanks_back: '← Ricomincia',
  av_alert_areas: "Scegli almeno un'area che possiamo migliorare.",
  av_wa_msg: 'Ciao! Sono ospite al Porto Peace Haven e avrei bisogno di aiuto con qualcosa durante il mio soggiorno.',
  ficha_g_comfort: 'Per il tuo comfort',
  ficha_g_work: 'Per lavorare',
  ficha_g_rest: 'Per riposare',
  ficha_g_light: 'Luce, suono &amp; schermo',
  ficha_g_storage: 'Spazio &amp; dettagli',
  ficha_cta_p: 'Abbiamo preparato questa camera nei minimi dettagli, perché riposassi meglio. Se qualcosa non è come speravi, diccelo ora — preferiamo sistemare durante il tuo soggiorno, non dopo.',
  ficha_cta_suggest: 'Qualcosa qui potrebbe essere migliore?',
  ficha_cta_review: 'Valuta il mio soggiorno ⭐',
  rib_intro: 'Il blu profondo del Douro al crepuscolo. La più ampia delle tre camere — spazio per respirare, e per lavorare senza fretta.',
  rib_comfort: '<li>Un letto con due cuscini — uno più alto, uno più basso — per dormire come ti viene meglio.</li><li>Un ventilatore, e finestre che si aprono ampiamente per arieggiare e rinfrescare la camera (niente aria condizionata, ma Porto entra bene).</li><li>Un mini frigo per ciò che vuoi avere a portata di mano.</li>',
  rib_work: '<li>Una vera sedia da ufficio — non una sedia da sala da pranzo che finge di esserlo.</li><li>Una larga mensola integrata nel muro che fa da scrivania — pensata per lavoro a distanza e soggiorni più lunghi.</li>',
  rib_light: "<li>Due lampade LED RGB e una striscia LED dietro il TV, tutte con telecomando — scegli il colore e l'atmosfera che ti va stasera.</li><li>Un TV con lettore Android: Netflix, HBO Max, Prime Video, Disney+ con i tuoi account — ricordati solo di disconnetterti prima del check-out.</li>",
  rib_storage: '<li>Ampio spazio e un appendiabiti, con molto posto per la valigia.</li><li>Due stampe incorniciate della Ribeira, scelte pensando a questa camera.</li><li>Prese con USB-A e USB-C, e uno specchio a figura intera.</li>',
  dou_intro: "L'oro caldo di un tardo pomeriggio sul Douro. La camera più accogliente — fatta per rallentare e dormire bene.",
  dou_comfort: '<li>Un letto con due cuscini — uno più alto, uno più basso — scegli quello su cui dormi meglio.</li><li>Un ventilatore, e finestre che si aprono per arieggiare e rinfrescare (niente aria condizionata, ma rinfresca bene).</li><li>Un mini frigo per uso personale.</li>',
  dou_rest: "<li>Qui non c'è scrivania, ed è voluto — Douro è la camera per staccare, non per lavorare.</li><li>Luce calda, aria tranquilla e una sfumatura dorata morbida, fatta per la fine della giornata.</li>",
  dou_light: '<li>Due lampade LED RGB e una striscia LED dietro il TV, tutte con telecomando.</li><li>Un TV con lettore Android: Netflix, HBO Max, Prime Video, Disney+ con i tuoi account — per favore disconnettiti prima del check-out.</li>',
  dou_curio: '<strong>Un dettaglio Douro:</strong> la lampada ha tre temperature di luce — ambra, bianca e una miscela delle due. Ogni volta che la accendi, cambia. Provala accendendola e spegnendola qualche volta e tieni quella che ti piace di più.',
  dou_storage: '<li>Una zona di spazio dedicata e un appendiabiti.</li><li>Due stampe incorniciate con il tema della camera, prese con USB-A e USB-C, e uno specchio.</li>',
  atl_intro: "Il blu chiaro dell'oceano in una mattina limpida. Arioso, luminoso e sereno — per svegliarsi senza fretta.",
  atl_comfort: '<li>Un letto con due cuscini — uno più alto, uno più basso — scegli quello che ti viene meglio.</li><li>Un ventilatore, e finestre che si aprono e arieggiano la camera meravigliosamente (niente aria condizionata, ma rinfresca bene).</li><li>Un mini frigo per uso personale.</li>',
  atl_work: '<li>Una sedia da ufficio e un tavolino da lavoro — quanto basta per rispondere a qualche email con una vista tranquilla.</li>',
  atl_light: '<li>Due lampade LED RGB e una striscia LED dietro il TV, tutte con telecomando.</li><li>Un TV con lettore Android: Netflix, HBO Max, Prime Video, Disney+ con i tuoi account — per favore disconnettiti prima del check-out.</li><li><strong>Buono a sapersi:</strong> per cambiare solo il colore della lampada senza interferire con il TV, spegni prima il TV e punta il telecomando LED direttamente verso la lampada.</li>',
  atl_storage: '<li>Un appendiabiti per appendere le tue cose.</li><li>Una stampa incorniciata con il tema della camera, prese con USB-A e USB-C, e uno specchio.</li>',
  nav_porto: 'Scopri Porto',
  porto_title: 'Scopri Porto',
  porto_sub: 'Oltre le cartoline — i luoghi che ci fanno amare vivere qui',
  porto_intro: "Porto non è una città da spuntare da una lista. Premia chi si lascia perdere — chi imbocca la via stretta, chi si siede un po' sui gradini, chi ordina quello che non sa pronunciare. Ecco i posti dove manderemmo un amico: alcuni che tutti conoscono, e altri davanti ai quali la maggior parte dei visitatori passa senza fermarsi.",
  porto_g1_title: 'Porto fuori dai percorsi battuti',
  porto_g2_title: 'I classici, con calma',
  porto_wonder_tag: '🌀 Diverso',
  porto_wonder_h: 'Wondersense — il museo dei cinque sensi',
  porto_wonder_p: "A pochi passi dalla Livraria Lello, cinque piani di stanze fatte per essere assaggiate, ascoltate, toccate e annusate. Sedici esperienze, nessuna uguale all'altra — di quelle ore che fanno dimenticare il telefono agli adulti. Prenota uno slot in anticipo.",
  porto_capela_tag: '🍷 Curioso',
  porto_capela_h: 'Capela Incomum — un bicchiere in una cappella',
  porto_capela_p: "Un piccolo wine bar dentro un'antica cappella — l'altare è ancora lì. Luci basse, un bicchiere tranquillo di rosso del Douro, e la sensazione strana e bella di brindare sotto una volta. Non un posto in cui si entra per caso.",
  porto_virtudes_tag: '🌳 Tramonto',
  porto_virtudes_h: 'Passeio das Virtudes — il tramonto dei locali',
  porto_virtudes_p: "Mentre tutti si accalcano al Jardim do Morro dall'altra parte del fiume, i locali vengono qui: un giardino che scende a terrazze, con il più grande ginkgo del Portogallo e una vista aperta sul Douro. Porta qualcosa da bere e resta per il colore del cielo.",
  porto_guindais_tag: '🌉 Vista',
  porto_guindais_h: 'Escadas dos Guindais — sotto il ponte',
  porto_guindais_p: 'Una scala stretta e ripida che scende lungo la rupe proprio sotto il ponte Dom Luís I. Hai visto il ponte in ogni cartolina — qui sei sotto il suo ventre di ferro, abbastanza vicino da sentirlo. Scendi con calma.',
  porto_almas_tag: '🔵 Azulejos',
  porto_almas_h: 'Capela das Almas — una cappella di mattonelle blu',
  porto_almas_p: "Nella trafficata Rua de Santa Catarina, fermati e alza lo sguardo: sedicimila azulejos blu avvolgono tutto l'esterno di questa cappella come una storia raccontata sul muro. La maggior parte passa accanto andando a fare shopping. Tu no.",
  porto_foto_tag: '📷 Gratis',
  porto_foto_h: 'Centro Português de Fotografia — la vecchia prigione',
  porto_foto_p: 'Un museo della fotografia ospitato in una prigione del XIX secolo — si vedono ancora le porte delle celle e i ballatoi di ferro. Ingresso gratuito, raramente affollato, e silenziosamente uno degli edifici più atmosferici della città.',
  porto_lello_tag: '📚 Classico',
  porto_lello_h: 'Livraria Lello — vai presto',
  porto_lello_p: "Sì, è famosa, e sì, c'è la fila. Vale la pena — ma compra il biglietto con orario online e vai all'apertura o nell'ultima ora, quando la scala intagliata è quasi tutta per te. Il prezzo del biglietto si sconta da un libro.",
  porto_morro_tag: '🌅 Imperdibile',
  porto_morro_h: 'Attraversa il ponte sul piano superiore',
  porto_morro_p: "Cammina sul piano superiore del ponte Dom Luís I — la metro lo condivide, ma c'è spazio, e la vista ti ferma a metà passo. Sul lato di Gaia, il Jardim do Morro è il tramonto da cartolina. Vai — ma vai presto per trovare un posto.",
  porto_rib_tag: '🏛️ Il cuore',
  porto_rib_h: 'Perditi nella Ribeira',
  porto_rib_p: "La parte più antica di Porto, proprio sull'acqua — case storte, panni stesi tra le finestre, vicoli che non portano da nessuna parte e ovunque. Turistica, sì. Resta l'anima della città. Vai al mattino, prima che le barche si riempiano.",
  porto_gaia_tag: '🍷 Assaggiare',
  porto_gaia_h: 'Attraversa a Gaia per una degustazione di Porto',
  porto_gaia_p: 'Le cantine del vino di Porto si allineano sulla sponda di Gaia, dieci minuti a piedi per il ponte. Scegli una delle case più piccole per una degustazione senza fretta — ti spiegheranno la differenza tra un tawny e un ruby, e non la dimenticherai mai.',
  porto_cta_h: 'Hai trovato un angolo che ti è piaciuto?',
  porto_cta_p: 'Se Porto — e il nostro piccolo posto al suo interno — è entrato in un buon ricordo, una recensione aiuta il prossimo viaggiatore a trovare anche lui la strada fino a qui.',
  porto_cta_btn: 'Lascia una recensione ⭐',
  nav_bye: '🧳 Prima di partire',
  bye_title: 'Prima di partire',
  bye_sub: 'Una piccola lista, una piccola richiesta, e un grazie.',
  bye_checklist_h: 'Una piccola lista per la camera',
  bye_checklist: "<li>Chiudi le finestre — la pioggia di Porto si insinua attraverso i vecchi telai.</li><li>Spegni tutte le luci e le lampade LED.</li><li>Aspetta qualche secondo e assicurati che lo scarico si sia fermato.</li><li>Disconnettiti da Netflix, HBO Max, Prime Video e Disney+ sul TV — i tuoi account, la tua privacy.</li><li>Spegni il ventilatore, il TV e il mini frigo se l'hai usato.</li><li>Lascia la chiave come concordato.</li>",
  bye_ask_h: 'Prima di partire',
  bye_ask_p: 'Se siamo entrati a far parte di un bel ricordo del tuo viaggio, la tua recensione significa moltissimo per noi — e aiuta altri viaggiatori a trovare la strada per questo angolino di Porto.',
  bye_review_btn: 'Lascia una recensione ⭐',
  bye_note_link: 'O diccelo prima in privato — cosa avrebbe potuto essere migliore?',
  common_photos: 'I nostri spazi comuni',
  room_photos: 'Foto della camera',
  wa_msg_contact: 'Ciao! Sono ospite al Porto Peace Haven — potreste aiutarmi con qualcosa?',
});

/* ═══════════════════════════════════════════════════════════════
   HOME HUB BUTTONS + KEY SAFE STRINGS — all 6 languages
═══════════════════════════════════════════════════════════════ */
const HUB_KEYS_I18N = {
  en: {
    back_home: '← Home',
    hub_review: 'Leave a Review',
    hub_wifi: 'Wi-Fi',
    hub_checkin: 'Check-in / out',
    hub_room: 'My Room',
    hub_kitchen: 'Kitchen',
    hub_bathroom: 'Bathroom',
    hub_rules: 'House Rules',
    hub_porto: 'Explore Porto',
    hub_bye: 'Before You Leave',
    hub_help: 'Help',
    key_1: 'The entrance key is in the external safe — use the code we sent you with your check-in instructions.',
    key_2: 'Your room key waits for you in the small safe right outside your room door — same code we sent you.',
    key_3: 'Please return both keys to their safes on departure.',
  },
  pt: {
    back_home: '← Início',
    hub_review: 'Deixar avaliação',
    hub_wifi: 'Wi-Fi',
    hub_checkin: 'Check-in / out',
    hub_room: 'O meu quarto',
    hub_kitchen: 'Cozinha',
    hub_bathroom: 'Casa de banho',
    hub_rules: 'Regras',
    hub_porto: 'Conhecer o Porto',
    hub_bye: 'Antes de partir',
    hub_help: 'Ajuda',
    key_1: 'A chave da entrada está no cofre externo — use o código que enviámos com as instruções de check-in.',
    key_2: 'A chave do seu quarto espera por si no pequeno cofre mesmo à porta do quarto — mesmo código.',
    key_3: 'Por favor, devolva ambas as chaves aos cofres no check-out.',
  },
  fr: {
    back_home: '← Accueil',
    hub_review: 'Laisser un avis',
    hub_wifi: 'Wi-Fi',
    hub_checkin: 'Check-in / out',
    hub_room: 'Ma chambre',
    hub_kitchen: 'Cuisine',
    hub_bathroom: 'Salle de bain',
    hub_rules: 'Règles',
    hub_porto: 'Découvrir Porto',
    hub_bye: 'Avant de partir',
    hub_help: 'Aide',
    key_1: "La clé de l'entrée est dans le coffre extérieur — utilisez le code que nous vous avons envoyé avec les instructions d'arrivée.",
    key_2: 'La clé de votre chambre vous attend dans le petit coffre juste à la porte de votre chambre — même code.',
    key_3: 'Veuillez remettre les deux clés dans leurs coffres au départ.',
  },
  es: {
    back_home: '← Inicio',
    hub_review: 'Dejar reseña',
    hub_wifi: 'Wi-Fi',
    hub_checkin: 'Check-in / out',
    hub_room: 'Mi habitación',
    hub_kitchen: 'Cocina',
    hub_bathroom: 'Baño',
    hub_rules: 'Normas',
    hub_porto: 'Descubrir Oporto',
    hub_bye: 'Antes de irte',
    hub_help: 'Ayuda',
    key_1: 'La llave de la entrada está en la caja fuerte exterior — usa el código que te enviamos con las instrucciones de check-in.',
    key_2: 'La llave de tu habitación te espera en la pequeña caja fuerte justo en la puerta de tu habitación — mismo código.',
    key_3: 'Por favor, devuelve ambas llaves a las cajas fuertes al hacer check-out.',
  },
  de: {
    back_home: '← Start',
    hub_review: 'Bewertung abgeben',
    hub_wifi: 'WLAN',
    hub_checkin: 'Check-in / out',
    hub_room: 'Mein Zimmer',
    hub_kitchen: 'Küche',
    hub_bathroom: 'Bad',
    hub_rules: 'Hausregeln',
    hub_porto: 'Porto entdecken',
    hub_bye: 'Vor der Abreise',
    hub_help: 'Hilfe',
    key_1: 'Der Eingangsschlüssel liegt im externen Safe — verwenden Sie den Code, den wir Ihnen mit den Check-in-Anweisungen geschickt haben.',
    key_2: 'Ihr Zimmerschlüssel wartet im kleinen Safe direkt vor Ihrer Zimmertür auf Sie — derselbe Code.',
    key_3: 'Bitte legen Sie beide Schlüssel beim Auschecken in die Safes zurück.',
  },
  it: {
    back_home: '← Inizio',
    hub_review: 'Lascia recensione',
    hub_wifi: 'Wi-Fi',
    hub_checkin: 'Check-in / out',
    hub_room: 'La mia camera',
    hub_kitchen: 'Cucina',
    hub_bathroom: 'Bagno',
    hub_rules: 'Regole',
    hub_porto: 'Scoprire Porto',
    hub_bye: 'Prima di partire',
    hub_help: 'Aiuto',
    key_1: "La chiave dell'ingresso è nella cassaforte esterna — usa il codice che ti abbiamo inviato con le istruzioni di check-in.",
    key_2: 'La chiave della tua camera ti aspetta nella piccola cassaforte proprio fuori dalla porta della camera — stesso codice.',
    key_3: 'Per favore, riponi entrambe le chiavi nelle casseforti al check-out.',
  },
};
Object.keys(HUB_KEYS_I18N).forEach(function (l) {
  Object.assign(translations[l], HUB_KEYS_I18N[l]);
});

/* ═══════════════════════════════════════════════════════════════
   APP SHELL — screen routing (single-file SPA)
   Each top-level <section.screen> is a "page". Only one is visible
   at a time; navigating via hash (e.g. #kitchen) swaps the active
   screen. Bottom-nav and home-hub buttons go through the same
   router. Deep links like #ribeira open the rooms screen and
   scroll to that sub-element.
═══════════════════════════════════════════════════════════════ */
(function () {
  const SCREENS = ['home','rooms','essential-info','checkin','guide','kitchen','bathroom','rules','transport','nearby','porto','place','mapa','checkout','avaliar','emergency'];

  function setActiveTab(screenId) {
    document.querySelectorAll('.bnav-item').forEach(function (it) {
      it.classList.toggle('active', it.dataset.section === screenId);
    });
  }

  function showScreen(screenId, scrollTargetId) {
    if (!SCREENS.includes(screenId)) screenId = 'home';
    document.querySelectorAll('.screen').forEach(function (s) {
      s.classList.toggle('active', s.id === screenId);
    });
    setActiveTab(screenId);
    closeNav && closeNav();
    if (scrollTargetId) {
      // Wait a tick so the screen is in flow before measuring offset.
      setTimeout(function () {
        const sub = document.getElementById(scrollTargetId);
        if (sub) sub.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      }, 30);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function routeFromHash() {
    const raw = location.hash.replace(/^#/, '');
    if (!raw) { showScreen('home'); return; }
    // Place detail pages: #place-<id> renders the shared #place screen.
    if (raw.indexOf('place-') === 0) {
      const ok = window.__pphRenderPlace && window.__pphRenderPlace(raw.slice(6));
      showScreen(ok ? 'place' : 'porto');
      return;
    }
    if (SCREENS.includes(raw)) { showScreen(raw); return; }
    // Sub-id: find element, route to its parent screen, scroll to it.
    const el = document.getElementById(raw);
    if (el) {
      const parent = el.closest('.screen');
      if (parent) { showScreen(parent.id, raw); return; }
    }
    showScreen('home');
  }

  // Intercept in-page hash links so the router takes over (smooth, no jump).
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    // Skip anchors that explicitly say target=_blank or have other protocols.
    if (a.target === '_blank') return;
    e.preventDefault();
    if (location.hash === href) {
      // same hash — manual route (hashchange would not fire)
      routeFromHash();
    } else {
      location.hash = href;
    }
  });

  window.addEventListener('hashchange', routeFromHash);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', routeFromHash);
  } else {
    routeFromHash();
  }
})();

/* ═══════════════════════════════════════════════════════════════
   SEE MORE / SEE LESS — collapsible grids
═══════════════════════════════════════════════════════════════ */
const SEE_I18N = {
  en: { see_more: 'See more', see_less: 'See less' },
  pt: { see_more: 'Ver mais', see_less: 'Ver menos' },
  fr: { see_more: 'Voir plus', see_less: 'Voir moins' },
  es: { see_more: 'Ver más',  see_less: 'Ver menos' },
  de: { see_more: 'Mehr anzeigen', see_less: 'Weniger anzeigen' },
  it: { see_more: 'Vedi altro', see_less: 'Vedi meno' },
};
Object.keys(SEE_I18N).forEach(function (l) {
  Object.assign(translations[l], SEE_I18N[l]);
});

(function () {
  function build() {
    document.querySelectorAll('.collapsible').forEach(function (grid) {
      if (grid.nextElementSibling && grid.nextElementSibling.classList.contains('see-more-btn')) return;
      const hidden = grid.querySelectorAll('.item-hidden');
      if (!hidden.length) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'see-more-btn';
      const label = document.createElement('span');
      label.setAttribute('data-i18n', 'see_more');
      const count = document.createElement('span');
      count.className = 'count';
      count.textContent = '(' + hidden.length + ')';
      btn.appendChild(label);
      btn.appendChild(document.createTextNode(' '));
      btn.appendChild(count);

      function refreshLabel() {
        const key = grid.classList.contains('expanded') ? 'see_less' : 'see_more';
        label.setAttribute('data-i18n', key);
        label.textContent = (translations[currentLang] && translations[currentLang][key]) ||
          (key === 'see_less' ? 'See less' : 'See more');
        count.style.display = grid.classList.contains('expanded') ? 'none' : '';
      }

      btn.addEventListener('click', function () {
        grid.classList.toggle('expanded');
        refreshLabel();
      });

      grid.parentNode.insertBefore(btn, grid.nextSibling);
      refreshLabel();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

/* ═══════════════════════════════════════════════════════════════
   HOME FEED — copy for the new condensed home blocks
═══════════════════════════════════════════════════════════════ */
const HOME_FEED_I18N = {
  en: {
    home_review_h: 'Enjoying your stay?',
    home_review_p: 'Your review means the world to us — and it only takes a minute.',
    home_review_btn: 'Leave a Review →',
    home_review2_h: 'One last thing',
    home_review2_p: 'If we made your trip a little better, a review helps the next traveller find us. Thank you.',
    entry_checkin_h: 'Check-in &amp; Check-out',
    entry_checkin_p: 'Check-in from 16:00 · Check-out by 11:00. Keys in external safes.',
    entry_kitchen_h: 'Kitchen Guide',
    entry_kitchen_p: 'Everything you need to cook safely and use the shared kitchen.',
    entry_bathroom_h: 'Bathroom Guide',
    entry_bathroom_p: 'How to use the shared bathroom, the hair dryer and the universal adapter.',
    entry_rules_h: 'House Rules',
    entry_rules_p: 'Quiet hours, no smoking, and the small respect we owe the building.',
    entry_bye_h: 'Before You Leave',
    entry_bye_p: 'A small checklist for the room and a quiet moment to say thanks.',
    see_all_porto: 'See all 14 places →',
    home_help_h: 'Need help?',
    home_help_p: 'We are one tap away. For real emergencies, dial 112.',
    home_help_more: 'All emergency info →',
  },
  pt: {
    home_review_h: 'A gostar da estadia?',
    home_review_p: 'A sua avaliação significa muito para nós — e leva menos de um minuto.',
    home_review_btn: 'Avaliar →',
    home_review2_h: 'Uma última coisa',
    home_review2_p: 'Se fizemos a sua viagem um pouco melhor, uma avaliação ajuda o próximo viajante a encontrar-nos. Obrigado.',
    entry_checkin_h: 'Check-in &amp; Check-out',
    entry_checkin_p: 'Check-in a partir das 16:00 · Check-out até às 11:00. Chaves nos cofres externos.',
    entry_kitchen_h: 'Guia da Cozinha',
    entry_kitchen_p: 'Tudo o que precisa para cozinhar em segurança e usar a cozinha partilhada.',
    entry_bathroom_h: 'Guia da Casa de Banho',
    entry_bathroom_p: 'Como usar a casa de banho partilhada, o secador e o adaptador universal.',
    entry_rules_h: 'Regras da Casa',
    entry_rules_p: 'Horas de silêncio, sem fumar, e o pequeno respeito que devemos ao prédio.',
    entry_bye_h: 'Antes de Partir',
    entry_bye_p: 'Uma pequena lista para o quarto e um momento tranquilo para agradecer.',
    see_all_porto: 'Ver os 14 lugares →',
    home_help_h: 'Precisa de ajuda?',
    home_help_p: 'Estamos a um toque de distância. Para emergências reais, ligue 112.',
    home_help_more: 'Toda a info de emergência →',
  },
  fr: {
    home_review_h: 'Vous appréciez votre séjour ?',
    home_review_p: "Votre avis compte énormément pour nous — et cela ne prend qu'une minute.",
    home_review_btn: 'Laisser un avis →',
    home_review2_h: 'Une dernière chose',
    home_review2_p: 'Si nous avons rendu votre voyage un peu meilleur, un avis aide le prochain voyageur à nous trouver. Merci.',
    entry_checkin_h: 'Arrivée &amp; Départ',
    entry_checkin_p: 'Arrivée à partir de 16h00 · Départ avant 11h00. Clés dans les coffres extérieurs.',
    entry_kitchen_h: 'Guide de la cuisine',
    entry_kitchen_p: "Tout ce qu'il vous faut pour cuisiner en toute sécurité et utiliser la cuisine partagée.",
    entry_bathroom_h: 'Guide de la salle de bain',
    entry_bathroom_p: "Comment utiliser la salle de bain partagée, le sèche-cheveux et l'adaptateur universel.",
    entry_rules_h: 'Règles de la maison',
    entry_rules_p: "Heures calmes, non-fumeur, et le petit respect dû à l'immeuble.",
    entry_bye_h: 'Avant de partir',
    entry_bye_p: 'Une petite liste pour la chambre et un moment tranquille pour dire merci.',
    see_all_porto: 'Voir les 14 lieux →',
    home_help_h: "Besoin d'aide ?",
    home_help_p: 'Nous sommes à un appui de distance. Pour de vraies urgences, composez le 112.',
    home_help_more: "Toutes les infos d'urgence →",
  },
  es: {
    home_review_h: '¿Disfrutas tu estancia?',
    home_review_p: 'Tu reseña significa muchísimo para nosotros — y solo lleva un minuto.',
    home_review_btn: 'Dejar reseña →',
    home_review2_h: 'Una última cosa',
    home_review2_p: 'Si hicimos tu viaje un poco mejor, una reseña ayuda al próximo viajero a encontrarnos. Gracias.',
    entry_checkin_h: 'Check-in &amp; Check-out',
    entry_checkin_p: 'Check-in desde las 16:00 · Check-out hasta las 11:00. Llaves en cajas fuertes exteriores.',
    entry_kitchen_h: 'Guía de la cocina',
    entry_kitchen_p: 'Todo lo que necesitas para cocinar con seguridad y usar la cocina compartida.',
    entry_bathroom_h: 'Guía del baño',
    entry_bathroom_p: 'Cómo usar el baño compartido, el secador y el adaptador universal.',
    entry_rules_h: 'Normas de la casa',
    entry_rules_p: 'Horas de silencio, prohibido fumar, y el pequeño respeto que debemos al edificio.',
    entry_bye_h: 'Antes de irte',
    entry_bye_p: 'Una pequeña lista para la habitación y un momento tranquilo para agradecer.',
    see_all_porto: 'Ver los 14 lugares →',
    home_help_h: '¿Necesitas ayuda?',
    home_help_p: 'Estamos a un toque. Para emergencias reales, llama al 112.',
    home_help_more: 'Toda la información de emergencia →',
  },
  de: {
    home_review_h: 'Genießen Sie Ihren Aufenthalt?',
    home_review_p: 'Ihre Bewertung bedeutet uns die Welt — und dauert nur eine Minute.',
    home_review_btn: 'Bewertung abgeben →',
    home_review2_h: 'Eine letzte Sache',
    home_review2_p: 'Wenn wir Ihre Reise ein wenig schöner gemacht haben, hilft eine Bewertung dem nächsten Reisenden, uns zu finden. Danke.',
    entry_checkin_h: 'Check-in &amp; Check-out',
    entry_checkin_p: 'Check-in ab 16:00 · Check-out bis 11:00. Schlüssel in externen Safes.',
    entry_kitchen_h: 'Küchen-Anleitung',
    entry_kitchen_p: 'Alles, was Sie zum sicheren Kochen und für die gemeinsame Küche brauchen.',
    entry_bathroom_h: 'Bad-Anleitung',
    entry_bathroom_p: 'Wie Sie das gemeinsame Bad, den Föhn und den Universaladapter benutzen.',
    entry_rules_h: 'Hausregeln',
    entry_rules_p: 'Ruhezeiten, Nichtraucher und der kleine Respekt, den wir dem Gebäude schulden.',
    entry_bye_h: 'Vor der Abreise',
    entry_bye_p: 'Eine kleine Liste für das Zimmer und ein ruhiger Moment zum Danken.',
    see_all_porto: 'Alle 14 Orte ansehen →',
    home_help_h: 'Brauchen Sie Hilfe?',
    home_help_p: 'Wir sind einen Tipper entfernt. Im Notfall wählen Sie 112.',
    home_help_more: 'Alle Notfall-Infos →',
  },
  it: {
    home_review_h: 'Ti sta piacendo il soggiorno?',
    home_review_p: 'La tua recensione significa moltissimo per noi — e basta un minuto.',
    home_review_btn: 'Lascia una recensione →',
    home_review2_h: "Un'ultima cosa",
    home_review2_p: "Se abbiamo reso il tuo viaggio un po' migliore, una recensione aiuta il prossimo viaggiatore a trovarci. Grazie.",
    entry_checkin_h: 'Check-in &amp; Check-out',
    entry_checkin_p: 'Check-in dalle 16:00 · Check-out entro le 11:00. Chiavi nelle casseforti esterne.',
    entry_kitchen_h: 'Guida della cucina',
    entry_kitchen_p: 'Tutto ciò che ti serve per cucinare in sicurezza e usare la cucina condivisa.',
    entry_bathroom_h: 'Guida del bagno',
    entry_bathroom_p: "Come usare il bagno condiviso, il phon e l'adattatore universale.",
    entry_rules_h: 'Regole della casa',
    entry_rules_p: "Orari di silenzio, vietato fumare, e il piccolo rispetto dovuto all'edificio.",
    entry_bye_h: 'Prima di partire',
    entry_bye_p: 'Una piccola lista per la camera e un momento tranquillo per ringraziare.',
    see_all_porto: 'Vedi tutti i 14 posti →',
    home_help_h: 'Hai bisogno di aiuto?',
    home_help_p: 'Siamo a un tocco. Per emergenze reali, chiama il 112.',
    home_help_more: 'Tutte le info di emergenza →',
  },
};
Object.keys(HOME_FEED_I18N).forEach(function (l) {
  Object.assign(translations[l], HOME_FEED_I18N[l]);
});

/* ── FREE price label + map preview title ── */
const FREE_MAP_I18N = {
  en: { ppx_free: 'FREE', home_map_h: 'Explore Porto on the map' },
  pt: { ppx_free: 'GRÁTIS', home_map_h: 'Explore o Porto no mapa' },
  fr: { ppx_free: 'GRATUIT', home_map_h: 'Explorez Porto sur la carte' },
  es: { ppx_free: 'GRATIS', home_map_h: 'Explora Oporto en el mapa' },
  de: { ppx_free: 'GRATIS', home_map_h: 'Porto auf der Karte entdecken' },
  it: { ppx_free: 'GRATIS', home_map_h: 'Esplora Porto sulla mappa' },
};
Object.keys(FREE_MAP_I18N).forEach(function (l) {
  Object.assign(translations[l], FREE_MAP_I18N[l]);
});

/* "Which room are you in?" for the per-room Airbnb picker */
const AV_ROOM_PICK_I18N = {
  en: 'Which room are you in?',
  pt: 'Em que quarto está?',
  fr: 'Dans quelle chambre êtes-vous ?',
  es: '¿En qué habitación estás?',
  de: 'In welchem Zimmer wohnen Sie?',
  it: 'In quale camera sei?',
};
Object.keys(AV_ROOM_PICK_I18N).forEach(function (l) {
  translations[l].av_which_room = AV_ROOM_PICK_I18N[l];
});

/* Checkout flow — "Notify host" copy + pre-filled WhatsApp message */
const CO_NOTIFY_I18N = {
  en: {
    co_notify_h: "Let us know you're heading out",
    co_notify_p: 'A quick message so we know the room is ready to be turned around — and so we can wish you a great trip back.',
    co_notify_btn: '📩 Notify by WhatsApp',
    co_wa_msg: "Hello! I'm checking out of room {room} now. Everything is in place. Thank you for the stay 💛",
  },
  pt: {
    co_notify_h: 'Diga-nos que vai a caminho',
    co_notify_p: 'Uma mensagem rápida para sabermos que o quarto está pronto a ser preparado — e para lhe desejarmos uma boa viagem de volta.',
    co_notify_btn: '📩 Avisar por WhatsApp',
    co_wa_msg: 'Olá! Estou a fazer checkout do quarto {room}. Está tudo no sítio. Obrigado pela hospedagem 💛',
  },
  fr: {
    co_notify_h: 'Dites-nous que vous partez',
    co_notify_p: "Un petit message pour qu'on sache que la chambre est prête à être préparée — et pour vous souhaiter un bon retour.",
    co_notify_btn: '📩 Prévenir par WhatsApp',
    co_wa_msg: 'Bonjour ! Je libère la chambre {room} maintenant. Tout est en ordre. Merci pour le séjour 💛',
  },
  es: {
    co_notify_h: 'Avísanos que ya te vas',
    co_notify_p: 'Un mensaje rápido para que sepamos que la habitación está lista para ser preparada — y para desearte buen viaje de vuelta.',
    co_notify_btn: '📩 Avisar por WhatsApp',
    co_wa_msg: '¡Hola! Estoy haciendo check-out de la habitación {room}. Todo está en su sitio. Gracias por la estancia 💛',
  },
  de: {
    co_notify_h: 'Sagen Sie uns Bescheid, dass Sie gehen',
    co_notify_p: 'Eine kurze Nachricht, damit wir wissen, dass das Zimmer für die Vorbereitung bereit ist — und damit wir Ihnen eine gute Rückreise wünschen können.',
    co_notify_btn: '📩 Per WhatsApp benachrichtigen',
    co_wa_msg: 'Hallo! Ich checke jetzt aus Zimmer {room} aus. Alles ist an seinem Platz. Danke für den Aufenthalt 💛',
  },
  it: {
    co_notify_h: 'Facci sapere che stai uscendo',
    co_notify_p: 'Un messaggio rapido per sapere che la camera è pronta per essere preparata — e per augurarti un buon viaggio di ritorno.',
    co_notify_btn: '📩 Avvisa via WhatsApp',
    co_wa_msg: 'Ciao! Sto facendo il check-out dalla camera {room}. È tutto a posto. Grazie per il soggiorno 💛',
  },
};
Object.keys(CO_NOTIFY_I18N).forEach(function (l) {
  Object.assign(translations[l], CO_NOTIFY_I18N[l]);
});

/* Wire the "Notify by WhatsApp" link with the localised message
   and the current room substituted, refreshed on language change. */
(function () {
  const PHONE = '351913874921';
  const ROOM_LABELS = { ribeira: 'Ribeira', douro: 'Douro', atlantico: 'Atlântico' };
  function refreshCheckoutWa() {
    const a = document.getElementById('co-wa-notify');
    if (!a) return;
    let room = '';
    try { room = localStorage.getItem('pph-room') || ''; } catch (e) {}
    const roomLabel = ROOM_LABELS[room] || '—';
    const tmpl = (translations[currentLang] && translations[currentLang].co_wa_msg) ||
      "Hello! I'm checking out of room {room} now. Everything is in place. Thank you 💛";
    const msg = tmpl.replace('{room}', roomLabel);
    a.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
  }
  const _apply = applyLanguage;
  applyLanguage = function (lang) {
    _apply(lang);
    refreshCheckoutWa();
  };
  refreshCheckoutWa();
})();

/* Deep-link support: ?checkout=1 (or ?phase=checkout) goes straight
   to the checkout screen. Lets a printed plasticised-sheet QR encode
   site.com/?checkout=1 and land the guest one tap from notify+review. */
(function () {
  const p = new URLSearchParams(location.search);
  if (p.get('checkout') === '1' || p.get('phase') === 'checkout') {
    if (location.hash !== '#checkout') location.hash = '#checkout';
  }
})();

/* ═══════════════════════════════════════════════════════════════
   PHASE AWARENESS — banner + welcome modal
   Detects which moment of the stay the guest is in (check-in /
   mid-stay / checkout) via URL param ?phase=X, stored answer,
   or a discreet banner on the home. Acts on the answer.
═══════════════════════════════════════════════════════════════ */
const PHASE_I18N = {
  en: {
    phase_q: 'Where are you in your stay?',
    phase_checkin: 'Just arrived',
    phase_mid: 'Mid stay',
    phase_checkout: 'Checking out',
    welcome_h: 'Welcome to Porto Peace Haven',
    welcome_p: 'A quick tour of what you can do here:',
    welcome_rules_h: 'House rules',
    welcome_rules_p: 'A 30-second read — keeps everyone happy in the building.',
    welcome_porto_h: 'Discover Porto',
    welcome_porto_p: 'Curated places off the tourist track + classics worth your time.',
    welcome_go: 'Got it — explore the guide →',
  },
  pt: {
    phase_q: 'Em que momento da estadia está?',
    phase_checkin: 'Acabei de chegar',
    phase_mid: 'A meio',
    phase_checkout: 'A fazer checkout',
    welcome_h: 'Bem-vindo ao Porto Peace Haven',
    welcome_p: 'Uma volta rápida pelo que pode fazer aqui:',
    welcome_rules_h: 'Regras da casa',
    welcome_rules_p: 'Leitura de 30 segundos — mantém toda a gente feliz no prédio.',
    welcome_porto_h: 'Descobrir o Porto',
    welcome_porto_p: 'Lugares com curadoria, fora do roteiro turístico, e os clássicos que valem o tempo.',
    welcome_go: 'Entendido — explorar o guia →',
  },
  fr: {
    phase_q: 'Où en êtes-vous dans votre séjour ?',
    phase_checkin: "Je viens d'arriver",
    phase_mid: 'Au milieu',
    phase_checkout: 'Je pars',
    welcome_h: 'Bienvenue à Porto Peace Haven',
    welcome_p: 'Un petit tour de ce que vous pouvez faire ici :',
    welcome_rules_h: 'Règles de la maison',
    welcome_rules_p: '30 secondes de lecture — tout le monde reste content dans l\'immeuble.',
    welcome_porto_h: 'Découvrir Porto',
    welcome_porto_p: 'Lieux choisis hors des sentiers battus + les classiques qui valent votre temps.',
    welcome_go: 'Compris — explorer le guide →',
  },
  es: {
    phase_q: '¿En qué momento de tu estancia estás?',
    phase_checkin: 'Acabo de llegar',
    phase_mid: 'A mitad',
    phase_checkout: 'Haciendo check-out',
    welcome_h: 'Bienvenido a Porto Peace Haven',
    welcome_p: 'Un repaso rápido de lo que puedes hacer aquí:',
    welcome_rules_h: 'Normas de la casa',
    welcome_rules_p: 'Lectura de 30 segundos — todos contentos en el edificio.',
    welcome_porto_h: 'Descubrir Oporto',
    welcome_porto_p: 'Lugares con curaduría, fuera de la ruta turística, y los clásicos que valen tu tiempo.',
    welcome_go: 'Entendido — explorar la guía →',
  },
  de: {
    phase_q: 'Wo sind Sie gerade in Ihrem Aufenthalt?',
    phase_checkin: 'Gerade angekommen',
    phase_mid: 'Mittendrin',
    phase_checkout: 'Beim Auschecken',
    welcome_h: 'Willkommen im Porto Peace Haven',
    welcome_p: 'Eine kurze Tour, was Sie hier tun können:',
    welcome_rules_h: 'Hausregeln',
    welcome_rules_p: '30 Sekunden Lesen — alle bleiben im Gebäude zufrieden.',
    welcome_porto_h: 'Porto entdecken',
    welcome_porto_p: 'Ausgewählte Orte abseits der Touristenpfade + Klassiker, die Ihre Zeit wert sind.',
    welcome_go: 'Verstanden — die Anleitung entdecken →',
  },
  it: {
    phase_q: 'In che momento del soggiorno sei?',
    phase_checkin: 'Sono appena arrivato',
    phase_mid: 'A metà',
    phase_checkout: 'Sto facendo il check-out',
    welcome_h: 'Benvenuto al Porto Peace Haven',
    welcome_p: 'Un giro veloce di cosa puoi fare qui:',
    welcome_rules_h: 'Regole della casa',
    welcome_rules_p: '30 secondi di lettura — tutti contenti nel palazzo.',
    welcome_porto_h: 'Scoprire Porto',
    welcome_porto_p: 'Luoghi curati fuori dal circuito turistico + i classici che valgono il tuo tempo.',
    welcome_go: 'Capito — esplorare la guida →',
  },
};
Object.keys(PHASE_I18N).forEach(function (l) {
  Object.assign(translations[l], PHASE_I18N[l]);
});

(function () {
  const VALID = ['checkin', 'mid', 'checkout'];
  const DAY = 24 * 3600 * 1000;
  const WELCOME_COOLDOWN = 8 * 3600 * 1000;

  function getPhase() {
    try {
      const raw = localStorage.getItem('pph-phase');
      if (!raw) return null;
      const o = JSON.parse(raw);
      if (Date.now() - o.ts > DAY) return null;
      return o.phase;
    } catch (e) { return null; }
  }
  function setPhase(p) {
    try { localStorage.setItem('pph-phase', JSON.stringify({ phase: p, ts: Date.now() })); } catch (e) {}
  }
  function bannerDismissedRecently() {
    try {
      const t = parseInt(localStorage.getItem('pph-phase-dismissed') || '0', 10);
      return (Date.now() - t) < DAY;
    } catch (e) { return false; }
  }
  function dismissBanner24h() {
    try { localStorage.setItem('pph-phase-dismissed', String(Date.now())); } catch (e) {}
  }
  function bumpVisits() {
    try {
      const n = parseInt(localStorage.getItem('pph-visits') || '0', 10) + 1;
      localStorage.setItem('pph-visits', String(n));
      return n;
    } catch (e) { return 1; }
  }

  const phaseModal = document.getElementById('phase-modal');
  const modal = document.getElementById('welcome-modal');

  function showPhaseModal() {
    if (!phaseModal) return;
    phaseModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function hidePhaseModal() {
    if (!phaseModal) return;
    phaseModal.hidden = true;
    document.body.style.overflow = '';
  }
  function showWelcome() {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function hideWelcome() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  function applyPhase(phase) {
    if (phase === 'checkin') {
      try {
        const last = parseInt(localStorage.getItem('pph-welcome-shown') || '0', 10);
        if (Date.now() - last > WELCOME_COOLDOWN) {
          showWelcome();
          localStorage.setItem('pph-welcome-shown', String(Date.now()));
        }
      } catch (e) { showWelcome(); }
    } else if (phase === 'checkout') {
      if (location.hash !== '#checkout') location.hash = '#checkout';
    }
    // mid: silent
  }

  // Phase modal — button clicks
  document.querySelectorAll('[data-phase]').forEach(function (b) {
    b.addEventListener('click', function () {
      const phase = b.dataset.phase;
      if (VALID.indexOf(phase) < 0) return;
      setPhase(phase);
      hidePhaseModal();
      applyPhase(phase);
    });
  });

  // Phase modal — close (dismiss for 24h)
  const pmClose = document.getElementById('pm-close');
  if (pmClose) pmClose.addEventListener('click', function () {
    hidePhaseModal();
    dismissBanner24h();
  });
  if (phaseModal) phaseModal.addEventListener('click', function (e) {
    if (e.target === phaseModal) {
      hidePhaseModal();
      dismissBanner24h();
    }
  });

  // Welcome modal — close + auto-close on inner navigation links
  const wmClose = document.getElementById('wm-close');
  const wmGo = document.getElementById('wm-go');
  if (wmClose) wmClose.addEventListener('click', hideWelcome);
  if (wmGo) wmGo.addEventListener('click', hideWelcome);
  ['wm-rules', 'wm-porto'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', hideWelcome);
  });
  if (modal) modal.addEventListener('click', function (e) {
    if (e.target === modal) hideWelcome();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal && !modal.hidden) hideWelcome();
      if (phaseModal && !phaseModal.hidden) hidePhaseModal();
    }
  });

  // INIT
  function init() {
    const visits = bumpVisits();

    // URL param wins
    const p = new URLSearchParams(location.search);
    const urlPhase = p.get('phase');
    if (urlPhase && VALID.indexOf(urlPhase) >= 0) {
      setPhase(urlPhase);
      applyPhase(urlPhase);
      return;
    }

    // Stored phase: respect it but don't re-trigger applyPhase
    const stored = getPhase();
    if (stored) return;

    // Phase modal: appears after 5s on first visit, 1.5s from 2nd visit on
    if (bannerDismissedRecently()) return;
    const delay = visits >= 2 ? 1500 : 5000;
    setTimeout(showPhaseModal, delay);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ═══════════════════════════════════════════════════════════════
   FLOATING ACTION BUTTON — Review · Suggestion · Urgent help
═══════════════════════════════════════════════════════════════ */
const FAB_I18N = {
  en: { fab_review: 'Leave a review', fab_suggest: 'Send a suggestion', fab_help: 'Urgent help on WhatsApp', fab_send: 'Send', fab_thanks: 'Got it — thank you.', fab_ph: 'Quick note about your stay…' },
  pt: { fab_review: 'Deixar avaliação', fab_suggest: 'Enviar sugestão', fab_help: 'Ajuda urgente no WhatsApp', fab_send: 'Enviar', fab_thanks: 'Recebido — obrigado.', fab_ph: 'Uma nota rápida sobre a sua estadia…' },
  fr: { fab_review: 'Laisser un avis', fab_suggest: 'Envoyer une suggestion', fab_help: 'Aide urgente sur WhatsApp', fab_send: 'Envoyer', fab_thanks: 'Bien reçu — merci.', fab_ph: 'Une note rapide sur votre séjour…' },
  es: { fab_review: 'Dejar reseña', fab_suggest: 'Enviar sugerencia', fab_help: 'Ayuda urgente por WhatsApp', fab_send: 'Enviar', fab_thanks: 'Recibido — gracias.', fab_ph: 'Una nota rápida sobre tu estancia…' },
  de: { fab_review: 'Bewertung abgeben', fab_suggest: 'Vorschlag senden', fab_help: 'Dringende Hilfe per WhatsApp', fab_send: 'Senden', fab_thanks: 'Erhalten — danke.', fab_ph: 'Eine kurze Notiz zu Ihrem Aufenthalt…' },
  it: { fab_review: 'Lascia una recensione', fab_suggest: 'Invia un suggerimento', fab_help: 'Aiuto urgente su WhatsApp', fab_send: 'Invia', fab_thanks: 'Ricevuto — grazie.', fab_ph: 'Una nota veloce sul tuo soggiorno…' },
};
Object.keys(FAB_I18N).forEach(function (l) {
  Object.assign(translations[l], FAB_I18N[l]);
});

(function () {
  const toggle = document.getElementById('fab-toggle');
  const panel = document.getElementById('fab-panel');
  const wrap = document.querySelector('.fab-wrap');
  if (!toggle || !panel || !wrap) return;

  const form = document.getElementById('fab-form');
  const thanks = document.getElementById('fab-thanks');

  function openPanel() {
    panel.hidden = false;
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closePanel() {
    panel.hidden = true;
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if (form) form.hidden = true;
    if (thanks) thanks.hidden = true;
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (panel.hidden) openPanel(); else closePanel();
  });
  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target) && !panel.hidden) closePanel();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });

  /* Review → Avaliar screen */
  const review = document.getElementById('fab-review');
  if (review) review.addEventListener('click', function () {
    location.hash = '#avaliar';
    closePanel();
  });

  /* Urgent help → WhatsApp with localised message + room context */
  const help = document.getElementById('fab-help');
  if (help) help.addEventListener('click', function () {
    const ROOM_LABELS = { ribeira: 'Ribeira', douro: 'Douro', atlantico: 'Atlântico' };
    let room = '';
    try { room = localStorage.getItem('pph-room') || ''; } catch (e) {}
    let msg = (translations[currentLang] && translations[currentLang].wa_msg_contact) ||
      "Hello! I'm staying at Porto Peace Haven and I need help.";
    if (ROOM_LABELS[room]) msg += ' (' + ROOM_LABELS[room] + ')';
    window.open('https://wa.me/351913874921?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    closePanel();
  });

  /* Suggestion → reveal the inline mini-form */
  const suggest = document.getElementById('fab-suggest');
  if (suggest && form) {
    suggest.addEventListener('click', function () {
      form.hidden = false;
      if (thanks) thanks.hidden = true;
      try {
        const rEl = document.getElementById('fab-room-h');
        if (rEl) rEl.value = localStorage.getItem('pph-room') || '';
      } catch (e) {}
      const pEl = document.getElementById('fab-page-h');
      if (pEl) pEl.value = (location.hash.replace('#', '') || 'home');
      const lEl = document.getElementById('fab-lang-h');
      if (lEl) lEl.value = currentLang;
      const msgEl = document.getElementById('fab-msg');
      if (msgEl) msgEl.focus();
    });
  }

  /* Mini-form submit → Netlify Forms (sugestoes-rapidas) */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msgEl = document.getElementById('fab-msg');
      if (!msgEl || !msgEl.value.trim()) return;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(showThanks)
        .catch(showThanks);
    });
  }
  function showThanks() {
    if (form) { form.hidden = true; form.reset(); }
    if (thanks) thanks.hidden = false;
    setTimeout(closePanel, 2800);
  }

  /* Localised placeholder for the mini-form textarea */
  function refreshFabPh() {
    const msgEl = document.getElementById('fab-msg');
    if (!msgEl) return;
    const tr = translations[currentLang];
    if (tr && tr.fab_ph) msgEl.setAttribute('placeholder', tr.fab_ph);
  }
  const _applyLang = applyLanguage;
  applyLanguage = function (lang) {
    _applyLang(lang);
    refreshFabPh();
  };
  refreshFabPh();
})();

/* ═══════════════════════════════════════════════════════════════
   SOCIAL PROOF — guest review stats near the review CTAs
   ▶ EDIT MONTHLY: update REVIEW_STATS.count with the real number
═══════════════════════════════════════════════════════════════ */
const REVIEW_STATS = { count: 47 };
const REVIEW_PROOF_I18N = {
  en: '⭐ {count} guests left 5 stars in the last month',
  pt: '⭐ {count} hóspedes deixaram 5 estrelas no último mês',
  fr: '⭐ {count} voyageurs ont laissé 5 étoiles le mois dernier',
  es: '⭐ {count} huéspedes dejaron 5 estrellas el último mes',
  de: '⭐ {count} Gäste haben letzten Monat 5 Sterne vergeben',
  it: '⭐ {count} ospiti hanno lasciato 5 stelle nell’ultimo mese',
};
Object.keys(REVIEW_PROOF_I18N).forEach(function (l) {
  translations[l].review_proof = REVIEW_PROOF_I18N[l];
});

(function () {
  function applyReviewProof() {
    const tr = translations[currentLang];
    const tmpl = (tr && tr.review_proof) || '⭐ {count} guests left 5 stars last month';
    const txt = tmpl.replace('{count}', REVIEW_STATS.count);
    document.querySelectorAll('[data-review-proof]').forEach(function (el) {
      el.textContent = txt;
    });
  }
  const _applyLang = applyLanguage;
  applyLanguage = function (lang) {
    _applyLang(lang);
    applyReviewProof();
  };
  applyReviewProof();
})();

/* ═══════════════════════════════════════════════════════════════
   PLACE DETAIL PAGES — data-driven (#place-<id>)
   PLACES = structured data; editorial text lives in translations
   (porto_<slug>_intro / _tips; reuses porto_<slug>_h and _p).
   FR/ES/DE/IT fall back to EN until the translation audit.
═══════════════════════════════════════════════════════════════ */
const PLACES = {
  lello: {
    slug: 'lello', emoji: '📚',
    tagKey: 'porto_lello_tag', titleKey: 'porto_lello_h', descKey: 'porto_lello_p',
    price: 2, rating: { avg: '4.5', count: '55k' }, cats: ['solo', 'family'], photos: 3,
    address: 'Rua das Carmelitas 144, 4050-161 Porto',
    hours: '09:30–19:00',
    website: 'https://www.livrarialello.pt',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Livraria+Lello+Porto',
    walk: 24, transit: 16, ride: 6,
  },
  wondersense: {
    slug: 'wondersense', emoji: '🌀',
    tagKey: 'porto_wonder_tag', titleKey: 'porto_wonder_h', descKey: 'porto_wonder_p',
    price: 2, rating: { avg: '4.7', count: '320' }, cats: ['family', 'couple'], photos: 3,
    address: 'Rua das Carmelitas 130, 4050-161 Porto',
    hours: '10:00–19:00',
    website: 'https://wondersensemuseum.com',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Wondersense+Rua+das+Carmelitas+130+Porto',
    walk: 24, transit: 16, ride: 6,
  },
  morro: {
    slug: 'morro', emoji: '🌅',
    tagKey: 'porto_morro_tag', titleKey: 'porto_morro_h', descKey: 'porto_morro_p',
    price: 1, free: true, rating: { avg: '4.7', count: '41k' }, cats: ['couple', 'relax', 'group'], photos: 3,
    address: 'Jardim do Morro, Vila Nova de Gaia',
    hours: '',
    website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Jardim+do+Morro+Vila+Nova+de+Gaia',
    walk: 38, transit: 22, ride: 9,
  },
  gaia: {
    slug: 'gaia', emoji: '🍷',
    tagKey: 'porto_gaia_tag', titleKey: 'porto_gaia_h', descKey: 'porto_gaia_p',
    price: 3, rating: { avg: '4.6', count: '30k' }, cats: ['couple', 'group'], photos: 3,
    address: 'Cais de Gaia, Vila Nova de Gaia',
    hours: 'Most cellars 10:00–18:00',
    website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Caves+Vinho+do+Porto+Vila+Nova+de+Gaia',
    walk: 40, transit: 24, ride: 9,
  },
};

const PLACE_I18N = {
  en: {
    place_tips_h: 'Good to know',
    place_go: 'Get directions from Porto Peace Haven',
    place_hours_always: 'Open at any time',
    place_review_h: 'Enjoying Porto?',
    place_review_p: 'If our little guide made your day better, a review helps the next traveller find us too.',
    place_review_btn: 'Leave a review ⭐',
    back_porto: '← Get to Know Porto',
    porto_lello_intro: "We could describe the staircase. We won't — some things you have to climb yourself.",
    porto_lello_tips: '<li>Buy the timed ticket online; the walk-up queue is brutal.</li><li>Go right at opening or in the last hour for near-empty photos.</li><li>The ticket price comes off any book you buy.</li>',
    porto_wondersense_intro: "A museum you taste, hear and touch. We won't spoil a single room — you genuinely have to go.",
    porto_wondersense_tips: '<li>Book a time slot in advance — entry is in small timed groups.</li><li>Allow at least an hour; it spans five floors.</li><li>A perfect plan for a rainy afternoon.</li>',
    porto_morro_intro: 'Everyone says it has the best sunset in Porto. For once, everyone is right.',
    porto_morro_tips: '<li>Cross on the upper deck of the bridge — the view stops you mid-step.</li><li>Arrive 30–40 min before sunset for a spot on the grass.</li><li>Bring something to drink; there are kiosks nearby.</li>',
    porto_gaia_intro: 'Port wine has aged on this riverbank for 300 years. Spend an hour finding out why.',
    porto_gaia_tips: '<li>Pick a smaller house for an unhurried, personal tasting.</li><li>Book ahead in summer — the famous cellars fill up.</li><li>Ask the difference between a tawny and a ruby; you will never forget it.</li>',
  },
  pt: {
    place_tips_h: 'Bom saber',
    place_go: 'Como chegar a partir do Porto Peace Haven',
    place_hours_always: 'Aberto a qualquer hora',
    place_review_h: 'A gostar do Porto?',
    place_review_p: 'Se o nosso guia tornou o seu dia melhor, uma avaliação ajuda o próximo viajante a encontrar-nos também.',
    place_review_btn: 'Deixar avaliação ⭐',
    back_porto: '← Conheça o Porto',
    porto_lello_intro: 'Podíamos descrever a escadaria. Não vamos — há coisas que se têm de subir com os próprios pés.',
    porto_lello_tips: '<li>Compre o bilhete com hora online; a fila de quem chega sem bilhete é brutal.</li><li>Vá logo à abertura ou na última hora para fotos quase sem ninguém.</li><li>O valor do bilhete é descontado em qualquer livro que compre.</li>',
    porto_wondersense_intro: 'Um museu que se prova, se ouve e se toca. Não vamos estragar uma única sala — tem mesmo de ir.',
    porto_wondersense_tips: '<li>Reserve um horário com antecedência — a entrada é em pequenos grupos com hora marcada.</li><li>Conte pelo menos uma hora; são cinco pisos.</li><li>Um plano perfeito para uma tarde de chuva.</li>',
    porto_morro_intro: 'Toda a gente diz que tem o melhor pôr do sol do Porto. Por uma vez, toda a gente tem razão.',
    porto_morro_tips: '<li>Atravesse pelo tabuleiro de cima da ponte — a vista pára-o a meio do passo.</li><li>Chegue 30–40 min antes do pôr do sol para apanhar lugar na relva.</li><li>Leve algo para beber; há quiosques por perto.</li>',
    porto_gaia_intro: 'O vinho do Porto envelhece nesta margem há 300 anos. Passe uma hora a descobrir porquê.',
    porto_gaia_tips: '<li>Escolha uma casa mais pequena para uma prova sem pressa e pessoal.</li><li>Reserve com antecedência no verão — as caves famosas enchem.</li><li>Pergunte a diferença entre um tawny e um ruby; nunca mais se esquece.</li>',
  },
};
Object.assign(translations.en, PLACE_I18N.en);
Object.assign(translations.pt, PLACE_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], PLACE_I18N.en);
});

(function () {
  let currentPlaceId = null;

  function t(key) {
    const tr = translations[currentLang] || translations.en;
    return tr[key] || (translations.en && translations.en[key]) || '';
  }

  function renderPlace(id) {
    const pl = PLACES[id];
    if (!pl) return false;
    currentPlaceId = id;

    // Carousel
    const track = document.getElementById('place-track');
    const dots = document.getElementById('place-dots');
    if (!track || !dots) return false;
    track.innerHTML = '';
    dots.innerHTML = '';
    const n = pl.photos || 1;
    for (let i = 1; i <= n; i++) {
      const img = document.createElement('img');
      img.src = 'assets/fotos/porto-' + pl.slug + '-' + i + '.jpg';
      img.alt = t(pl.titleKey);
      img.loading = 'lazy';
      img.onerror = function () {
        const ph = document.createElement('div');
        ph.className = 'place-ph';
        ph.textContent = pl.emoji;
        if (this.parentNode) this.replaceWith(ph);
      };
      track.appendChild(img);
      const dot = document.createElement('span');
      dot.className = 'place-dot' + (i === 1 ? ' active' : '');
      dots.appendChild(dot);
    }
    track.onscroll = function () {
      const idx = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      dots.querySelectorAll('.place-dot').forEach(function (d, di) {
        d.classList.toggle('active', di === idx);
      });
    };

    // Header
    document.getElementById('place-tag').textContent = t(pl.tagKey);
    const priceEl = document.getElementById('place-price');
    if (pl.free) {
      priceEl.className = 'ppx ppx-free';
      priceEl.textContent = t('ppx_free');
    } else {
      priceEl.className = 'ppx';
      priceEl.innerHTML = '$'.repeat(pl.price) +
        '<span class="ppx-dim">' + '$'.repeat(5 - pl.price) + '</span>';
    }
    document.getElementById('place-rating').textContent =
      pl.rating ? ('★ ' + pl.rating.avg + ' · ' + pl.rating.count) : '';

    document.getElementById('place-title').textContent = t(pl.titleKey);
    document.getElementById('place-intro').textContent = t('porto_' + pl.slug + '_intro');
    document.getElementById('place-desc').textContent = t(pl.descKey);
    document.getElementById('place-tips').innerHTML = t('porto_' + pl.slug + '_tips');

    // Info block
    let rows = '';
    rows += '<div class="place-info-row"><span class="place-info-ico" aria-hidden="true">📍</span><span>' + pl.address + '</span></div>';
    rows += '<div class="place-info-row"><span class="place-info-ico" aria-hidden="true">🕒</span><span>' +
      (pl.hours ? pl.hours : t('place_hours_always')) + '</span></div>';
    let trans = '<div class="place-transport">';
    trans += '<span>🚶 ' + pl.walk + ' min</span>';
    if (pl.transit) trans += '<span>🚇 ' + pl.transit + ' min</span>';
    if (pl.ride) trans += '<span>🚖 ~' + pl.ride + '€</span>';
    trans += '</div>';
    rows += '<div class="place-info-row"><span class="place-info-ico" aria-hidden="true">🧭</span>' + trans + '</div>';
    if (pl.website) {
      rows += '<div class="place-info-row"><span class="place-info-ico" aria-hidden="true">🔗</span><a href="' +
        pl.website + '" target="_blank" rel="noopener">' +
        pl.website.replace(/^https?:\/\//, '') + '</a></div>';
    }
    document.getElementById('place-info').innerHTML = rows;
    document.getElementById('place-go').href = pl.maps;
    return true;
  }
  window.__pphRenderPlace = renderPlace;

  // Make Porto cards open their detail page (click anywhere except a link)
  document.querySelectorAll('.porto-card[data-place]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      location.hash = '#place-' + card.dataset.place;
    });
  });

  // Re-render the open place page when the language changes
  const _applyLang = applyLanguage;
  applyLanguage = function (lang) {
    _applyLang(lang);
    const placeScreen = document.getElementById('place');
    if (currentPlaceId && placeScreen && placeScreen.classList.contains('active')) {
      renderPlace(currentPlaceId);
    }
  };
})();

/* PLACE DETAIL — remaining 6 Porto places */
Object.assign(PLACES, {
  capela: {
    slug: 'capela', emoji: '🍷',
    tagKey: 'porto_capela_tag', titleKey: 'porto_capela_h', descKey: 'porto_capela_p',
    price: 2, rating: { avg: '4.6', count: '850' }, cats: ['couple', 'solo'], photos: 3,
    address: 'Tv. do Carregal 77-81, 4050-167 Porto', hours: 'Late afternoon & evening', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Capela+Incomum+Tv+do+Carregal+Porto',
    walk: 22, transit: 16, ride: 6,
  },
  virtudes: {
    slug: 'virtudes', emoji: '🌳',
    tagKey: 'porto_virtudes_tag', titleKey: 'porto_virtudes_h', descKey: 'porto_virtudes_p',
    price: 1, free: true, rating: { avg: '4.6', count: '3k' }, cats: ['couple', 'relax', 'solo'], photos: 3,
    address: 'Passeio das Virtudes, Porto', hours: '', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Jardim+das+Virtudes+Porto',
    walk: 20, transit: 14, ride: 6,
  },
  guindais: {
    slug: 'guindais', emoji: '🌉',
    tagKey: 'porto_guindais_tag', titleKey: 'porto_guindais_h', descKey: 'porto_guindais_p',
    price: 1, free: true, rating: { avg: '4.6', count: '2k' }, cats: ['solo', 'relax'], photos: 3,
    address: 'Escadas dos Guindais, Porto', hours: '', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Escadas+dos+Guindais+Porto',
    walk: 34, transit: 20, ride: 8,
  },
  almas: {
    slug: 'almas', emoji: '🔵',
    tagKey: 'porto_almas_tag', titleKey: 'porto_almas_h', descKey: 'porto_almas_p',
    price: 1, free: true, rating: { avg: '4.6', count: '5k' }, cats: ['solo', 'family'], photos: 3,
    address: 'Rua de Santa Catarina 428, 4000-124 Porto', hours: '07:30–18:00', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Capela+das+Almas+Porto',
    walk: 30, transit: 20, ride: 7,
  },
  foto: {
    slug: 'foto', emoji: '📷',
    tagKey: 'porto_foto_tag', titleKey: 'porto_foto_h', descKey: 'porto_foto_p',
    price: 1, free: true, rating: { avg: '4.6', count: '6k' }, cats: ['solo', 'family', 'relax'], photos: 3,
    address: 'Largo Amor de Perdição, 4050-008 Porto',
    hours: 'Tue–Fri 10:00–18:00 · Sat–Sun 15:00–19:00', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Centro+Português+de+Fotografia+Porto',
    walk: 26, transit: 18, ride: 7,
  },
  rib: {
    slug: 'rib', emoji: '🏛️',
    tagKey: 'porto_rib_tag', titleKey: 'porto_rib_h', descKey: 'porto_rib_p',
    price: 1, free: true, rating: { avg: '4.7', count: '50k' }, cats: ['couple', 'family', 'relax'], photos: 3,
    address: 'Cais da Ribeira, Porto', hours: '', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Ribeira+Porto',
    walk: 32, transit: 20, ride: 8,
  },
});

const PLACE_I18N_2 = {
  en: {
    porto_capela_intro: "A wine bar inside a real former chapel. We'll just say this: order a glass and look up.",
    porto_capela_tips: '<li>Go for a quiet glass, not a big night out — it is small and intimate.</li><li>Portuguese wines by the glass; ask the staff to guide you.</li><li>Best earlier in the evening, before it fills up.</li>',
    porto_virtudes_intro: 'The sunset the locals keep for themselves. Now you know it too.',
    porto_virtudes_tips: '<li>Bring a drink and something to sit on — it is a grassy terraced slope.</li><li>Arrive about 30 minutes before sunset for the best light.</li><li>Quieter than Jardim do Morro across the river.</li>',
    porto_guindais_intro: 'A staircase, not a monument — but it hands you the Dom Luís bridge like nothing else.',
    porto_guindais_tips: '<li>It is steep — wear comfy shoes and take your time.</li><li>Pair it with a walk along the Ribeira waterfront below.</li><li>There is a funicular nearby if you would rather not climb back up.</li>',
    porto_almas_intro: "Sixteen thousand blue tiles, in the middle of the busiest shopping street. Most people miss it. You won't.",
    porto_almas_tips: '<li>Look up — the whole exterior is the artwork.</li><li>Early morning light makes the blue tiles glow.</li><li>It is on Rua de Santa Catarina — pair it with a coffee at a classic café.</li>',
    porto_foto_intro: 'A photography museum inside a 19th-century prison. Yes, you can see the old cells. Yes, it is free.',
    porto_foto_tips: '<li>Free entry — one of the best-value hours in Porto.</li><li>The building itself is half the visit; look for the cell doors.</li><li>Rarely crowded — a calm pick for a hot or rainy afternoon.</li>',
    porto_rib_intro: 'Touristy? A little. The soul of Porto? Completely. Go early and let yourself get lost.',
    porto_rib_tips: '<li>Go in the morning, before the crowds and the boat tours.</li><li>Wander the tiny alleys behind the waterfront — that is the real Ribeira.</li><li>A great starting point for crossing the bridge to Gaia.</li>',
  },
  pt: {
    porto_capela_intro: 'Um bar de vinhos dentro de uma antiga capela a sério. Só dizemos isto: peça um copo e olhe para cima.',
    porto_capela_tips: '<li>Vá para um copo tranquilo, não para uma noitada — é pequeno e intimista.</li><li>Vinhos portugueses a copo; peça ao staff que o oriente.</li><li>Melhor no início da noite, antes de encher.</li>',
    porto_virtudes_intro: 'O pôr do sol que os portuenses guardam para si. Agora também o conhece.',
    porto_virtudes_tips: '<li>Leve uma bebida e algo para se sentar — é uma encosta de relva em socalcos.</li><li>Chegue cerca de 30 minutos antes do pôr do sol para a melhor luz.</li><li>Mais calmo do que o Jardim do Morro do outro lado do rio.</li>',
    porto_guindais_intro: 'Uma escadaria, não um monumento — mas entrega-lhe a ponte Dom Luís como mais nada.',
    porto_guindais_tips: '<li>É íngreme — calce sapatos confortáveis e vá com calma.</li><li>Combine com um passeio pela Ribeira em baixo.</li><li>Há um funicular ali perto se não quiser subir a pé.</li>',
    porto_almas_intro: 'Dezasseis mil azulejos azuis, no meio da rua de compras mais movimentada. A maioria não repara. Você vai.',
    porto_almas_tips: '<li>Olhe para cima — todo o exterior é a obra de arte.</li><li>A luz da manhã faz os azulejos azuis brilhar.</li><li>É na Rua de Santa Catarina — combine com um café numa casa clássica.</li>',
    porto_foto_intro: 'Um museu de fotografia dentro de uma prisão do século XIX. Sim, dá para ver as antigas celas. Sim, é grátis.',
    porto_foto_tips: '<li>Entrada gratuita — uma das melhores horas do Porto pela relação qualidade-preço.</li><li>O próprio edifício é metade da visita; procure as portas das celas.</li><li>Raramente cheio — uma escolha calma para uma tarde quente ou de chuva.</li>',
    porto_rib_intro: 'Turística? Um pouco. A alma do Porto? Por completo. Vá cedo e deixe-se perder.',
    porto_rib_tips: '<li>Vá de manhã, antes das multidões e dos passeios de barco.</li><li>Perca-se nos becos estreitos atrás do cais — é a Ribeira verdadeira.</li><li>Óptimo ponto de partida para atravessar a ponte para Gaia.</li>',
  },
};
Object.assign(translations.en, PLACE_I18N_2.en);
Object.assign(translations.pt, PLACE_I18N_2.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], PLACE_I18N_2.en);
});

/* RESTAURANTS — 4 curated picks (cheap · near · mid · premium) */
Object.assign(PLACES, {
  conga: {
    slug: 'conga', emoji: '🥪',
    tagKey: 'porto_conga_tag', titleKey: 'porto_conga_h', descKey: 'porto_conga_p',
    price: 1, rating: { avg: '4.4', count: '9k' }, cats: ['solo', 'group'], photos: 3,
    address: 'Rua do Bonjardim 318, 4000-115 Porto', hours: 'Mon–Sat 10:00–22:00', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Conga+Casa+das+Bifanas+Porto',
    walk: 28, transit: 16, ride: 7,
  },
  capanegra: {
    slug: 'capanegra', emoji: '🍽️',
    tagKey: 'porto_capanegra_tag', titleKey: 'porto_capanegra_h', descKey: 'porto_capanegra_p',
    price: 2, rating: { avg: '4.3', count: '7k' }, cats: ['family', 'couple'], photos: 3,
    address: 'Rua do Campo Alegre 191, 4150-177 Porto', hours: 'Daily 12:00–23:00', website: '',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Capa+Negra+II+Porto',
    walk: 12, transit: 8, ride: 4,
  },
  tapabento: {
    slug: 'tapabento', emoji: '🍷',
    tagKey: 'porto_tapabento_tag', titleKey: 'porto_tapabento_h', descKey: 'porto_tapabento_p',
    price: 3, rating: { avg: '4.6', count: '4k' }, cats: ['couple', 'solo'], photos: 3,
    address: 'Rua da Madeira 221, 4000-330 Porto', hours: 'Wed–Sun 12:30–15:00 & 19:00–23:00 · closed Mon–Tue', website: 'https://tapabento.com',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Tapabento+Porto',
    walk: 30, transit: 18, ride: 7,
  },
  antiqvvm: {
    slug: 'antiqvvm', emoji: '✨',
    tagKey: 'porto_antiqvvm_tag', titleKey: 'porto_antiqvvm_h', descKey: 'porto_antiqvvm_p',
    price: 4, rating: { avg: '4.7', count: '950' }, cats: ['couple'], photos: 3,
    address: 'Rua de Entre-Quintas 220, Porto', hours: 'Tue–Sat dinner (lunch Tue & Sat) · closed Sun–Mon',
    website: 'https://www.antiqvvm.pt',
    maps: 'https://www.google.com/maps/dir/Rua+da+Paz+66+Porto/Antiqvvm+Restaurante+Porto',
    walk: 16, transit: 12, ride: 5,
  },
});

/* ───────────────────────────────────────────────────────────────
   PLACE COORDINATES — [lat, lng] for the interactive Leaflet map.
   These are approximate pins for well-known Porto landmarks, taken
   from public map data. HOST: feel free to fine-tune any pin —
   open Google Maps, right-click the spot, click the lat/long to
   copy it, and paste it here. A place set to null is simply
   skipped on the map (no marker) until a coordinate is added.
─────────────────────────────────────────────────────────────── */
const PLACE_COORDS = {
  lello:       [41.1473, -8.6149],
  wondersense: [41.1471, -8.6152],
  morro:       [41.1378, -8.6092],
  gaia:        [41.1385, -8.6112],
  capela:      [41.1462, -8.6181],
  virtudes:    [41.1458, -8.6191],
  guindais:    [41.1410, -8.6076],
  almas:       [41.1487, -8.6063],
  foto:        [41.1460, -8.6166],
  rib:         [41.1407, -8.6131],
  conga:       [41.1499, -8.6082],
  capanegra:   [41.1535, -8.6330],
  tapabento:   [41.1455, -8.6092],
  antiqvvm:    [41.1471, -8.6228],
};
Object.keys(PLACE_COORDS).forEach(function (k) {
  if (PLACES[k]) PLACES[k].coords = PLACE_COORDS[k];
});

const REST_I18N = {
  en: {
    porto_g3_title: 'Where to eat',
    porto_conga_tag: '🥪 Cheap eats',
    porto_conga_h: 'Conga — the legendary bifana',
    porto_conga_p: 'A tiny, no-frills institution since 1976. The bifana — slow-cooked pork in a soft roll — is one of the cheapest great meals in Porto.',
    porto_conga_intro: 'A pork sandwich so good it has been famous for almost 50 years. Order a bifana and a cold drink — that is the whole plan.',
    porto_conga_tips: '<li>Do not expect decor — expect flavour.</li><li>Perfect for a fast, very cheap lunch.</li><li>Busy at peak hours, but it moves quickly.</li>',
    porto_capanegra_tag: '🍽️ Near & traditional',
    porto_capanegra_h: 'Capa Negra II — dinner near your door',
    porto_capanegra_p: 'A reliable, busy local restaurant a short walk from the apartment. Grilled meats, fish, and a serious francesinha.',
    porto_capanegra_intro: 'The closest proper Portuguese dinner to your door — and yes, they do a serious francesinha.',
    porto_capanegra_tips: '<li>The francesinha is huge — consider sharing.</li><li>Busy at weekends; go a little earlier.</li><li>An easy walk from the apartment.</li>',
    porto_tapabento_tag: '🍷 Mid-range gem',
    porto_tapabento_h: 'Tapabento — small place, big reputation',
    porto_tapabento_p: 'Modern Portuguese cooking and petiscos done with real care. Small, warm, and consistently excellent.',
    porto_tapabento_intro: 'Right behind São Bento station, a tiny place locals book days ahead. There is a reason.',
    porto_tapabento_tips: '<li>Book ahead — it is small and very popular.</li><li>Great for a special-but-relaxed dinner.</li><li>Steps from São Bento station.</li>',
    porto_antiqvvm_tag: '✨ Special occasion',
    porto_antiqvvm_h: 'Antiqvvm — a two-Michelin-star evening',
    porto_antiqvvm_p: 'Fine-dining Portuguese cuisine in a romantic 19th-century house with a Douro view. A genuine occasion.',
    porto_antiqvvm_intro: 'Two Michelin stars, a 19th-century house, a view over the Douro. For the night you want to remember.',
    porto_antiqvvm_tips: '<li>Reserve well in advance.</li><li>The tasting menu is the way to go.</li><li>Smart-casual — it is an occasion.</li>',
  },
  pt: {
    porto_g3_title: 'Onde comer',
    porto_conga_tag: '🥪 Comer barato',
    porto_conga_h: 'Conga — a bifana lendária',
    porto_conga_p: 'Uma instituição minúscula e sem luxo desde 1976. A bifana — porco estufado num pão macio — é uma das melhores refeições baratas do Porto.',
    porto_conga_intro: 'Uma sande de porco tão boa que é famosa há quase 50 anos. Peça uma bifana e uma bebida fresca — é esse o plano todo.',
    porto_conga_tips: '<li>Não espere decoração — espere sabor.</li><li>Perfeito para um almoço rápido e muito barato.</li><li>Cheio às horas de ponta, mas anda depressa.</li>',
    porto_capanegra_tag: '🍽️ Perto e tradicional',
    porto_capanegra_h: 'Capa Negra II — jantar perto de casa',
    porto_capanegra_p: 'Um restaurante local fiável e movimentado, a poucos passos do apartamento. Carnes grelhadas, peixe e uma francesinha a sério.',
    porto_capanegra_intro: 'O jantar português a sério mais perto da sua porta — e sim, fazem uma francesinha a sério.',
    porto_capanegra_tips: '<li>A francesinha é enorme — considere partilhar.</li><li>Cheio aos fins de semana; vá um pouco mais cedo.</li><li>Vai-se a pé facilmente do apartamento.</li>',
    porto_tapabento_tag: '🍷 Jóia intermédia',
    porto_tapabento_h: 'Tapabento — sítio pequeno, grande fama',
    porto_tapabento_p: 'Cozinha portuguesa moderna e petiscos feitos com verdadeiro cuidado. Pequeno, acolhedor e sempre excelente.',
    porto_tapabento_intro: 'Mesmo atrás da estação de São Bento, um sítio minúsculo que os locais reservam com dias de antecedência. Há uma razão.',
    porto_tapabento_tips: '<li>Reserve com antecedência — é pequeno e muito procurado.</li><li>Óptimo para um jantar especial mas descontraído.</li><li>A poucos passos da estação de São Bento.</li>',
    porto_antiqvvm_tag: '✨ Ocasião especial',
    porto_antiqvvm_h: 'Antiqvvm — uma noite com duas estrelas Michelin',
    porto_antiqvvm_p: 'Alta cozinha portuguesa numa romântica casa do século XIX com vista para o Douro. Uma verdadeira ocasião.',
    porto_antiqvvm_intro: 'Duas estrelas Michelin, uma casa do século XIX, uma vista sobre o Douro. Para a noite que quer recordar.',
    porto_antiqvvm_tips: '<li>Reserve com bastante antecedência.</li><li>O menu de degustação é o caminho.</li><li>Traje cuidado — é uma ocasião.</li>',
  },
};
Object.assign(translations.en, REST_I18N.en);
Object.assign(translations.pt, REST_I18N.pt);
['fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], REST_I18N.en);
});

/* ═══════════════════════════════════════════════════════════════
   PORTO CARD META — rating + transport badges + category chips
   Injects a meta block into every .porto-card[data-place] from PLACES.
   Covers: transport times (🚶/🚇), Google ratings (★), category chips.
═══════════════════════════════════════════════════════════════ */
const CAT_I18N = {
  en: { cat_solo: 'Solo', cat_couple: 'Couple', cat_family: 'Family', cat_group: 'Group', cat_relax: 'Relax', meta_min: 'min' },
  pt: { cat_solo: 'Sozinho', cat_couple: 'A dois', cat_family: 'Família', cat_group: 'Grupo', cat_relax: 'Relaxar', meta_min: 'min' },
  fr: { cat_solo: 'Solo', cat_couple: 'En couple', cat_family: 'Famille', cat_group: 'Groupe', cat_relax: 'Détente', meta_min: 'min' },
  es: { cat_solo: 'Solo', cat_couple: 'En pareja', cat_family: 'Familia', cat_group: 'Grupo', cat_relax: 'Relax', meta_min: 'min' },
  de: { cat_solo: 'Solo', cat_couple: 'Zu zweit', cat_family: 'Familie', cat_group: 'Gruppe', cat_relax: 'Entspannen', meta_min: 'Min.' },
  it: { cat_solo: 'Da soli', cat_couple: 'In coppia', cat_family: 'Famiglia', cat_group: 'Gruppo', cat_relax: 'Relax', meta_min: 'min' },
};
['en', 'pt', 'fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], CAT_I18N[l]);
});

(function () {
  function tr(key) {
    var d = translations[currentLang] || translations.en;
    return d[key] || translations.en[key] || key;
  }

  function decorateCard(card) {
    var pl = PLACES[card.dataset.place];
    if (!pl) return;
    var body = card.querySelector('.porto-body');
    if (!body) return;

    // Idempotent: drop any previous injection before re-rendering
    var old = body.querySelector('.pcard-meta-wrap');
    if (old) old.remove();

    var wrap = document.createElement('div');
    wrap.className = 'pcard-meta-wrap';

    // Rating + transport row
    var meta = document.createElement('div');
    meta.className = 'pcard-meta';
    var html = '';
    if (pl.rating && pl.rating.avg) {
      html += '<span class="pcard-rating"><span class="pcard-star">★</span>' +
        pl.rating.avg + '<span class="pcard-rating-count">(' +
        pl.rating.count + ')</span></span>';
    }
    var tbits = [];
    if (pl.walk) tbits.push('🚶 ' + pl.walk);
    if (pl.transit) tbits.push('🚇 ' + pl.transit);
    if (tbits.length) {
      html += '<span class="pcard-trans">' + tbits.join(' · ') + ' ' + tr('meta_min') + '</span>';
    }
    meta.innerHTML = html;
    if (html) wrap.appendChild(meta);

    // Category chips
    if (pl.cats && pl.cats.length) {
      var cats = document.createElement('div');
      cats.className = 'pcard-cats';
      pl.cats.forEach(function (c) {
        var chip = document.createElement('span');
        chip.className = 'pcard-cat';
        chip.textContent = tr('cat_' + c);
        cats.appendChild(chip);
      });
      wrap.appendChild(cats);
    }

    if (!wrap.children.length) return;

    // Insert just above the "Go" button so the CTA stays last
    var btn = body.querySelector('.btn-sm, .btn');
    if (btn) body.insertBefore(wrap, btn);
    else body.appendChild(wrap);
  }

  function decorateAll() {
    document.querySelectorAll('.porto-card[data-place]').forEach(decorateCard);
  }

  decorateAll();

  // Re-render chips when the language changes
  var _applyLangMeta = applyLanguage;
  applyLanguage = function (lang) {
    _applyLangMeta(lang);
    decorateAll();
  };
})();

/* ═══════════════════════════════════════════════════════════════
   CHECK-OUT CTA i18n — quick check-out buttons (home + check-in screen)
═══════════════════════════════════════════════════════════════ */
const CHECKOUT_CTA_I18N = {
  en: { checkout_cta_h: 'Checking out?', checkout_cta_p: 'Start your check-out — it only takes a minute' },
  pt: { checkout_cta_h: 'Vai fazer check-out?', checkout_cta_p: 'Comece o seu check-out — leva só um minuto' },
  fr: { checkout_cta_h: 'Vous partez ?', checkout_cta_p: 'Commencez votre check-out — ça ne prend qu\'une minute' },
  es: { checkout_cta_h: '¿Te marchas?', checkout_cta_p: 'Empieza tu check-out — solo te llevará un minuto' },
  de: { checkout_cta_h: 'Reisen Sie ab?', checkout_cta_p: 'Starten Sie Ihren Check-out — es dauert nur eine Minute' },
  it: { checkout_cta_h: 'In partenza?', checkout_cta_p: 'Inizia il tuo check-out — bastano un paio di minuti' },
};
['en', 'pt', 'fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], CHECKOUT_CTA_I18N[l]);
});

/* ═══════════════════════════════════════════════════════════════
   INTERACTIVE MAP i18n
═══════════════════════════════════════════════════════════════ */
const MAP_I18N = {
  en: { map_pins_note: 'Tap a pin to open the place and get directions. Pin positions are approximate.', map_pdf_h: 'Official tourist map (PDF)', map_see_place: 'See details', map_home_pin: 'Porto Peace Haven · your stay' },
  pt: { map_pins_note: 'Toque num pin para abrir o lugar e ver como chegar. As posições dos pins são aproximadas.', map_pdf_h: 'Mapa turístico oficial (PDF)', map_see_place: 'Ver detalhes', map_home_pin: 'Porto Peace Haven · a sua estadia' },
  fr: { map_pins_note: 'Touchez un repère pour ouvrir le lieu et obtenir l\'itinéraire. Les positions sont approximatives.', map_pdf_h: 'Carte touristique officielle (PDF)', map_see_place: 'Voir les détails', map_home_pin: 'Porto Peace Haven · votre séjour' },
  es: { map_pins_note: 'Toca un pin para abrir el lugar y ver cómo llegar. Las posiciones son aproximadas.', map_pdf_h: 'Mapa turístico oficial (PDF)', map_see_place: 'Ver detalles', map_home_pin: 'Porto Peace Haven · tu estancia' },
  de: { map_pins_note: 'Tippen Sie auf eine Markierung, um den Ort zu öffnen und die Route zu sehen. Positionen sind ungefähr.', map_pdf_h: 'Offizielle Touristenkarte (PDF)', map_see_place: 'Details ansehen', map_home_pin: 'Porto Peace Haven · Ihr Aufenthalt' },
  it: { map_pins_note: 'Tocca un segnaposto per aprire il luogo e ottenere le indicazioni. Le posizioni sono approssimative.', map_pdf_h: 'Mappa turistica ufficiale (PDF)', map_see_place: 'Vedi dettagli', map_home_pin: 'Porto Peace Haven · il tuo soggiorno' },
};
['en', 'pt', 'fr', 'es', 'de', 'it'].forEach(function (l) {
  Object.assign(translations[l], MAP_I18N[l]);
});

/* ═══════════════════════════════════════════════════════════════
   INTERACTIVE MAP — Leaflet + OpenStreetMap (free · no API key)
   Renders on the #mapa screen. Markers come from PLACES[].coords.
   Built lazily (and size-recalculated) once #mapa becomes visible,
   because Leaflet cannot measure a screen that is display:none.
═══════════════════════════════════════════════════════════════ */
(function () {
  /* ── CONFIG ──────────────────────────────────────────────────
     TODO (host): the apartment's exact coordinates.
     How to get them: open Google Maps, right-click the building at
     Rua da Paz 66, Porto, then click the lat/long shown to copy it.
     Paste it below as [lat, lng] — e.g. [41.1570, -8.6380].
     While this stays null, the map centres on Porto and the
     "home" marker is simply skipped (nothing is invented).        */
  var APARTMENT_COORDS = null;

  var PORTO_CENTER = [41.1455, -8.6110]; // central Porto fallback

  function tr(key) {
    var d = translations[currentLang] || translations.en;
    return d[key] || translations.en[key] || key;
  }

  var map = null;
  var built = false;

  function buildMap() {
    if (built) return;
    var mapEl = document.getElementById('porto-map');
    if (!mapEl || typeof L === 'undefined') return; // Leaflet not ready yet
    built = true;

    var start = APARTMENT_COORDS || PORTO_CENTER;
    map = L.map('porto-map', { scrollWheelZoom: false }).setView(start, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    var bounds = [];

    // Apartment marker — the main pin (shown once APARTMENT_COORDS is set)
    if (APARTMENT_COORDS) {
      var homeIcon = L.divIcon({
        className: 'map-pin map-pin-home',
        html: '<span>🏠</span>',
        iconSize: [46, 46], iconAnchor: [23, 23],
      });
      var homePopup = '<strong>' + tr('map_home_pin') + '</strong>' +
        '<span class="map-popup-links">Rua da Paz 66, 3º · 4050-461 Porto' +
        '<a href="https://www.google.com/maps/dir/?api=1&destination=Rua+da+Paz+66+4050-461+Porto" target="_blank" rel="noopener">' +
        tr('go_btn') + '</a></span>';
      L.marker(APARTMENT_COORDS, { icon: homeIcon, zIndexOffset: 1000 })
        .addTo(map).bindPopup(homePopup);
      bounds.push(APARTMENT_COORDS);
    }

    // Place markers — skipped cleanly if a place has no coords.
    // Each popup offers "see details" + a one-tap directions button.
    Object.keys(PLACES).forEach(function (id) {
      var pl = PLACES[id];
      if (!pl || !pl.coords) return;
      var icon = L.divIcon({
        className: 'map-pin',
        html: '<span>' + (pl.emoji || '📍') + '</span>',
        iconSize: [34, 34], iconAnchor: [17, 17],
      });
      var popup = '<strong>' + tr(pl.titleKey) + '</strong>' +
        '<span class="map-popup-links">' +
        '<a href="#place-' + pl.slug + '">' + tr('map_see_place') + '</a>' +
        '<a class="map-popup-go" href="' + pl.maps + '" target="_blank" rel="noopener">📍 ' +
        tr('go_btn') + '</a></span>';
      L.marker(pl.coords, { icon: icon }).addTo(map).bindPopup(popup);
      bounds.push(pl.coords);
    });

    // Opening view: centred on the apartment when we know where it is,
    // otherwise framed to show every place pin.
    if (APARTMENT_COORDS) {
      map.setView(APARTMENT_COORDS, 15);
    } else if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [38, 38] });
    }
    setTimeout(function () { if (map) map.invalidateSize(); }, 220);
  }

  // Build (and re-measure) when the #mapa screen becomes active.
  // If Leaflet is still downloading, keep retrying until it is ready.
  function maybeBuild() {
    if (location.hash !== '#mapa') return;
    if (typeof L === 'undefined') {
      setTimeout(maybeBuild, 200); // Leaflet not loaded yet — try again
      return;
    }
    buildMap();
    if (map) {
      setTimeout(function () { map.invalidateSize(); }, 160);
      setTimeout(function () { map.invalidateSize(); }, 500);
    }
  }
  window.addEventListener('hashchange', maybeBuild);
  document.addEventListener('DOMContentLoaded', maybeBuild);
  window.addEventListener('load', maybeBuild);
  maybeBuild();
})();

/* ═══════════════════════════════════════════════════════════════
   NEDERLANDS (Dutch) — task #12
   nl starts as a full copy of EN (so no key is ever missing), then
   the real Dutch strings are layered on top.
═══════════════════════════════════════════════════════════════ */
translations.nl = Object.assign({}, translations.en);
Object.assign(translations.nl, {
  logo_sub: 'Gastengids',
  nav_home: 'Start', nav_info: 'Essentiële info', nav_checkin: 'Check-in / Check-out',
  nav_rules: 'Huisregels', nav_guide: 'Huisgids', nav_kitchen: 'Keukengids',
  nav_rooms_label: 'Kamers', nav_bathroom: 'Badkamer', nav_transport: 'Vervoer',
  nav_nearby: 'In de buurt', nav_porto: 'Ontdek Porto', nav_emergency: '🆘 Noodgeval',
  bnav_home: 'Start', bnav_info: 'Info', bnav_rooms: 'Kamers', bnav_porto: 'Porto', bnav_help: 'Hulp',
  hero_badge: 'Porto · Portugal', hero_welcome: 'Welkom bij',
  hero_tagline: 'Uw rustige thuis in het hart van Porto',
  rooms_preview_title: 'Kies uw kamer',
  ribeira_mood_short: 'Elegant · Stedelijk · Ruim',
  douro_mood_short: 'Warm · Knus · Goudkleurig',
  atlantico_mood_short: 'Kalm · Kustsfeer · Licht',
  room_discover: 'Ontdek →',
  info_title: 'Essentiële informatie', info_subtitle: 'Alles wat u nodig heeft, hier bij elkaar',
  address_title: 'Adres', open_maps: 'Openen in Google Maps',
  wifi_title: 'Wi-Fi', wifi_network: 'Netwerk', wifi_password: 'Wachtwoord',
  tap_copy: 'tik om te kopiëren', wifi_scan: '📷 Scan om automatisch verbinding te maken',
  contact_title: 'Contact met de gastheer', contact_urgent: 'Spoedlijn',
  guide_qr_title: 'Deze gastengids',
  guide_qr_desc: 'Deel deze link met uw gasten of scan de QR-code',
  checkin_title: 'Check-in & Check-out', checkin_label: 'Check-in',
  checkin_time_label: 'Vanaf:', checkin_late_label: 'Late aankomst:',
  checkout_label: 'Check-out', checkout_time_label: 'Vóór:', checkout_late_label: 'Late check-out:',
  checkout_late_desc: 'Vraag het ons vooraf — we doen ons best!',
  key_title: 'Sleutels & toegang',
  key_1: 'De toegangssleutel ligt in de externe kluis — gebruik de code die we u met uw check-in-instructies hebben gestuurd.',
  key_2: 'Uw kamersleutel ligt klaar in het kleine kluisje direct buiten uw kamerdeur — dezelfde code die we u hebben gestuurd.',
  key_3: 'Leg bij vertrek beide sleutels terug in hun kluisjes.',
  safe_title: 'Kluis op de kamer',
  safe_1: 'Op uw kamer is een kluis aanwezig — gebruik die voor paspoorten, waardevolle spullen en pasjes.',
  safe_2: 'Stel bij aankomst uw eigen pincode in en wis die weer bij vertrek.',
  rules_title: 'Huisregels',
  rules_subtitle: 'We vragen alle gasten deze richtlijnen te respecteren, zodat iedereen geniet van een rustig en gastvrij verblijf',
  rule_noise_h: 'Geluid & rusttijden',
  rule_n1: 'Houd geluid te allen tijde tot een minimum beperkt.',
  rule_n2: 'Wees vooral op weekdagen en tijdens kantooruren extra attent.',
  rule_n3: 'Geen luide muziek of verheven stemmen in het pand.',
  rule_smoke_h: 'Niet roken',
  rule_s1: 'Roken of vapen is nergens binnen het gebouw toegestaan.',
  rule_s2: 'Roken mag uitsluitend buiten het gebouw.',
  rule_s3: 'Kaarsen en wierook zijn niet toegestaan — de rookmelders zijn actief.',
  rule_guests_h: 'Bezoek & evenementen',
  rule_g1: 'Niet-geregistreerde bezoekers zijn niet toegestaan in het pand.',
  rule_g2: 'Feesten en sociale bijeenkomsten zijn strikt verboden.',
  rule_kitchen_h: 'Keuken & gedeelde ruimtes',
  rule_k1: 'Was de afwas altijd direct na gebruik.',
  rule_k2: 'Maak na elk gebruik het aanrecht en de kookplaat schoon.',
  rule_k3: 'Behandel gedeelde ruimtes met zorg en aandacht voor anderen.',
  rule_energy_h: 'Voordat u uw kamer verlaat',
  rule_e1: 'Sluit alle ramen voordat u vertrekt.',
  rule_e2: 'Doe alle lichten uit.',
  rule_e3: 'Schakel alle apparaten uit (ventilator, tv, enz.).',
  rule_bath_h: 'Badkamer',
  rule_b1: 'Controleer altijd of het doorspoelen van het toilet volledig is gestopt voordat u weggaat.',
  rule_b2: 'Alleen toiletpapier mag worden doorgespoeld — geen doekjes of andere zaken.',
  rule_b3: 'Laat de badkamer schoon en klaar achter voor de volgende gast.',
  rule_pets_h: 'Huisdieren',
  rule_p1: 'Huisdieren zijn niet toegestaan in Porto Peace Haven.',
  rule_furniture_h: 'Meubels & vloeren',
  rule_f1: 'Sleep stoelen of meubels niet over de vloer.',
  rule_f2: 'Behandel alle meubels met zorg.',
  rules_thank: 'Dank u dat u ons helpt Porto Peace Haven een rustige, gastvrije plek voor iedereen te houden. 🙏',
  guide_title: 'Huisgids',
  guide_sub: 'Wat fijn dat u er bent. Alles wat u nodig heeft om u thuis te voelen.',
  g_wifi_h: 'Wi-Fi', g_wifi_link: 'Bekijk QR-code →',
  g_bath_h: 'Gedeelde badkamer',
  g_bath_p: 'De badkamer wordt gedeeld tussen gasten. Wees attent en laat hem na elk gebruik brandschoon achter.',
  g_leave_h: 'Voordat u vertrekt',
  g_c1: '✔ Doe alle lichten uit', g_c2: '✔ Sluit alle ramen',
  g_c3: '✔ Schakel alle apparaten uit', g_c4: '✔ Controleer of het toilet is uitgespoeld',
  g_c5: '✔ Lever uw sleutel in bij check-out',
  g_quiet_h: 'Rustig samenleven',
  g_quiet_p: 'Dit is een woongebouw. Houd stemmen en geluiden zacht, vooral vroeg in de ochtend en ’s avonds. Uw buren zullen u dankbaar zijn.',
  g_tv_h: 'Tv & streaming',
  g_tv_p: 'Elke kamer heeft een tv met een Android TV-dongle. Gebruik de afstandsbediening van de dongle om Netflix, YouTube en andere apps te openen. Log in met uw eigen accounts — geen gedeelde inloggegevens. Volledige instructies vindt u in uw kamergids.',
  g_lamps_h: 'LED-sfeerlampen',
  g_lamps_p: 'Uw kamer heeft LED-lampen die u met een afstandsbediening bedient. Kies uw favoriete kleur, helderheid en sfeer. De instructies verschillen licht per kamer — zie de kamergids hieronder.',
  g_safety_h: 'Veiligheid',
  g_sf1: '🔥 Rookmelders: keuken & entree',
  g_sf2: '⚡ Elektriciteitskast: bij de entree',
  g_sf3: '🚨 Hulpdiensten: <strong>112</strong>',
  g_problem_h: 'Iets niet in orde?',
  g_problem_p: 'Laat het ons meteen weten — we lossen dingen liever direct op dan dat u ergens last van heeft. We zijn maar één bericht verwijderd.',
  g_contact_btn: 'Contact met de gastheer',
  review_h: 'Geniet u van uw verblijf?',
  review_p: 'We steken veel zorg in elk detail van Porto Peace Haven. Als we uw reis een beetje mooier hebben gemaakt, betekent een review de wereld voor ons — en helpt het andere reizigers dit hoekje van Porto te ontdekken.',
  review_btn: 'Laat een review achter ⭐',
  kitchen_title: 'Keukengids', kitchen_sub: 'Hoe u alles in de keuken gebruikt',
  k_hob_h: 'Inductiekookplaat',
  k_hob1: 'Plaats een geschikte (magnetische) pan op de kookplaat.',
  k_hob2: 'Druk op de aan-knop om in te schakelen.',
  k_hob3: 'Kies uw zone en regel de hitte met de + / – knoppen.',
  k_hob4: 'De kookplaat schakelt zichzelf na 2 uur automatisch uit.',
  k_hood_h: 'Afzuigkap',
  k_hood1: 'Zet hem aan vóór het koken om rookophoping te voorkomen.',
  k_hood2: 'Regel de snelheid met de knop (1 = laag · 3 = hoog).',
  k_hood3: 'Laat hem na het koken nog even draaien en schakel hem dan uit.',
  k_oven_h: 'Mini-oven',
  k_oven1: 'Leg het eten op de meegeleverde plaat of het rooster.',
  k_oven2: 'Stel de temperatuur in met de linkerknop.',
  k_oven3: 'Stel de kooktijd in met de rechterknop.',
  k_oven4: 'De oven schakelt automatisch uit als de timer afloopt.',
  k_micro_h: 'Magnetron',
  k_micro1: 'Gebruik uitsluitend magnetronbestendige bakjes.',
  k_micro2: 'Stel tijd en vermogen in en druk op start.',
  k_micro3: 'Gebruik nooit metalen bakjes of folie.',
  k_kettle_h: 'Waterkoker',
  k_kettle1: 'Vul met water tot aan de maximumlijn aan de binnenkant.',
  k_kettle2: 'Plaats hem op de voet en druk de schakelaar omlaag.',
  k_kettle3: 'Hij schakelt automatisch uit zodra het water kookt.',
  k_coffee_h: 'Koffiemachine met capsules',
  k_coffee1: 'Vul het waterreservoir en zet de machine aan.',
  k_coffee2: 'Plaats een geschikte capsule in de houder.',
  k_coffee3: 'Zet uw kopje klaar en druk op zetten.',
  k_coffee4: 'Verwijder en gooi de gebruikte capsule na elk gebruik weg.',
  k_utensils_h: 'Wat aanwezig is',
  k_utensils_p: 'Borden, kommen, glazen, mokken, kopjes, bestek, potten, pannen, snijplanken, messen, vergiet, rasp en keukengerei.',
  k_clean_h: 'Schoonmaakmiddelen',
  k_clean_p: 'Vuilniszakken, spons, doekjes en afwasmiddel liggen onder de gootsteen. Extra voorraad ligt in de bergkast bij de badkamer.',
  k_etiquette_h: 'Keuken-etiquette',
  k_eq1: '🍽️ Was en droog alle vaat direct na elk gebruik.',
  k_eq2: '🧹 Veeg de kookplaat, het aanrecht en de gootsteen na gebruik schoon.',
  k_eq3: '🗑️ Gooi afval in de meegeleverde vuilniszakken. Dichtgeknoopte zakken gaan naar de afvalinzameling van het gebouw — stuur ons een bericht als u de exacte plek wilt weten.',
  k_eq4: '♻️ Scheid uw afval — geel voor plastic en metaal, blauw voor papier, groen voor glas — via de openbare recyclingbakken op straat.',
  k_eq5: '🤝 Dit is een gedeelde keuken — laat hem precies zo achter als u hem aantrof.',
  rooms_title: 'Kamergidsen',
  ribeira_tagline: 'Elegant, ruim en stedelijk — de ziel van het oude Porto',
  feat_tv_h: 'Tv & Android-dongle',
  feat_tv_p: 'Gebruik de afstandsbediening van de Android-dongle (zwart, kleiner) om door apps te navigeren. Gebruik de tv-afstandsbediening om indien nodig naar de HDMI-ingang te schakelen. Druk op Home op de dongle-afstandsbediening om te beginnen.',
  feat_remotes_h: 'Twee afstandsbedieningen',
  ribeira_remotes_p: 'U heeft twee afstandsbedieningen: één voor de tv en één voor de Android-dongle. De dongle-afstandsbediening bedient ook de LED-strip achter de tv.',
  feat_led_h: 'LED-verlichting',
  ribeira_led_p: 'De LED-afstandsbediening bedient zowel de bedlamp als de LED-strip achter de tv. Stel er uw favoriete kleur en helderheid mee in.',
  ribeira_curtains_h: 'Gordijnen & ramen',
  ribeira_curtains_p: 'Behandel de gordijnen en het raambeslag voorzichtig. Sluit altijd alle ramen voordat u de kamer verlaat.',
  ribeira_storage_h: 'Opbergruimte & werkplek',
  ribeira_storage_p: 'Ribeira is de ruimste kamer met volop opbergruimte. De grote wandkast doet ook dienst als bureau of werkplek — ideaal voor thuiswerkers of langere verblijven.',
  feat_fan_h: 'Ventilator',
  feat_fan_p: 'In de kamer is een ventilator aanwezig. Pas de snelheid en richting naar wens aan.',
  feat_fridge_h: 'Mini-koelkast',
  feat_fridge_p: 'Er is een mini-koelkast voor uw persoonlijk gebruik. Houd hem schoon en netjes.',
  feat_sockets_h: 'Stopcontacten met USB & USB-C',
  feat_sockets_p: 'Alle stopcontacten hebben USB-A- en USB-C-poorten om uw apparaten gemakkelijk op te laden.',
  feat_mirror_h: 'Spiegel', feat_mirror_p: 'In de kamer is een passpiegel aanwezig.',
  feat_rail_h: 'Kledingrek', feat_rail_p: 'Er is een kledingrek om kleding op te hangen.',
  feat_blanket_h: 'Extra deken',
  feat_blanket_p: 'Een extra deken ligt opgeborgen in de poef aan het voeteneinde van het bed.',
  room_reminder: '💡 Voor vertrek: doe alle lichten uit · sluit alle ramen · schakel alle apparaten uit',
  douro_tagline: 'Warm, goudkleurig en heerlijk knus — als een zonsondergang in Porto',
  douro_remotes_p: 'Twee afstandsbedieningen aanwezig: één voor de tv en één voor de Android-dongle. De LED-afstandsbediening bedient de kleur en helderheid van uw bedlamp.',
  douro_led_p: 'Gebruik de LED-afstandsbediening om de kleur en helderheid van uw bedlamp aan te passen. Stel de perfecte warme gloed in voor de avond.',
  douro_storage_h: 'Opbergruimte',
  douro_storage_p: 'Douro heeft een eigen opbergruimte voor uw spullen. Compact en perfect georganiseerd.',
  atlantico_tagline: 'Licht, rustig en luchtig — uw kustretraite in de stad',
  atlantico_remotes_p: 'Twee afstandsbedieningen aanwezig: tv en Android-dongle. De LED-afstandsbediening bedient de bedlamp.',
  atlantico_led_p: '⚠️ Om alleen de kleur van de bedlamp te wijzigen zonder de tv te beïnvloeden: zet eerst de tv uit en richt daarna de LED-afstandsbediening rechtstreeks op de bedlamp.',
  atlantico_desk_h: 'Bureau / werkplek',
  atlantico_desk_p: 'Atlântico heeft een eigen bureauruimte — perfect voor thuiswerk of langere verblijven in de stad.',
  bath_title: 'Badkamergids', bath_shared_h: 'Gedeelde badkamer',
  bath_shared_p: 'De badkamer wordt door alle gasten gedeeld. Wees attent en laat hem na elk gebruik schoon en klaar achter voor de volgende persoon.',
  bath_shower_h: 'Doucheduur',
  bath_shower_p: 'Vermijd zeer lange douches, vooral tijdens de drukke ochtenduren, zodat alle gasten warm water hebben.',
  bath_toilet_h: 'Toilet',
  bath_t1: '✔ Wacht altijd tot u zeker weet dat het doorspoelen volledig is gestopt.',
  bath_t2: '✔ Alleen toiletpapier in het toilet — niets anders.',
  bath_t3: '✘ Geen doekjes, wattenschijfjes of maandverband.',
  bath_cabinet_h: 'Bergkast',
  bath_cabinet_p: 'Extra toiletartikelen en schoonmaakmiddelen liggen in de bergkast naast de badkamer. Neem gerust wat u nodig heeft.',
  bath_dryer_h: 'Föhn',
  bath_dryer_p: 'In het spiegelkastje in de badkamer ligt een föhn. Leg hem na gebruik terug.',
  bath_adapter_h: 'Universele stekkeradapter',
  bath_adapter_p: 'In het spiegelkastje ligt een universele stekkeradapter — beschikbaar voor internationale gasten die er een nodig hebben.',
  transport_title: 'Porto verkennen',
  transport_sub: 'Porto is heel goed te belopen en goed verbonden met het openbaar vervoer',
  tr_metro_h: 'Dichtstbijzijnde metrohalte', tr_metro_map: 'Bekijk metrokaart',
  tr_bus_h: 'Bus & tram', tr_stcp: 'STCP-buslijnen',
  tr_ride_h: 'Taxi’s & ride-apps', tr_taxi: 'Taxi',
  tr_maps_h: 'Routebeschrijving vanaf Porto Peace Haven',
  nearby_title: 'Handige plekken in de buurt',
  nb_supermarket: 'Supermarkt', nb_pharmacy: 'Apotheek', nb_hospital: 'Ziekenhuis',
  nb_cafe: 'Restaurants', nb_transport: 'Vervoer', nb_atm: 'Geldautomaat', nb_laundry: 'Wasserette',
  go_btn: 'Ga →',
  porto_title: 'Ontdek Porto',
  porto_sub: 'Voorbij de ansichtkaarten — de plekken waardoor we hier graag wonen',
  tag_sunset: '🌅 Zonsondergang', porto_sunset_h: 'Beste plekken voor de zonsondergang',
  porto_sunset_p: 'Jardim do Morro in Vila Nova de Gaia biedt op het gouden uur spectaculaire uitzichten over de Douro en de Dom Luís-brug. Miradouro da Serra do Pilar is al even adembenemend.',
  tag_photo: '📸 Fotografie', porto_photo_h: 'Beste fotoplekken',
  porto_photo_p: 'De Dom Luís I-brug, de iconische Livraria Lello, de Ribeira-kade, de blauwe tegels van station São Bento en de kleurrijke huizen van Bonfim zijn allemaal niet te missen.',
  tag_rainy: '🌧️ Regendag', porto_rainy_h: 'Plan voor een regendag',
  porto_rainy_p: 'Boekhandel Livraria Lello, Casa da Música, het Serralves-museum voor hedendaagse kunst, of een lange, trage lunch in een traditionele tasca. De cafécultuur van Porto is gemaakt voor regendagen.',
  tag_classic: '🗺️ Klassiek', porto_classic_h: 'Klassieke route door Porto',
  porto_classic_p: 'Station São Bento → kathedraal Sé → Ribeira-kade → Dom Luís-brug → portwijnproeverij in een kelder in Gaia → zonsondergang bij Jardim do Morro. Een perfecte dag in één lus.',
  tag_food: '🍷 Eten & wijn', porto_food_h: 'Eten & wijn',
  porto_food_p: 'Een Francesinha bij Café Santiago, een pastel de nata bij een lokale padaria, bacalhau à Brás, en sluit af met een portwijnproeverij bij Graham’s of Taylor’s in Gaia. In Porto eet u goed.',
  tag_beach: '🏖️ Strand', porto_beach_h: 'Kust- & stranddag',
  porto_beach_p: 'Het strand van Matosinhos ligt op slechts 15 minuten met de metro — ideaal om te zwemmen, verse vis te eten bij de haventerrassen en te genieten van weidse Atlantische luchten. Foz do Douro is heerlijk voor een wandeling langs de rivier.',
  em_title: 'Noodgevallen & ondersteuning',
  em_sub: 'We hopen dat u dit nooit nodig heeft — maar het staat hier voor de zekerheid',
  em_112_h: 'Hulpdiensten', em_112_sub: 'Politie · Brandweer · Ambulance', em_call: 'Bel',
  em_host_h: 'Contact met de gastheer', em_host_sub: 'Voor elk probleem met de woning',
  em_hospital_h: 'Dichtstbijzijnde ziekenhuis', em_pharmacy_h: 'Apotheek 24 uur',
  em_ride_h: 'Uber / Bolt', em_taxi_h: 'Taxi',
  footer_rights: 'Alle rechten voorbehouden', copied: '✓ Gekopieerd!',
  nav_mapa: '🗺️ Kaart van Porto', nb_nos: 'NOS-winkel (simkaarten)',
  dl_guide_title: 'Offline gids downloaden',
  dl_guide_desc: 'Bewaar deze gids op uw apparaat — handig als u geen internet heeft.',
  dl_guide_btn: '⬇ Gids downloaden (EN)',
  map_title: 'Stadsplattegrond van Porto',
  map_sub: 'Onze favoriete plekken op de kaart — tik op een speld voor details en route',
  map_open: 'Open kaart', map_pdf_label: 'Officiële toeristische kaart van Porto',
  map_open_full: 'Open volledige kaart', map_download: 'Download PDF',
  nav_avaliar: '⭐ Beoordeel uw verblijf', bnav_avaliar: 'Review',
  av_section_title: 'Beoordeel uw verblijf',
  av_section_sub: 'Uw stem bepaalt alles wat we hier doen',
  av_eyebrow1: 'Uw mening', av_title1: 'Hoe bevalt uw verblijf tot nu toe?',
  av_lead1: 'Uw ervaring is wat ons drijft. Vertel ons hoe u zich voelt — het kost maar een paar seconden.',
  av_feel_excelente: 'Uitstekend', av_feel_boa: 'Goed', av_feel_regular: 'Kan beter', av_feel_ruim: 'Slecht',
  av_hint1: 'Geboekt via Booking? U kunt uw review nog steeds op Airbnb of Google achterlaten — dat helpt ons nog meer.',
  av_eyebrow2: 'Wat fijn', av_title2: 'Heerlijk om te horen 💛',
  av_lead2: 'Het blijft ons bij. Laat, als u wilt, een review achter waar u heeft geboekt — dat helpt andere reizigers dit hoekje van Porto te vinden.',
  av_q_platform: 'Waar heeft u uw verblijf geboekt?', av_plat_outra: 'Een ander platform',
  av_airbnb_h: 'Een review op Airbnb is goud waard',
  av_airbnb_p: 'Daar maken uw woorden het grootste verschil voor ons — en het kost minder dan een minuut.',
  av_airbnb_btn: 'Review op Airbnb', av_airbnb_alt: 'Liever een review op Google?',
  av_booking_h: 'Bedankt dat u bij ons verbleef',
  av_booking_p: 'Op Booking ontvangt u na check-out per e-mail een verzoek om een review. Wilt u ons nu al nog meer helpen, dan maakt een review op Google echt het verschil.',
  av_booking_btn: 'Review op Google',
  av_booking_alt: 'Heeft u een Airbnb-account? U kunt daar ook een review plaatsen',
  av_outra_h: 'Uw review helpt ons enorm',
  av_outra_p: 'Een review op Google kost minder dan een minuut en helpt andere reizigers ons te ontdekken.',
  av_outra_btn: 'Review op Google', av_back: '← Terug',
  av_eyebrow3: 'Vertel het ons', av_title3: 'Bedankt dat u het ons vertelt',
  av_lead3: 'We willen het meteen rechtzetten — tijdens uw verblijf, niet erna. Vertel ons wat er speelt en ons team pakt het met voorrang op.',
  av_f_room: 'In welke kamer verblijft u?',
  av_f_phase: 'In welke fase van uw verblijf bent u?',
  av_phase_select: 'Kies…', av_phase_arrival: 'Aankomst', av_phase_middle: 'Midden in het verblijf',
  av_phase_pre: 'Vóór check-out', av_phase_post: 'Na check-out',
  av_f_area: 'Wat kunnen we verbeteren?',
  av_area_cleaning: 'Schoonmaak', av_area_comfort: 'Comfort van de kamer', av_area_wifi: 'Wi-Fi',
  av_area_bathroom: 'Badkamer', av_area_kitchen: 'Keuken', av_area_noise: 'Geluid',
  av_area_comm: 'Communicatie', av_area_other: 'Anders',
  av_f_detail: 'Vertel het ons in uw eigen woorden',
  av_detail_ph: 'Wat is niet helemaal zoals u had verwacht? Hoe meer u ons vertelt, hoe sneller we het kunnen oplossen.',
  av_f_urgency: 'Vereist dit snelle actie?',
  av_urg_no: 'Nee, het is gewoon een suggestie', av_urg_yes: 'Ja, ik heb vandaag hulp nodig',
  av_urgent_p: 'Voor iets dringends, neem meteen contact met ons op — we reageren zo snel als we kunnen.',
  av_urgent_btn: 'Praat nu met ons via WhatsApp',
  av_f_via: 'Hoe kunnen we u het best bereiken', av_via_wa: 'WhatsApp', av_via_phone: 'Telefoon',
  av_f_contact: 'Naam of telefoonnummer',
  av_contact_opt: '(optioneel — het helpt ons u te antwoorden)',
  av_contact_ph: 'Bijv.: Maria · +351 9XX XXX XXX',
  av_submit: 'Verstuur suggestie',
  av_form_note: 'Uw bericht gaat rechtstreeks naar ons team. Het wordt nooit openbaar gemaakt.',
  av_thanks_title: 'We hebben uw bericht ontvangen',
  av_thanks_lead: 'We pakken dit met voorrang op. Bedankt dat u ons de kans geeft uw verblijf beter te maken.',
  av_thanks_box_h: 'Wanneer alles voelt zoals het hoort…',
  av_thanks_box_p: '…horen we graag van u. Maar alleen wanneer het goed voelt voor u — laat ons het eerst rechtzetten.',
  av_thanks_btn: 'Laat een review achter', av_thanks_back: '← Opnieuw beginnen',
  av_alert_areas: 'Kies minstens één gebied dat we kunnen verbeteren.',
  av_wa_msg: 'Hallo! Ik verblijf in Porto Peace Haven en ik heb ergens hulp bij nodig tijdens mijn verblijf.',
  ficha_g_comfort: 'Voor uw comfort', ficha_g_work: 'Om te werken', ficha_g_rest: 'Om te rusten',
  ficha_g_light: 'Licht, geluid &amp; scherm', ficha_g_storage: 'Opbergruimte &amp; details',
  ficha_cta_p: 'We hebben deze kamer tot in het kleinste detail voorbereid, zodat u beter uitrust. Als iets niet is zoals u hoopte, zeg het ons nu — we zetten het liever recht tijdens uw verblijf dan erna.',
  ficha_cta_suggest: 'Kan hier iets beter?', ficha_cta_review: 'Beoordeel mijn verblijf ⭐',
  rib_intro: 'Het diepe blauw van de Douro in de schemering. De grootste van de drie kamers — ruimte om te ademen, en ruimte om zonder haast te werken.',
  rib_comfort: '<li>Een bed met twee kussens — één hoger, één lager — zodat u slaapt zoals het u bevalt.</li><li>Een ventilator, en ramen die wijd opengaan om de kamer te luchten en te verkoelen (er is geen airco, maar Porto komt prettig naar binnen).</li><li>Een mini-koelkast voor alles wat u dichtbij wilt houden.</li>',
  rib_work: '<li>Een echte bureaustoel — geen eetkamerstoel die zich voordoet als bureaustoel.</li><li>Een brede, in de muur ingebouwde plank die ook dienstdoet als bureau — gemaakt voor thuiswerk en langere verblijven.</li>',
  rib_light: '<li>Twee RGB-LED-lampen plus een LED-strip achter de tv, allemaal met afstandsbediening — kies de kleur en de sfeer waar u vanavond zin in heeft.</li><li>Een tv met een Android-speler: Netflix, HBO Max, Prime Video, Disney+ met uw eigen accounts — vergeet niet uit te loggen vóór check-out.</li>',
  rib_storage: '<li>Ruime opbergruimte plus een kledingrek, met volop plek voor uw koffer.</li><li>Twee ingelijste prenten van de Ribeira, gekozen met deze kamer in gedachten.</li><li>Stopcontacten met USB-A en USB-C, en een passpiegel.</li>',
  dou_intro: 'Het warme goud van een late namiddag boven de Douro. De knusste kamer — gemaakt om te vertragen en goed te slapen.',
  dou_comfort: '<li>Een bed met twee kussens — één hoger, één lager — kies degene waarop u het best slaapt.</li><li>Een ventilator, en ramen die opengaan om de kamer te luchten en te verkoelen (geen airco, maar het frist goed op).</li><li>Een mini-koelkast voor uw persoonlijk gebruik.</li>',
  dou_rest: '<li>Hier geen bureau, en dat is met opzet — Douro is de kamer om af te schakelen, niet om te werken.</li><li>Warm licht, kalme lucht en een zachte gouden toon, gemaakt voor het einde van de dag.</li>',
  dou_light: '<li>Twee RGB-LED-lampen plus een LED-strip achter de tv, allemaal met afstandsbediening.</li><li>Een tv met een Android-speler: Netflix, HBO Max, Prime Video, Disney+ met uw eigen accounts — log uit vóór check-out.</li>',
  dou_curio: '<strong>Een klein Douro-detail:</strong> de lamp heeft drie lichttemperaturen — amber, wit en een mix van beide. Elke keer dat u hem aanzet, verandert hij. Zet hem een paar keer aan en uit en houd degene die goed voelt.',
  dou_storage: '<li>Een eigen opbergruimte en een kledingrek.</li><li>Twee ingelijste prenten passend bij het thema van de kamer, stopcontacten met USB-A en USB-C, en een spiegel.</li>',
  atl_intro: 'Het lichtblauw van de oceaan op een heldere ochtend. Luchtig, licht en sereen — om langzaam wakker te worden.',
  atl_comfort: '<li>Een bed met twee kussens — één hoger, één lager — kies wat u bevalt.</li><li>Een ventilator, en ramen die opengaan en de kamer prachtig luchten (geen airco, maar het verkoelt goed).</li><li>Een mini-koelkast voor uw persoonlijk gebruik.</li>',
  atl_work: '<li>Een bureaustoel en een klein werktafeltje — genoeg om met een rustig uitzicht een paar e-mails te beantwoorden.</li>',
  atl_light: '<li>Twee RGB-LED-lampen plus een LED-strip achter de tv, allemaal met afstandsbediening.</li><li>Een tv met een Android-speler: Netflix, HBO Max, Prime Video, Disney+ met uw eigen accounts — log uit vóór check-out.</li><li><strong>Goed om te weten:</strong> om alleen de lampkleur te wijzigen zonder de tv te beïnvloeden, zet u eerst de tv uit en richt u daarna de LED-afstandsbediening recht op de lamp.</li>',
  atl_storage: '<li>Een kledingrek om uw spullen op te hangen.</li><li>Een ingelijste prent passend bij het thema van de kamer, stopcontacten met USB-A en USB-C, en een spiegel.</li>',
  room_photos: 'Foto’s van de kamer',
  wa_msg_contact: 'Hallo! Ik verblijf in Porto Peace Haven — kunt u me ergens mee helpen?',
  porto_intro: 'Porto is geen stad die u van een lijstje afvinkt. Het beloont de slenteraars — zij die de smalle straat inslaan, die even op de trap gaan zitten, die bestellen wat ze niet kunnen uitspreken. Hier zijn de plekken waar we een vriend naartoe zouden sturen: een paar die iedereen kent, en een paar waar de meeste bezoekers straal voorbijlopen.',
  porto_g1_title: 'Porto buiten de gebaande paden',
  porto_g2_title: 'De klassiekers, op uw gemak',
  porto_wonder_tag: '🌀 Anders',
  porto_wonder_h: 'Wondersense — het museum van de vijf zintuigen',
  porto_wonder_p: 'Een paar passen van Livraria Lello, vijf verdiepingen met ruimtes gebouwd om te proeven, te horen, aan te raken en te ruiken. Zestien ervaringen, geen twee hetzelfde — het soort uur waarin volwassenen vergeten op hun telefoon te kijken. Reserveer vooraf een tijdslot.',
  porto_capela_tag: '🍷 Bijzonder',
  porto_capela_h: 'Capela Incomum — wijn in een kapel',
  porto_capela_p: 'Een kleine wijnbar in een voormalige kapel — het altaar staat er nog. Gedempt licht, een rustig glas rode Douro, en het vreemde, mooie gevoel van een toost onder een gewelfd plafond. Niet iets waar u per ongeluk binnenloopt.',
  porto_virtudes_tag: '🌳 Zonsondergang',
  porto_virtudes_h: 'Passeio das Virtudes — de zonsondergang van de locals',
  porto_virtudes_p: 'Terwijl iedereen zich verdringt bij Jardim do Morro aan de overkant, komen de locals hier: een tuin die in terrassen langs de heuvel naar beneden tuimelt, met de grootste ginkgoboom van Portugal en een vrij uitzicht over de Douro. Neem iets te drinken mee en blijf voor de kleur van de lucht.',
  porto_guindais_tag: '🌉 Uitzicht',
  porto_guindais_h: 'Escadas dos Guindais — onder de brug',
  porto_guindais_p: 'Een steile, smalle trap die langs de rots naar beneden duikt, vlak onder de Dom Luís I-brug. U heeft de brug op elke ansichtkaart gezien — hier staat u onder zijn ijzeren buik, dichtbij genoeg om hem te horen. Doe het rustig aan op de weg naar beneden.',
  porto_almas_tag: '🔵 Azulejos',
  porto_almas_h: 'Capela das Almas — een kapel van blauwe tegels',
  porto_almas_p: 'Sta in de drukke Rua de Santa Catarina even stil en kijk omhoog: zestienduizend blauwe azulejos omhullen de hele buitenkant van deze kapel als een verhaal verteld op de muur. De meeste mensen lopen er onderweg naar de winkels langs. Doe dat niet.',
  porto_foto_tag: '📷 Gratis',
  porto_foto_h: 'Centro Português de Fotografia — de oude gevangenis',
  porto_foto_p: 'Een fotografiemuseum gevestigd in een 19e-eeuwse gevangenis — u ziet nog de celdeuren en de ijzeren loopbruggen. Gratis toegang, zelden druk, en stilletjes een van de meest sfeervolle gebouwen van de stad.',
  porto_lello_tag: '📚 Klassiek',
  porto_lello_h: 'Livraria Lello — ga vroeg',
  porto_lello_p: 'Ja, hij is beroemd, en ja, er is een rij. De moeite waard — maar koop het tijdslotticket online en ga precies bij opening of in het laatste uur, wanneer de uitgesneden trap bijna van u alleen is. De ticketprijs gaat van de prijs van een boek af.',
  porto_morro_tag: '🌅 Niet te missen',
  porto_morro_h: 'Steek de brug over op het bovendek',
  porto_morro_p: 'Loop over het bovendek van de Dom Luís I-brug — de metro deelt het, maar er is plek, en het uitzicht doet u midden in uw stap stoppen. Aan de kant van Gaia is Jardim do Morro de zonsondergang van de ansichtkaart. Ga — ga alleen vroeg om een plekje te vinden.',
  porto_rib_tag: '🏛️ Het hart',
  porto_rib_h: 'Verdwaal in de Ribeira',
  porto_rib_p: 'Het oudste deel van Porto, pal aan het water — scheve huizen, was tussen de ramen gespannen, steegjes die nergens en overal heen leiden. Toeristisch, ja. Nog steeds de ziel van de stad. Ga in de ochtend, voordat de boten vollopen.',
  porto_gaia_tag: '🍷 Proeven',
  porto_gaia_h: 'Steek over naar Gaia voor een portproeverij',
  porto_gaia_p: 'De portwijnkelders staan op een rij langs de oever van Gaia, tien minuten lopen over de brug. Kies een van de kleinere huizen voor een ongehaaste proeverij — ze leggen het verschil uit tussen een tawny en een ruby, en dat vergeet u nooit meer.',
  porto_cta_h: 'Een hoekje gevonden waar u van hield?',
  porto_cta_p: 'Als Porto — en ons kleine plekje erin — deel werd van een mooie herinnering, helpt een review de volgende reiziger ook de weg hierheen te vinden.',
  porto_cta_btn: 'Laat een review achter ⭐',
  nav_bye: '🧳 Voordat u vertrekt', bye_title: 'Voordat u vertrekt',
  bye_sub: 'Een kort lijstje, een klein verzoek, en een dankjewel.',
  bye_checklist_h: 'Een klein checklijstje voor de kamer',
  bye_checklist: '<li>Sluit de ramen — Porto-regen vindt zijn weg naar binnen via de oude raamkozijnen.</li><li>Doe alle lichten en de LED-lampen uit.</li><li>Wacht een paar seconden en controleer of het toilet is uitgespoeld.</li><li>Log uit bij Netflix, HBO Max, Prime Video en Disney+ op de tv — uw accounts, uw privacy.</li><li>Zet de ventilator, de tv en de mini-koelkast uit als u die heeft gebruikt.</li><li>Laat de sleutel achter zoals afgesproken.</li>',
  bye_ask_h: 'Voordat u gaat',
  bye_ask_p: 'Als we deel werden van een mooie herinnering aan uw reis, betekent uw review de wereld voor ons — en helpt het andere reizigers de weg te vinden naar dit hoekje van Porto.',
  bye_review_btn: 'Laat een review achter ⭐',
  bye_note_link: 'Of vertel het ons eerst privé — wat had beter gekund?',
  common_photos: 'Onze gedeelde ruimtes',
  checkin_late_desc: 'Stuur ons vooraf een bericht, dan sturen we u de toegangsinstructies.',
  rule_condo_h: 'Gemeenschappelijke ruimtes van het gebouw',
  rule_c1: 'We huren deze ruimte in een particulier woongebouw — behandel de lift, de hal en de gangen met extra zorg.',
  rule_c2: 'Houd uw stem zacht in de gedeelde ruimtes van het gebouw, vooral vroeg in de ochtend en laat op de avond — achter die deuren wonen buren.',
  rule_c3: 'Deze kleine attentheid is wat ons welkom houdt in het gebouw.',
  nb_pharmacy_2: 'Apotheek (tot 20.00 uur)',
  em_alt_note: 'Als we niet meteen opnemen, probeer dan de reservelijn:',
  back_home: '← Start',
  hub_review: 'Laat een review achter', hub_wifi: 'Wi-Fi', hub_checkin: 'Check-in / out',
  hub_room: 'Mijn kamer', hub_kitchen: 'Keuken', hub_bathroom: 'Badkamer',
  hub_rules: 'Huisregels', hub_porto: 'Verken Porto', hub_bye: 'Voordat u vertrekt', hub_help: 'Hulp',
  see_more: 'Meer tonen', see_less: 'Minder tonen',
  home_review_h: 'Geniet u van uw verblijf?',
  home_review_p: 'Uw review betekent de wereld voor ons — en het kost maar een minuut.',
  home_review_btn: 'Laat een review achter →',
  home_review2_h: 'Nog één ding',
  home_review2_p: 'Als we uw reis een beetje mooier hebben gemaakt, helpt een review de volgende reiziger ons te vinden. Dank u wel.',
  entry_checkin_h: 'Check-in &amp; Check-out',
  entry_checkin_p: 'Check-in vanaf 16:00 · Check-out vóór 11:00. Sleutels in externe kluisjes.',
  entry_kitchen_h: 'Keukengids',
  entry_kitchen_p: 'Alles wat u nodig heeft om veilig te koken en de gedeelde keuken te gebruiken.',
  entry_bathroom_h: 'Badkamergids',
  entry_bathroom_p: 'Hoe u de gedeelde badkamer, de föhn en de universele adapter gebruikt.',
  entry_rules_h: 'Huisregels',
  entry_rules_p: 'Rusttijden, niet roken, en het kleine respect dat we het gebouw verschuldigd zijn.',
  entry_bye_h: 'Voordat u vertrekt',
  entry_bye_p: 'Een klein checklijstje voor de kamer en een rustig moment om dank u te zeggen.',
  see_all_porto: 'Bekijk alle 14 plekken →',
  home_help_h: 'Hulp nodig?',
  home_help_p: 'We zijn één tik verwijderd. Voor echte noodgevallen belt u 112.',
  home_help_more: 'Alle noodinformatie →',
  ppx_free: 'GRATIS', home_map_h: 'Ontdek Porto op de kaart',
  av_which_room: 'In welke kamer verblijft u?',
  co_notify_h: 'Laat ons weten dat u vertrekt',
  co_notify_p: 'Een kort bericht zodat we weten dat de kamer klaar is om gereedgemaakt te worden — en zodat we u een goede terugreis kunnen wensen.',
  co_notify_btn: '📩 Laat het weten via WhatsApp',
  co_wa_msg: 'Hallo! Ik check nu uit van kamer {room}. Alles is in orde. Bedankt voor het verblijf 💛',
  phase_q: 'Waar bent u in uw verblijf?',
  phase_checkin: 'Net aangekomen', phase_mid: 'Midden in verblijf', phase_checkout: 'Aan het uitchecken',
  welcome_h: 'Welkom bij Porto Peace Haven',
  welcome_p: 'Een korte rondleiding langs wat u hier kunt doen:',
  welcome_rules_h: 'Huisregels',
  welcome_rules_p: 'Een leesbeurt van 30 seconden — houdt iedereen in het gebouw blij.',
  welcome_porto_h: 'Ontdek Porto',
  welcome_porto_p: 'Zorgvuldig gekozen plekken buiten de toeristenroute + klassiekers die uw tijd waard zijn.',
  welcome_go: 'Begrepen — verken de gids →',
  fab_review: 'Laat een review achter', fab_suggest: 'Stuur een suggestie',
  fab_help: 'Dringende hulp via WhatsApp', fab_send: 'Verstuur',
  fab_thanks: 'Begrepen — dank u wel.', fab_ph: 'Korte notitie over uw verblijf…',
  review_proof: '⭐ {count} gasten gaven afgelopen maand 5 sterren',
  place_tips_h: 'Goed om te weten',
  place_go: 'Routebeschrijving vanaf Porto Peace Haven',
  place_hours_always: 'Altijd open',
  place_review_h: 'Geniet u van Porto?',
  place_review_p: 'Als ons kleine gidsje uw dag mooier maakte, helpt een review de volgende reiziger ons ook te vinden.',
  place_review_btn: 'Laat een review achter ⭐',
  back_porto: '← Ontdek Porto',
  porto_lello_intro: 'We zouden de trap kunnen beschrijven. We doen het niet — sommige dingen moet u zelf beklimmen.',
  porto_lello_tips: '<li>Koop het tijdslotticket online; de rij voor de deur is bruut.</li><li>Ga precies bij opening of in het laatste uur voor bijna lege foto’s.</li><li>De ticketprijs gaat af van elk boek dat u koopt.</li>',
  porto_wondersense_intro: 'Een museum dat u proeft, hoort en aanraakt. We verklappen geen enkele ruimte — u moet er echt heen.',
  porto_wondersense_tips: '<li>Reserveer vooraf een tijdslot — toegang gebeurt in kleine groepjes met een vast tijdstip.</li><li>Reken minstens een uur; het beslaat vijf verdiepingen.</li><li>Een perfect plan voor een regenachtige middag.</li>',
  porto_morro_intro: 'Iedereen zegt dat hier de mooiste zonsondergang van Porto is. Voor één keer heeft iedereen gelijk.',
  porto_morro_tips: '<li>Steek over op het bovendek van de brug — het uitzicht doet u midden in uw stap stoppen.</li><li>Kom 30–40 min vóór zonsondergang voor een plekje op het gras.</li><li>Neem iets te drinken mee; er zijn kiosken in de buurt.</li>',
  porto_gaia_intro: 'Portwijn rijpt al 300 jaar op deze rivieroever. Besteed een uur om te ontdekken waarom.',
  porto_gaia_tips: '<li>Kies een kleiner huis voor een ongehaaste, persoonlijke proeverij.</li><li>Reserveer vooraf in de zomer — de beroemde kelders lopen vol.</li><li>Vraag het verschil tussen een tawny en een ruby; dat vergeet u nooit meer.</li>',
  porto_capela_intro: 'Een wijnbar in een echte voormalige kapel. We zeggen alleen dit: bestel een glas en kijk omhoog.',
  porto_capela_tips: '<li>Ga voor een rustig glas, niet voor een groot avondje uit — hij is klein en intiem.</li><li>Portugese wijnen per glas; vraag het personeel u te begeleiden.</li><li>Het best vroeg op de avond, voordat het vol loopt.</li>',
  porto_virtudes_intro: 'De zonsondergang die de locals voor zichzelf houden. Nu kent u hem ook.',
  porto_virtudes_tips: '<li>Neem een drankje en iets om op te zitten mee — het is een grazige, terrasvormige helling.</li><li>Kom ongeveer 30 minuten vóór zonsondergang voor het beste licht.</li><li>Rustiger dan Jardim do Morro aan de overkant.</li>',
  porto_guindais_intro: 'Een trap, geen monument — maar hij reikt u de Dom Luís-brug aan als niets anders.',
  porto_guindais_tips: '<li>Hij is steil — draag comfortabele schoenen en neem de tijd.</li><li>Combineer hem met een wandeling langs de Ribeira-kade beneden.</li><li>Er is een kabelbaan in de buurt als u liever niet terug omhoog klimt.</li>',
  porto_almas_intro: 'Zestienduizend blauwe tegels, midden in de drukste winkelstraat. De meeste mensen missen ze. U niet.',
  porto_almas_tips: '<li>Kijk omhoog — de hele buitenkant is het kunstwerk.</li><li>Ochtendlicht laat de blauwe tegels gloeien.</li><li>Hij staat in de Rua de Santa Catarina — combineer hem met een koffie in een klassiek café.</li>',
  porto_foto_intro: 'Een fotografiemuseum in een 19e-eeuwse gevangenis. Ja, u kunt de oude cellen zien. Ja, het is gratis.',
  porto_foto_tips: '<li>Gratis toegang — een van de best bestede uurtjes in Porto.</li><li>Het gebouw zelf is het halve bezoek; let op de celdeuren.</li><li>Zelden druk — een rustige keuze voor een hete of regenachtige middag.</li>',
  porto_rib_intro: 'Toeristisch? Een beetje. De ziel van Porto? Volledig. Ga vroeg en laat uzelf verdwalen.',
  porto_rib_tips: '<li>Ga in de ochtend, voor de drukte en de boottochten.</li><li>Dwaal door de kleine steegjes achter de kade — dat is de echte Ribeira.</li><li>Een mooi startpunt om de brug naar Gaia over te steken.</li>',
  porto_g3_title: 'Waar te eten',
  porto_conga_tag: '🥪 Goedkoop eten',
  porto_conga_h: 'Conga — de legendarische bifana',
  porto_conga_p: 'Een piepklein, onopgesmukt instituut sinds 1976. De bifana — langzaam gegaard varkensvlees in een zacht broodje — is een van de goedkoopste topmaaltijden in Porto.',
  porto_conga_intro: 'Een varkensbroodje zo lekker dat het al bijna 50 jaar beroemd is. Bestel een bifana en een koud drankje — dat is het hele plan.',
  porto_conga_tips: '<li>Verwacht geen decor — verwacht smaak.</li><li>Perfect voor een snelle, heel goedkope lunch.</li><li>Druk op piekuren, maar het gaat snel.</li>',
  porto_capanegra_tag: '🍽️ Dichtbij & traditioneel',
  porto_capanegra_h: 'Capa Negra II — dineren vlak bij uw deur',
  porto_capanegra_p: 'Een betrouwbaar, druk lokaal restaurant op loopafstand van het appartement. Gegrild vlees, vis, en een serieuze francesinha.',
  porto_capanegra_intro: 'Het dichtstbijzijnde echte Portugese diner bij uw deur — en ja, ze maken een serieuze francesinha.',
  porto_capanegra_tips: '<li>De francesinha is enorm — overweeg te delen.</li><li>Druk in het weekend; ga wat eerder.</li><li>Een makkelijke wandeling vanaf het appartement.</li>',
  porto_tapabento_tag: '🍷 Parel in het middensegment',
  porto_tapabento_h: 'Tapabento — kleine plek, grote reputatie',
  porto_tapabento_p: 'Moderne Portugese keuken en petiscos, met echte zorg bereid. Klein, warm en steevast uitstekend.',
  porto_tapabento_intro: 'Pal achter station São Bento, een piepklein plekje dat locals dagen vooruit reserveren. Daar is een reden voor.',
  porto_tapabento_tips: '<li>Reserveer vooraf — het is klein en heel populair.</li><li>Geweldig voor een bijzonder maar ontspannen diner.</li><li>Op een paar passen van station São Bento.</li>',
  porto_antiqvvm_tag: '✨ Bijzondere gelegenheid',
  porto_antiqvvm_h: 'Antiqvvm — een avond met twee Michelinsterren',
  porto_antiqvvm_p: 'Verfijnde Portugese keuken in een romantisch 19e-eeuws huis met uitzicht op de Douro. Een echte gelegenheid.',
  porto_antiqvvm_intro: 'Twee Michelinsterren, een 19e-eeuws huis, een uitzicht over de Douro. Voor de avond die u zich wilt herinneren.',
  porto_antiqvvm_tips: '<li>Reserveer ruim van tevoren.</li><li>Het proefmenu is de manier.</li><li>Verzorgd-casual — het is een gelegenheid.</li>',
  cat_solo: 'Solo', cat_couple: 'Samen', cat_family: 'Gezin', cat_group: 'Groep', cat_relax: 'Ontspannen',
  meta_min: 'min',
  checkout_cta_h: 'Aan het uitchecken?',
  checkout_cta_p: 'Begin uw check-out — het kost maar een minuut',
  map_pins_note: 'Tik op een speld om de plek te openen en de route te krijgen. De posities van de spelden zijn bij benadering.',
  map_pdf_h: 'Officiële toeristische kaart (PDF)',
  map_see_place: 'Bekijk details',
  map_home_pin: 'Porto Peace Haven · uw verblijf',
});

/* ═══════════════════════════════════════════════════════════════
   TRANSLATION AUDIT — task #12
   Fills the FR / ES / DE / IT gaps the audit found: place pages,
   restaurants and recently-added keys that were falling back to EN.
═══════════════════════════════════════════════════════════════ */
Object.assign(translations.fr, {
  checkin_late_desc: 'Envoyez-nous un message à l\'avance et nous vous enverrons les instructions d\'entrée.',
  rule_condo_h: 'Parties communes de l\'immeuble',
  rule_c1: 'Nous louons cet espace dans un immeuble résidentiel privé — merci de traiter l\'ascenseur, le hall et les couloirs avec un soin particulier.',
  rule_c2: 'Parlez doucement dans les espaces partagés de l\'immeuble, surtout tôt le matin et tard le soir — des voisins vivent derrière ces portes.',
  rule_c3: 'C\'est cette petite attention qui nous garde les bienvenus dans l\'immeuble.',
  nb_pharmacy_2: 'Pharmacie (jusqu\'à 20h)',
  em_alt_note: 'Si nous ne répondons pas tout de suite, essayez la ligne de secours :',
  back_porto: '← Découvrir Porto',
  tr_bus_h: 'Bus & tramway',
  k_eq3: '🗑️ Jetez les déchets dans les sacs poubelle fournis. Les sacs fermés vont à la collecte des déchets de l\'immeuble — écrivez-nous si vous voulez l\'emplacement exact.',
  k_eq4: '♻️ Merci de trier les déchets — jaune pour le plastique et le métal, bleu pour le papier, vert pour le verre — dans les conteneurs de recyclage publics dans la rue.',
  place_tips_h: 'Bon à savoir',
  place_go: 'Itinéraire depuis Porto Peace Haven',
  place_hours_always: 'Ouvert à tout moment',
  place_review_h: 'Vous aimez Porto ?',
  place_review_p: 'Si notre petit guide a rendu votre journée meilleure, un avis aide le prochain voyageur à nous trouver aussi.',
  place_review_btn: 'Laisser un avis ⭐',
  porto_g3_title: 'Où manger',
  porto_lello_intro: 'Nous pourrions décrire l\'escalier. Nous ne le ferons pas — certaines choses, il faut les gravir soi-même.',
  porto_lello_tips: '<li>Achetez le billet horodaté en ligne ; la file d\'attente sur place est rude.</li><li>Allez dès l\'ouverture ou à la dernière heure pour des photos presque vides.</li><li>Le prix du billet est déduit de tout livre acheté.</li>',
  porto_wondersense_intro: 'Un musée qui se goûte, s\'écoute et se touche. Nous ne dévoilerons pas une seule salle — il faut vraiment y aller.',
  porto_wondersense_tips: '<li>Réservez un créneau à l\'avance — l\'entrée se fait en petits groupes horodatés.</li><li>Comptez au moins une heure ; le musée s\'étend sur cinq étages.</li><li>Un plan parfait pour un après-midi pluvieux.</li>',
  porto_morro_intro: 'Tout le monde dit que c\'est le plus beau coucher de soleil de Porto. Pour une fois, tout le monde a raison.',
  porto_morro_tips: '<li>Traversez par le tablier supérieur du pont — la vue vous arrête net.</li><li>Arrivez 30 à 40 min avant le coucher du soleil pour une place sur l\'herbe.</li><li>Apportez de quoi boire ; il y a des kiosques à proximité.</li>',
  porto_gaia_intro: 'Le porto vieillit sur cette rive depuis 300 ans. Passez une heure à découvrir pourquoi.',
  porto_gaia_tips: '<li>Choisissez une maison plus petite pour une dégustation tranquille et personnelle.</li><li>Réservez à l\'avance en été — les caves célèbres se remplissent.</li><li>Demandez la différence entre un tawny et un ruby ; vous ne l\'oublierez jamais.</li>',
  porto_capela_intro: 'Un bar à vin dans une ancienne chapelle, une vraie. Nous dirons juste ceci : commandez un verre et levez les yeux.',
  porto_capela_tips: '<li>Venez pour un verre tranquille, pas pour une grande soirée — c\'est petit et intime.</li><li>Des vins portugais au verre ; demandez au personnel de vous guider.</li><li>Mieux vaut tôt dans la soirée, avant que ça se remplisse.</li>',
  porto_virtudes_intro: 'Le coucher de soleil que les habitants gardent pour eux. Maintenant, vous le connaissez aussi.',
  porto_virtudes_tips: '<li>Apportez une boisson et de quoi vous asseoir — c\'est une pente herbeuse en terrasses.</li><li>Arrivez environ 30 minutes avant le coucher du soleil pour la plus belle lumière.</li><li>Plus calme que le Jardim do Morro de l\'autre côté du fleuve.</li>',
  porto_guindais_intro: 'Un escalier, pas un monument — mais il vous offre le pont Dom Luís comme nul autre.',
  porto_guindais_tips: '<li>C\'est raide — portez des chaussures confortables et prenez votre temps.</li><li>Associez-le à une promenade le long des quais de la Ribeira en contrebas.</li><li>Il y a un funiculaire à proximité si vous préférez ne pas remonter à pied.</li>',
  porto_almas_intro: 'Seize mille carreaux bleus, au milieu de la rue commerçante la plus animée. La plupart des gens passent à côté. Pas vous.',
  porto_almas_tips: '<li>Levez les yeux — toute la façade est l\'œuvre d\'art.</li><li>La lumière du matin fait briller les azulejos bleus.</li><li>C\'est sur la Rua de Santa Catarina — associez la visite à un café dans un établissement classique.</li>',
  porto_foto_intro: 'Un musée de la photographie dans une prison du XIXe siècle. Oui, on voit les anciennes cellules. Oui, c\'est gratuit.',
  porto_foto_tips: '<li>Entrée gratuite — l\'une des meilleures heures de Porto pour le prix.</li><li>Le bâtiment lui-même fait la moitié de la visite ; cherchez les portes de cellules.</li><li>Rarement bondé — un choix tranquille pour un après-midi chaud ou pluvieux.</li>',
  porto_rib_intro: 'Touristique ? Un peu. L\'âme de Porto ? Totalement. Allez-y tôt et laissez-vous perdre.',
  porto_rib_tips: '<li>Allez-y le matin, avant la foule et les excursions en bateau.</li><li>Promenez-vous dans les ruelles derrière les quais — c\'est la vraie Ribeira.</li><li>Un excellent point de départ pour traverser le pont vers Gaia.</li>',
  porto_conga_tag: '🥪 Manger pas cher',
  porto_conga_h: 'Conga — la bifana légendaire',
  porto_conga_p: 'Une institution minuscule et sans chichis depuis 1976. La bifana — du porc mijoté dans un pain moelleux — est l\'un des meilleurs repas bon marché de Porto.',
  porto_conga_intro: 'Un sandwich au porc si bon qu\'il est célèbre depuis presque 50 ans. Commandez une bifana et une boisson fraîche — c\'est tout le programme.',
  porto_conga_tips: '<li>N\'attendez pas de décor — attendez de la saveur.</li><li>Parfait pour un déjeuner rapide et très bon marché.</li><li>Bondé aux heures de pointe, mais ça avance vite.</li>',
  porto_capanegra_tag: '🍽️ Proche et traditionnel',
  porto_capanegra_h: 'Capa Negra II — dîner près de chez vous',
  porto_capanegra_p: 'Un restaurant local fiable et animé, à quelques pas de l\'appartement. Viandes grillées, poisson, et une vraie francesinha.',
  porto_capanegra_intro: 'Le dîner portugais authentique le plus proche de votre porte — et oui, ils font une vraie francesinha.',
  porto_capanegra_tips: '<li>La francesinha est énorme — pensez à la partager.</li><li>Bondé le week-end ; allez-y un peu plus tôt.</li><li>Une promenade facile depuis l\'appartement.</li>',
  porto_tapabento_tag: '🍷 Pépite milieu de gamme',
  porto_tapabento_h: 'Tapabento — petit lieu, grande réputation',
  porto_tapabento_p: 'Cuisine portugaise moderne et petiscos préparés avec un vrai soin. Petit, chaleureux et toujours excellent.',
  porto_tapabento_intro: 'Juste derrière la gare de São Bento, un lieu minuscule que les habitants réservent des jours à l\'avance. Il y a une raison.',
  porto_tapabento_tips: '<li>Réservez à l\'avance — c\'est petit et très prisé.</li><li>Idéal pour un dîner spécial mais détendu.</li><li>À quelques pas de la gare de São Bento.</li>',
  porto_antiqvvm_tag: '✨ Occasion spéciale',
  porto_antiqvvm_h: 'Antiqvvm — une soirée deux étoiles Michelin',
  porto_antiqvvm_p: 'Cuisine portugaise gastronomique dans une romantique maison du XIXe siècle avec vue sur le Douro. Une véritable occasion.',
  porto_antiqvvm_intro: 'Deux étoiles Michelin, une maison du XIXe siècle, une vue sur le Douro. Pour la soirée dont vous voulez vous souvenir.',
  porto_antiqvvm_tips: '<li>Réservez bien à l\'avance.</li><li>Le menu dégustation est la voie à suivre.</li><li>Tenue élégante décontractée — c\'est une occasion.</li>',
});

Object.assign(translations.es, {
  checkin_late_desc: 'Envíenos un mensaje con antelación y le enviaremos las instrucciones de entrada.',
  rule_condo_h: 'Zonas comunes del edificio',
  rule_c1: 'Alquilamos este espacio dentro de un edificio residencial privado — trate el ascensor, el portal y los pasillos con especial cuidado.',
  rule_c2: 'Hable en voz baja en las zonas comunes del edificio, sobre todo a primera hora de la mañana y por la noche — detrás de esas puertas viven vecinos.',
  rule_c3: 'Esta pequeña consideración es lo que nos mantiene bienvenidos en el edificio.',
  nb_pharmacy_2: 'Farmacia (hasta las 20h)',
  em_alt_note: 'Si no respondemos enseguida, pruebe la línea alternativa:',
  back_porto: '← Descubrir Oporto',
  k_eq3: '🗑️ Tire la basura en las bolsas proporcionadas. Las bolsas cerradas van a la recogida de residuos del edificio — escríbanos si quiere saber el lugar exacto.',
  k_eq4: '♻️ Separe el reciclaje — amarillo para plástico y metal, azul para papel, verde para vidrio — usando los contenedores públicos de la calle.',
  place_tips_h: 'Bueno saber',
  place_go: 'Cómo llegar desde Porto Peace Haven',
  place_hours_always: 'Abierto a cualquier hora',
  place_review_h: '¿Disfrutando de Oporto?',
  place_review_p: 'Si nuestra pequeña guía mejoró su día, una reseña ayuda al próximo viajero a encontrarnos también.',
  place_review_btn: 'Dejar una reseña ⭐',
  porto_g3_title: 'Dónde comer',
  porto_lello_intro: 'Podríamos describir la escalera. No lo haremos — algunas cosas hay que subirlas uno mismo.',
  porto_lello_tips: '<li>Compre la entrada con hora online; la cola en la puerta es brutal.</li><li>Vaya justo a la apertura o en la última hora para fotos casi vacías.</li><li>El precio de la entrada se descuenta de cualquier libro que compre.</li>',
  porto_wondersense_intro: 'Un museo que se saborea, se escucha y se toca. No revelaremos ni una sala — de verdad hay que ir.',
  porto_wondersense_tips: '<li>Reserve una franja horaria con antelación — la entrada es en grupos pequeños con hora asignada.</li><li>Calcule al menos una hora; abarca cinco plantas.</li><li>Un plan perfecto para una tarde de lluvia.</li>',
  porto_morro_intro: 'Todos dicen que tiene la mejor puesta de sol de Oporto. Por una vez, todos tienen razón.',
  porto_morro_tips: '<li>Cruce por el tablero superior del puente — las vistas le dejan sin palabras.</li><li>Llegue 30–40 min antes del atardecer para un sitio en la hierba.</li><li>Lleve algo de beber; hay quioscos cerca.</li>',
  porto_gaia_intro: 'El vino de Oporto envejece en esta orilla desde hace 300 años. Dedique una hora a descubrir por qué.',
  porto_gaia_tips: '<li>Elija una bodega más pequeña para una cata tranquila y personal.</li><li>Reserve con antelación en verano — las bodegas famosas se llenan.</li><li>Pregunte la diferencia entre un tawny y un ruby; no la olvidará nunca.</li>',
  porto_capela_intro: 'Un bar de vinos dentro de una antigua capilla de verdad. Solo diremos esto: pida una copa y mire hacia arriba.',
  porto_capela_tips: '<li>Vaya a tomar una copa tranquila, no a una gran noche — es pequeño e íntimo.</li><li>Vinos portugueses por copa; pida al personal que le oriente.</li><li>Mejor temprano por la noche, antes de que se llene.</li>',
  porto_virtudes_intro: 'La puesta de sol que los locales se guardan para ellos. Ahora usted también la conoce.',
  porto_virtudes_tips: '<li>Lleve una bebida y algo para sentarse — es una ladera de césped en terrazas.</li><li>Llegue unos 30 minutos antes del atardecer para la mejor luz.</li><li>Más tranquilo que el Jardim do Morro al otro lado del río.</li>',
  porto_guindais_intro: 'Una escalera, no un monumento — pero le entrega el puente Dom Luís como ninguna otra cosa.',
  porto_guindais_tips: '<li>Es empinada — lleve calzado cómodo y vaya con calma.</li><li>Combínela con un paseo por el muelle de la Ribeira de abajo.</li><li>Hay un funicular cerca si prefiere no subir a pie.</li>',
  porto_almas_intro: 'Dieciséis mil azulejos azules, en mitad de la calle comercial más concurrida. La mayoría pasa de largo. Usted no.',
  porto_almas_tips: '<li>Mire hacia arriba — toda la fachada es la obra de arte.</li><li>La luz de la mañana hace brillar los azulejos azules.</li><li>Está en la Rua de Santa Catarina — combínela con un café en un local clásico.</li>',
  porto_foto_intro: 'Un museo de fotografía dentro de una cárcel del siglo XIX. Sí, se ven las antiguas celdas. Sí, es gratis.',
  porto_foto_tips: '<li>Entrada gratuita — una de las mejores horas de Oporto por su precio.</li><li>El edificio en sí es media visita; busque las puertas de las celdas.</li><li>Rara vez concurrido — una opción tranquila para una tarde calurosa o lluviosa.</li>',
  porto_rib_intro: '¿Turístico? Un poco. ¿El alma de Oporto? Por completo. Vaya temprano y déjese perder.',
  porto_rib_tips: '<li>Vaya por la mañana, antes de las multitudes y los tours en barco.</li><li>Piérdase por los callejones detrás del muelle — esa es la Ribeira de verdad.</li><li>Un gran punto de partida para cruzar el puente hacia Gaia.</li>',
  porto_conga_tag: '🥪 Comer barato',
  porto_conga_h: 'Conga — la bifana legendaria',
  porto_conga_p: 'Una institución diminuta y sin lujos desde 1976. La bifana — cerdo guisado en un pan blando — es una de las mejores comidas baratas de Oporto.',
  porto_conga_intro: 'Un bocadillo de cerdo tan bueno que lleva casi 50 años siendo famoso. Pida una bifana y una bebida fría — ese es todo el plan.',
  porto_conga_tips: '<li>No espere decoración — espere sabor.</li><li>Perfecto para un almuerzo rápido y muy barato.</li><li>Lleno en horas punta, pero va rápido.</li>',
  porto_capanegra_tag: '🍽️ Cerca y tradicional',
  porto_capanegra_h: 'Capa Negra II — cenar cerca de casa',
  porto_capanegra_p: 'Un restaurante local fiable y concurrido, a pocos pasos del apartamento. Carnes a la brasa, pescado y una francesinha en condiciones.',
  porto_capanegra_intro: 'La cena portuguesa de verdad más cercana a su puerta — y sí, hacen una francesinha en condiciones.',
  porto_capanegra_tips: '<li>La francesinha es enorme — considere compartirla.</li><li>Lleno los fines de semana; vaya algo antes.</li><li>Un paseo fácil desde el apartamento.</li>',
  porto_tapabento_tag: '🍷 Joya de gama media',
  porto_tapabento_h: 'Tapabento — sitio pequeño, gran reputación',
  porto_tapabento_p: 'Cocina portuguesa moderna y petiscos hechos con verdadero cuidado. Pequeño, acogedor y siempre excelente.',
  porto_tapabento_intro: 'Justo detrás de la estación de São Bento, un sitio diminuto que los locales reservan con días de antelación. Hay una razón.',
  porto_tapabento_tips: '<li>Reserve con antelación — es pequeño y muy solicitado.</li><li>Ideal para una cena especial pero relajada.</li><li>A pocos pasos de la estación de São Bento.</li>',
  porto_antiqvvm_tag: '✨ Ocasión especial',
  porto_antiqvvm_h: 'Antiqvvm — una noche de dos estrellas Michelin',
  porto_antiqvvm_p: 'Alta cocina portuguesa en una romántica casa del siglo XIX con vistas al Duero. Una verdadera ocasión.',
  porto_antiqvvm_intro: 'Dos estrellas Michelin, una casa del siglo XIX, una vista sobre el Duero. Para la noche que quiere recordar.',
  porto_antiqvvm_tips: '<li>Reserve con bastante antelación.</li><li>El menú degustación es el camino.</li><li>Elegante informal — es una ocasión.</li>',
});

Object.assign(translations.de, {
  checkin_late_desc: 'Schreiben Sie uns vorab eine Nachricht, dann senden wir Ihnen die Zugangsanweisungen.',
  rule_condo_h: 'Gemeinschaftsbereiche des Gebäudes',
  rule_c1: 'Wir mieten diesen Raum in einem privaten Wohngebäude — bitte behandeln Sie den Aufzug, den Flur und die Gänge mit besonderer Sorgfalt.',
  rule_c2: 'Sprechen Sie in den Gemeinschaftsbereichen leise, besonders früh am Morgen und spät am Abend — hinter diesen Türen wohnen Nachbarn.',
  rule_c3: 'Diese kleine Rücksichtnahme sorgt dafür, dass wir im Gebäude willkommen bleiben.',
  nb_pharmacy_2: 'Apotheke (bis 20 Uhr)',
  em_alt_note: 'Wenn wir nicht sofort antworten, versuchen Sie die Ersatznummer:',
  back_porto: '← Porto entdecken',
  feat_tv_h: 'TV & Android-Dongle',
  nav_transport: 'Verkehrsmittel',
  nb_transport: 'Verkehrsmittel',
  k_eq3: '🗑️ Entsorgen Sie Abfall in den bereitgestellten Müllbeuteln. Verschlossene Beutel kommen zur Abfallsammlung des Gebäudes — schreiben Sie uns, wenn Sie den genauen Ort wissen möchten.',
  k_eq4: '♻️ Bitte trennen Sie den Müll — gelb für Plastik und Metall, blau für Papier, grün für Glas — über die öffentlichen Recyclingbehälter auf der Straße.',
  place_tips_h: 'Gut zu wissen',
  place_go: 'Route ab Porto Peace Haven',
  place_hours_always: 'Jederzeit geöffnet',
  place_review_h: 'Gefällt Ihnen Porto?',
  place_review_p: 'Wenn unser kleiner Guide Ihren Tag schöner gemacht hat, hilft eine Bewertung dem nächsten Reisenden, uns ebenfalls zu finden.',
  place_review_btn: 'Bewertung abgeben ⭐',
  porto_g3_title: 'Wo man isst',
  porto_lello_intro: 'Wir könnten die Treppe beschreiben. Wir tun es nicht — manche Dinge muss man selbst erklimmen.',
  porto_lello_tips: '<li>Kaufen Sie das Zeitfenster-Ticket online; die Schlange vor der Tür ist brutal.</li><li>Gehen Sie direkt zur Öffnung oder in der letzten Stunde für fast leere Fotos.</li><li>Der Ticketpreis wird von jedem gekauften Buch abgezogen.</li>',
  porto_wondersense_intro: 'Ein Museum, das man schmeckt, hört und berührt. Wir verraten keinen einzigen Raum — Sie müssen wirklich hin.',
  porto_wondersense_tips: '<li>Buchen Sie vorab ein Zeitfenster — der Einlass erfolgt in kleinen Gruppen zu festen Zeiten.</li><li>Planen Sie mindestens eine Stunde ein; es erstreckt sich über fünf Etagen.</li><li>Ein perfekter Plan für einen regnerischen Nachmittag.</li>',
  porto_morro_intro: 'Alle sagen, hier sei der schönste Sonnenuntergang Portos. Diesmal haben alle recht.',
  porto_morro_tips: '<li>Überqueren Sie die obere Ebene der Brücke — die Aussicht lässt Sie mitten im Schritt innehalten.</li><li>Kommen Sie 30–40 Min. vor Sonnenuntergang für einen Platz auf der Wiese.</li><li>Bringen Sie etwas zu trinken mit; es gibt Kioske in der Nähe.</li>',
  porto_gaia_intro: 'Portwein reift seit 300 Jahren an diesem Flussufer. Verbringen Sie eine Stunde damit, herauszufinden, warum.',
  porto_gaia_tips: '<li>Wählen Sie ein kleineres Haus für eine entspannte, persönliche Verkostung.</li><li>Buchen Sie im Sommer vorab — die berühmten Keller füllen sich.</li><li>Fragen Sie nach dem Unterschied zwischen einem Tawny und einem Ruby; Sie werden ihn nie vergessen.</li>',
  porto_capela_intro: 'Eine Weinbar in einer echten ehemaligen Kapelle. Wir sagen nur dies: Bestellen Sie ein Glas und schauen Sie nach oben.',
  porto_capela_tips: '<li>Kommen Sie für ein ruhiges Glas, nicht für einen großen Abend — es ist klein und intim.</li><li>Portugiesische Weine glasweise; lassen Sie sich vom Personal beraten.</li><li>Am besten früh am Abend, bevor es voll wird.</li>',
  porto_virtudes_intro: 'Der Sonnenuntergang, den die Einheimischen für sich behalten. Jetzt kennen Sie ihn auch.',
  porto_virtudes_tips: '<li>Bringen Sie ein Getränk und etwas zum Sitzen mit — es ist ein grasbewachsener, terrassierter Hang.</li><li>Kommen Sie etwa 30 Minuten vor Sonnenuntergang für das beste Licht.</li><li>Ruhiger als der Jardim do Morro auf der anderen Flussseite.</li>',
  porto_guindais_intro: 'Eine Treppe, kein Monument — aber sie reicht Ihnen die Dom-Luís-Brücke wie nichts anderes.',
  porto_guindais_tips: '<li>Sie ist steil — tragen Sie bequeme Schuhe und nehmen Sie sich Zeit.</li><li>Verbinden Sie sie mit einem Spaziergang entlang der Ribeira-Promenade darunter.</li><li>In der Nähe gibt es eine Standseilbahn, falls Sie nicht zu Fuß zurück hochsteigen möchten.</li>',
  porto_almas_intro: 'Sechzehntausend blaue Fliesen, mitten in der belebtesten Einkaufsstraße. Die meisten gehen vorbei. Sie nicht.',
  porto_almas_tips: '<li>Schauen Sie nach oben — die gesamte Fassade ist das Kunstwerk.</li><li>Das Morgenlicht lässt die blauen Azulejos leuchten.</li><li>Sie liegt an der Rua de Santa Catarina — verbinden Sie sie mit einem Kaffee in einem klassischen Café.</li>',
  porto_foto_intro: 'Ein Fotografiemuseum in einem Gefängnis aus dem 19. Jahrhundert. Ja, man sieht die alten Zellen. Ja, es ist kostenlos.',
  porto_foto_tips: '<li>Kostenloser Eintritt — eine der besten Stunden in Porto für das Geld.</li><li>Das Gebäude selbst ist der halbe Besuch; achten Sie auf die Zellentüren.</li><li>Selten überfüllt — eine ruhige Wahl für einen heißen oder regnerischen Nachmittag.</li>',
  porto_rib_intro: 'Touristisch? Ein wenig. Die Seele Portos? Vollkommen. Gehen Sie früh und lassen Sie sich treiben.',
  porto_rib_tips: '<li>Gehen Sie morgens, vor den Menschenmengen und den Bootstouren.</li><li>Schlendern Sie durch die kleinen Gassen hinter der Promenade — das ist die echte Ribeira.</li><li>Ein guter Ausgangspunkt, um die Brücke nach Gaia zu überqueren.</li>',
  porto_conga_tag: '🥪 Günstig essen',
  porto_conga_h: 'Conga — die legendäre Bifana',
  porto_conga_p: 'Eine winzige, schnörkellose Institution seit 1976. Die Bifana — langsam geschmortes Schweinefleisch in einem weichen Brötchen — ist eine der günstigsten Top-Mahlzeiten in Porto.',
  porto_conga_intro: 'Ein Schweinefleisch-Sandwich, so gut, dass es seit fast 50 Jahren berühmt ist. Bestellen Sie eine Bifana und ein kaltes Getränk — das ist der ganze Plan.',
  porto_conga_tips: '<li>Erwarten Sie kein Dekor — erwarten Sie Geschmack.</li><li>Perfekt für ein schnelles, sehr günstiges Mittagessen.</li><li>Zu Stoßzeiten voll, aber es geht schnell.</li>',
  porto_capanegra_tag: '🍽️ Nah & traditionell',
  porto_capanegra_h: 'Capa Negra II — Abendessen direkt um die Ecke',
  porto_capanegra_p: 'Ein zuverlässiges, gut besuchtes lokales Restaurant nur wenige Schritte von der Wohnung entfernt. Gegrilltes Fleisch, Fisch und eine echte Francesinha.',
  porto_capanegra_intro: 'Das nächste richtige portugiesische Abendessen vor Ihrer Tür — und ja, sie machen eine echte Francesinha.',
  porto_capanegra_tips: '<li>Die Francesinha ist riesig — überlegen Sie, sie zu teilen.</li><li>Am Wochenende voll; gehen Sie etwas früher.</li><li>Ein einfacher Spaziergang von der Wohnung.</li>',
  porto_tapabento_tag: '🍷 Mittelklasse-Juwel',
  porto_tapabento_h: 'Tapabento — kleiner Ort, großer Ruf',
  porto_tapabento_p: 'Moderne portugiesische Küche und Petiscos, mit echter Sorgfalt zubereitet. Klein, warm und durchweg ausgezeichnet.',
  porto_tapabento_intro: 'Direkt hinter dem Bahnhof São Bento, ein winziger Ort, den Einheimische Tage im Voraus reservieren. Es gibt einen Grund.',
  porto_tapabento_tips: '<li>Reservieren Sie vorab — es ist klein und sehr beliebt.</li><li>Großartig für ein besonderes, aber entspanntes Abendessen.</li><li>Wenige Schritte vom Bahnhof São Bento.</li>',
  porto_antiqvvm_tag: '✨ Besonderer Anlass',
  porto_antiqvvm_h: 'Antiqvvm — ein Abend mit zwei Michelin-Sternen',
  porto_antiqvvm_p: 'Gehobene portugiesische Küche in einem romantischen Haus aus dem 19. Jahrhundert mit Blick auf den Douro. Ein echter Anlass.',
  porto_antiqvvm_intro: 'Zwei Michelin-Sterne, ein Haus aus dem 19. Jahrhundert, ein Blick über den Douro. Für den Abend, an den Sie sich erinnern wollen.',
  porto_antiqvvm_tips: '<li>Reservieren Sie weit im Voraus.</li><li>Das Degustationsmenü ist der richtige Weg.</li><li>Smart-casual — es ist ein Anlass.</li>',
});

Object.assign(translations.it, {
  checkin_late_desc: 'Inviateci un messaggio in anticipo e vi invieremo le istruzioni per l\'ingresso.',
  rule_condo_h: 'Aree comuni dell\'edificio',
  rule_c1: 'Affittiamo questo spazio in un edificio residenziale privato — vi preghiamo di trattare l\'ascensore, l\'ingresso e i corridoi con particolare cura.',
  rule_c2: 'Parlate a voce bassa nelle aree comuni dell\'edificio, soprattutto la mattina presto e la sera tardi — dietro quelle porte vivono dei vicini.',
  rule_c3: 'È questa piccola attenzione che ci mantiene benvenuti nell\'edificio.',
  nb_pharmacy_2: 'Farmacia (fino alle 20)',
  em_alt_note: 'Se non rispondiamo subito, provate la linea di riserva:',
  back_porto: '← Scopri Porto',
  tr_bus_h: 'Autobus & tram',
  k_eq3: '🗑️ Gettate i rifiuti negli appositi sacchi forniti. I sacchi chiusi vanno alla raccolta rifiuti dell\'edificio — scriveteci se volete sapere il punto esatto.',
  k_eq4: '♻️ Differenziate i rifiuti — giallo per plastica e metallo, blu per la carta, verde per il vetro — usando i contenitori pubblici per strada.',
  place_tips_h: 'Buono a sapersi',
  place_go: 'Indicazioni da Porto Peace Haven',
  place_hours_always: 'Aperto a qualsiasi ora',
  place_review_h: 'Vi piace Porto?',
  place_review_p: 'Se la nostra piccola guida ha reso migliore la vostra giornata, una recensione aiuta il prossimo viaggiatore a trovarci.',
  place_review_btn: 'Lascia una recensione ⭐',
  porto_g3_title: 'Dove mangiare',
  porto_lello_intro: 'Potremmo descrivere la scala. Non lo faremo — certe cose bisogna salirle da soli.',
  porto_lello_tips: '<li>Acquistate il biglietto con orario online; la fila all\'ingresso è brutale.</li><li>Andate all\'apertura o nell\'ultima ora per foto quasi vuote.</li><li>Il prezzo del biglietto viene scontato da qualsiasi libro acquistato.</li>',
  porto_wondersense_intro: 'Un museo che si assapora, si ascolta e si tocca. Non sveleremo una sola sala — bisogna davvero andarci.',
  porto_wondersense_tips: '<li>Prenotate una fascia oraria in anticipo — l\'ingresso avviene in piccoli gruppi a orari fissi.</li><li>Calcolate almeno un\'ora; si sviluppa su cinque piani.</li><li>Un piano perfetto per un pomeriggio di pioggia.</li>',
  porto_morro_intro: 'Tutti dicono che ha il tramonto più bello di Porto. Per una volta, hanno tutti ragione.',
  porto_morro_tips: '<li>Attraversate sul ponte superiore — la vista vi ferma a metà passo.</li><li>Arrivate 30–40 min prima del tramonto per un posto sull\'erba.</li><li>Portate qualcosa da bere; ci sono chioschi nelle vicinanze.</li>',
  porto_gaia_intro: 'Il vino Porto invecchia su questa riva da 300 anni. Dedicate un\'ora a scoprire perché.',
  porto_gaia_tips: '<li>Scegliete una cantina più piccola per una degustazione tranquilla e personale.</li><li>Prenotate in anticipo d\'estate — le cantine famose si riempiono.</li><li>Chiedete la differenza tra un tawny e un ruby; non la dimenticherete mai.</li>',
  porto_capela_intro: 'Un wine bar dentro una vera ex cappella. Diremo solo questo: ordinate un bicchiere e guardate in alto.',
  porto_capela_tips: '<li>Andate per un bicchiere tranquillo, non per una grande serata — è piccolo e intimo.</li><li>Vini portoghesi al bicchiere; fatevi guidare dal personale.</li><li>Meglio presto la sera, prima che si riempia.</li>',
  porto_virtudes_intro: 'Il tramonto che i locali tengono per sé. Ora lo conoscete anche voi.',
  porto_virtudes_tips: '<li>Portate qualcosa da bere e su cui sedervi — è un pendio erboso a terrazze.</li><li>Arrivate circa 30 minuti prima del tramonto per la luce migliore.</li><li>Più tranquillo del Jardim do Morro dall\'altra parte del fiume.</li>',
  porto_guindais_intro: 'Una scalinata, non un monumento — ma vi consegna il ponte Dom Luís come nient\'altro.',
  porto_guindais_tips: '<li>È ripida — indossate scarpe comode e prendetevi il vostro tempo.</li><li>Abbinatela a una passeggiata lungo il lungofiume della Ribeira più in basso.</li><li>C\'è una funicolare nelle vicinanze se preferite non risalire a piedi.</li>',
  porto_almas_intro: 'Sedicimila piastrelle azzurre, nel mezzo della via dello shopping più affollata. La maggior parte le manca. Voi no.',
  porto_almas_tips: '<li>Guardate in alto — tutta la facciata è l\'opera d\'arte.</li><li>La luce del mattino fa risplendere gli azulejos azzurri.</li><li>È in Rua de Santa Catarina — abbinatela a un caffè in un locale classico.</li>',
  porto_foto_intro: 'Un museo della fotografia dentro una prigione dell\'Ottocento. Sì, si vedono le vecchie celle. Sì, è gratis.',
  porto_foto_tips: '<li>Ingresso gratuito — una delle ore più convenienti di Porto.</li><li>L\'edificio stesso è metà della visita; cercate le porte delle celle.</li><li>Raramente affollato — una scelta tranquilla per un pomeriggio caldo o piovoso.</li>',
  porto_rib_intro: 'Turistico? Un po\'. L\'anima di Porto? Completamente. Andate presto e lasciatevi perdere.',
  porto_rib_tips: '<li>Andate la mattina, prima della folla e dei tour in barca.</li><li>Perdetevi nei vicoli dietro il lungofiume — quella è la vera Ribeira.</li><li>Un ottimo punto di partenza per attraversare il ponte verso Gaia.</li>',
  porto_conga_tag: '🥪 Mangiare economico',
  porto_conga_h: 'Conga — la bifana leggendaria',
  porto_conga_p: 'Un\'istituzione minuscola e senza fronzoli dal 1976. La bifana — maiale stufato in un panino morbido — è uno dei migliori pasti economici di Porto.',
  porto_conga_intro: 'Un panino al maiale così buono da essere famoso da quasi 50 anni. Ordinate una bifana e una bevanda fresca — è tutto qui il piano.',
  porto_conga_tips: '<li>Non aspettatevi arredamento — aspettatevi sapore.</li><li>Perfetto per un pranzo veloce e molto economico.</li><li>Affollato nelle ore di punta, ma scorre veloce.</li>',
  porto_capanegra_tag: '🍽️ Vicino e tradizionale',
  porto_capanegra_h: 'Capa Negra II — cena vicino a casa',
  porto_capanegra_p: 'Un ristorante locale affidabile e frequentato, a pochi passi dall\'appartamento. Carni alla griglia, pesce e una vera francesinha.',
  porto_capanegra_intro: 'La cena portoghese vera più vicina alla vostra porta — e sì, fanno una francesinha come si deve.',
  porto_capanegra_tips: '<li>La francesinha è enorme — valutate di condividerla.</li><li>Affollato nei weekend; andate un po\' prima.</li><li>Una passeggiata facile dall\'appartamento.</li>',
  porto_tapabento_tag: '🍷 Gioiello di fascia media',
  porto_tapabento_h: 'Tapabento — posto piccolo, grande reputazione',
  porto_tapabento_p: 'Cucina portoghese moderna e petiscos preparati con vera cura. Piccolo, accogliente e sempre eccellente.',
  porto_tapabento_intro: 'Proprio dietro la stazione di São Bento, un posto minuscolo che i locali prenotano con giorni di anticipo. C\'è un motivo.',
  porto_tapabento_tips: '<li>Prenotate in anticipo — è piccolo e molto richiesto.</li><li>Ottimo per una cena speciale ma rilassata.</li><li>A pochi passi dalla stazione di São Bento.</li>',
  porto_antiqvvm_tag: '✨ Occasione speciale',
  porto_antiqvvm_h: 'Antiqvvm — una serata con due stelle Michelin',
  porto_antiqvvm_p: 'Alta cucina portoghese in una romantica casa dell\'Ottocento con vista sul Douro. Una vera occasione.',
  porto_antiqvvm_intro: 'Due stelle Michelin, una casa dell\'Ottocento, una vista sul Douro. Per la serata che volete ricordare.',
  porto_antiqvvm_tips: '<li>Prenotate con largo anticipo.</li><li>Il menu degustazione è la scelta giusta.</li><li>Elegante-informale — è un\'occasione.</li>',
});
