// Chinmay's Memento Mori — Scriptable widget (iOS, no Shortcuts needed)
//
// Setup:
//   1. Install the free "Scriptable" app from the App Store.
//   2. In Scriptable: + → paste this file → name it "Memento Mori".
//   3. Long-press the Home Screen → add a Scriptable widget (large looks best)
//      → tap it → choose script "Memento Mori".
//   It fetches the nightly render and refreshes itself every morning.

const IMG_URL = "https://chinmayrozekar.github.io/memento-mori/wallpapers/ios.png";

const today = new Date().toISOString().slice(0, 10);
const img = await new Request(`${IMG_URL}?d=${today}`).loadImage();

const w = new ListWidget();
w.setPadding(0, 0, 0, 0);
w.backgroundColor = new Color("#0d0d0f");
const wi = w.addImage(img);
wi.applyFillingContentMode();
wi.centerAlignImage();
w.url = "https://chinmayrozekar.github.io/memento-mori/";

// Ask iOS to refresh after 6 AM (the render lands shortly after midnight PT)
const next = new Date();
if (next.getHours() >= 6) next.setDate(next.getDate() + 1);
next.setHours(6, 0, 0, 0);
w.refreshAfterDate = next;

Script.setWidget(w);
if (config.runsInApp) await w.presentLarge();
Script.complete();
