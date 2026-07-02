# Memento Mori — Year Calendar Wallpaper

A minimal, self-updating wallpaper that shows how much of the year is gone:
**52 week dots** and **12 month bars**, with the current week and month in gold.

A single dependency-free `index.html` — no build, no framework, no tracking.

## Use it as a wallpaper

**Option A — Live wallpaper (updates itself daily)**
Point a web-wallpaper app at your GitHub Pages URL:

- **macOS**: [Plash](https://sindresorhus.com/plash) (free, App Store)
- **Windows**: [Lively Wallpaper](https://www.rocksdanister.com/lively/) (free) or Wallpaper Engine
- **Linux**: [Komorebi](https://github.com/cheesecakeufo/komorebi), or a browser in kiosk mode

**Option B — Static image**
Open the page full-screen on your display, hover, and click **↓ PNG**.
It downloads at your exact screen resolution — set it as a normal wallpaper.
(Repeat whenever you want the picture to catch up with time.)

## Host it on GitHub Pages (free)

1. Push this repo to GitHub.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / root.
3. Your calendar lives at `https://<username>.github.io/memento-mori/`.

## Customize via URL parameters

| Parameter | Values | Default |
|---|---|---|
| `?theme=` | `dark`, `light` | `dark` |
| `?accent=` | any hex, e.g. `?accent=b0432f` | gold `c9a227` |
| `?quote=` | `0` hides the daily Stoic quote | shown |

Example: `...github.io/memento-mori/?theme=light&accent=b0432f&quote=0`

## How it counts

- Week dots: day-of-year ÷ 7; the last dot covers the final 1–2 partial days of the year.
- Month bars fill bottom-up in proportion to the days elapsed in that month.
- The page redraws at midnight, on resize, and hourly as a safety net for
  long-running wallpaper apps.

*"It is not that we have a short time to live, but that we waste a lot of it." — Seneca*
