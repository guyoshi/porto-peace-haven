# Porto Peace Haven — Guest Guide

Guia de hóspedes mobile-first, multilingue e estático para o Porto Peace Haven. Abre diretamente no browser — sem build, sem servidor, sem dependências.

---

## Estrutura de ficheiros

```
porto-peace-haven/
├── index.html              ← Site completo (SPA de página única)
├── styles.css              ← Estilos (mobile-first, dark mode, impressão)
├── script.js               ← Toda a lógica: i18n, routing, formulários, mapas
├── README.md               ← Este ficheiro
├── assets/
│   ├── favicon.svg
│   ├── fotos/              ← Fotos do site (hero, quartos, QR Wi-Fi…)
│   ├── guides/             ← Guias de quarto offline (.docx por idioma)
│   ├── maps/               ← Assets do mapa do Porto
│   └── spots/              ← Imagens dos pontos de interesse
└── guia-quarto-*.pdf       ← Guias de quarto imprimíveis (Ribeira, Douro, Atlântico)
```

---

## Iniciar

Abrir `index.html` diretamente num browser. Funciona sem servidor.

Para testar em dispositivo móvel numa rede local:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

---

## Idiomas

7 idiomas com seletor no cabeçalho. Todas as traduções estão no objeto `translations` em `script.js`.

| Bandeira | Idioma |
|---|---|
| 🇬🇧 | English |
| 🇵🇹 | Português |
| 🇫🇷 | Français |
| 🇪🇸 | Español |
| 🇩🇪 | Deutsch |
| 🇮🇹 | Italiano |
| 🇳🇱 | Nederlands |

Para editar uma tradução, procurar a chave no `script.js` e actualizar o valor na língua pretendida. As chaves EN servem de fallback para todas as outras línguas.

---

## Navegação (bottom nav)

A barra de navegação inferior tem 6 separadores:

| Ícone | Destino |
|---|---|
| Home | Ecrã principal com Wi-Fi, quartos e CTAs |
| Casa | Guia da casa — cozinha, casa de banho, regras |
| Porto | Explorar a cidade — pontos de interesse, mapa |
| Avaliação | Funil de avaliação (Airbnb · Booking · Google) |
| Ajuda | Emergência, hospital, farmácia, táxi |
| Check-out | Processo de check-out guiado |

---

## Funcionalidades principais

**Deteção de quarto** — No primeiro acesso surge um popup para o hóspede indicar o seu quarto (Ribeira, Douro ou Atlântico). A escolha fica guardada em `localStorage` durante 30 dias e personaliza o guia.

**Overlay de boas-vindas** — Mostrado uma única vez na primeira visita, desaparece automaticamente ao fim de 2 segundos.

**CTA de avaliação adaptativa** — Na primeira visita aparece como uma tira discreta (uma linha). A partir da segunda visita surge como bloco dourado completo.

**Funil de avaliação** — Fluxo em etapas: sentimento → plataforma (Airbnb / Booking / Google) → link de avaliação direto. Experiências negativas são redirecionadas para formulário interno.

**Wi-Fi** — Credenciais com cópia a um toque e QR code gerado localmente (sem API externa).

**Mapa interativo** — Leaflet + OpenStreetMap, sem chave de API. Inclui os pontos de interesse do Porto e a localização do apartamento.

**Formulário de sugestões** — Acessível via FAB e via botão na secção de Emergência. Submetido via Netlify Forms.

**Guias offline** — PDFs dos quartos disponíveis para download. Guias .docx em 6 idiomas na pasta `assets/guides/`.

**Dark mode** — Detetado automaticamente por `prefers-color-scheme`, com toggle manual.

**7 idiomas** — Tradução completa de todo o conteúdo, incluindo mensagens WhatsApp, funil de avaliação e guias de quarto.

---

## Configurações a atualizar

Abrir `script.js` e verificar/actualizar as constantes no topo do ficheiro:

```javascript
const SITE_URL      = 'https://SEU-SITE.netlify.app'; // Para gerar o QR code do guia
const WIFI_SSID     = 'PORTO PEACE HAVEN';
const WIFI_PASSWORD = 'CAHMCTUM';
```

Contactos e links de avaliação (também em `script.js`):

```javascript
const REVIEW_LINKS = {
  airbnb:  { ribeira: '...', douro: '...', atlantico: '...' },
  booking: '...',
  google:  '...',
};
```

---

## Deploy

### Netlify (recomendado — gratuito)

1. Aceder a [netlify.com](https://netlify.com) e criar conta
2. Arrastar a pasta `porto-peace-haven/` para o dashboard
3. O site fica disponível em `https://nome-aleatorio.netlify.app`
4. Opcional: ligar um domínio próprio nas definições

Os formulários de sugestão funcionam automaticamente com Netlify Forms (atributo `data-netlify="true"` já presente).

### Cloudflare Pages (gratuito)

1. Fazer push para um repositório GitHub
2. Aceder a [pages.cloudflare.com](https://pages.cloudflare.com)
3. Ligar o repositório (sem comando de build — site estático)

### GitHub Pages (gratuito)

1. Criar repositório público e fazer upload dos ficheiros para a raiz
2. Settings → Pages → Source → main branch / root

---

## Notas técnicas

- HTML/CSS/JS puro — sem framework, sem transpiler, sem node_modules
- QR codes gerados localmente via [qrcodejs](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) (CDN)
- Mapa via [Leaflet](https://leafletjs.com) + OpenStreetMap (sem chave de API)
- Preferências do hóspede em `localStorage` (língua, quarto, tema, visitas)
- HTML semântico com atributos ARIA e navegação por teclado
- Impressão com estilos próprios (`@media print`)
- Funciona offline após o primeiro carregamento (todos os assets são locais exceto fonts e CDN do QR/mapa)
- `<meta name="robots" content="noindex">` para não ser indexado pelos motores de busca

---

*Feito com cuidado para os hóspedes do Porto Peace Haven · Porto, Portugal*
