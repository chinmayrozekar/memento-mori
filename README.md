# Chinmay Rozekar's Memento Mori

A minimal, self-updating wallpaper that shows how much of the year is gone:
**52 week dots** and **12 month bars**, with the current week and month in gold.

- **Live web version**: https://chinmayrozekar.github.io/memento-mori/
- **Daily-rendered wallpapers** (refreshed every night, shortly after midnight PT, by GitHub Actions):
  - Phone (iOS, 1170×2532): `https://chinmayrozekar.github.io/memento-mori/wallpapers/ios.png`
  - Phone (Android, 1080×2400): `https://chinmayrozekar.github.io/memento-mori/wallpapers/android.png`
  - Desktop (2560×1440): `https://chinmayrozekar.github.io/memento-mori/wallpapers/desktop.png`

A single dependency-free `index.html` — no build, no framework, no tracking.

## iOS (without the Shortcuts app)

Straight talk: iOS gives no app permission to change the wallpaper — Shortcuts
is the only automation Apple allows. Two good alternatives:

1. **Lock/Home Screen widget (recommended)** — install the free
   [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) app, paste
   [`scriptable-widget.js`](scriptable-widget.js) as a new script, and add a
   Scriptable widget to your Home Screen. It shows the calendar and refreshes
   itself every morning. Setup steps are in the script's header comment.
2. **Web app** — open the live URL in Safari → Share → **Add to Home Screen**.
   Opens fullscreen like a native app, always current.

(If you ever change your mind, Shortcuts' "Set Wallpaper" action pointed at
the `ios.png` URL on a daily automation is the only true auto-wallpaper path.)

## Android (true auto-updating wallpaper)

Point any wallpaper-automation app at the `android.png` URL:

- **[MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid)** (free):
  macro with trigger *Day/Time → daily 6:00 AM* → action *HTTP Request (GET,
  save to file)* on the `android.png` URL → action *Set Wallpaper* from that file.
- **[KLWP](https://play.google.com/store/apps/details?id=org.kustom.wallpaper)** (live wallpaper):
  add a Bitmap layer with the `android.png` URL — it re-fetches on its own.
- Or add the web version to your home screen from Chrome (menu → *Add to Home screen*).

## Desktop

- **Live**: point [Plash](https://sindresorhus.com/plash) (macOS) or
  [Lively Wallpaper](https://www.rocksdanister.com/lively/) (Windows) at the live URL.
- **Static**: open the page, hover, click **↓ PNG** — downloads at your exact
  screen resolution — or grab `wallpapers/desktop.png`.

## Customize via URL parameters

| Parameter | Values | Default |
|---|---|---|
| `?name=` | any text, e.g. `?name=ADA+LOVELACE'S` | `CHINMAY ROZEKAR'S` |
| `?theme=` | `dark`, `light` | `dark` |
| `?accent=` | any hex, e.g. `?accent=b0432f` | gold `c9a227` |
| `?quote=` | `0` hides the daily Stoic quote | shown |

## How it works

- Week dots: day-of-year ÷ 7; the last dot covers the final 1–2 partial days of the year.
- Month bars fill bottom-up in proportion to the days elapsed in that month.
- The page redraws at midnight, on resize, and hourly (safety net for wallpaper apps).
- `.github/workflows/render-wallpapers.yml` screenshots the page in headless
  Chromium every night (Pacific time) and commits the PNGs to `wallpapers/`.

*"It is not that we have a short time to live, but that we waste a lot of it." — Seneca*
