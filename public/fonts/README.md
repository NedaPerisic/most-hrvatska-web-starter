# Fontovi (licencirani — nisu u repozitoriju)

Vizualni identitet MOST-a koristi dva fonta iz Knjige vizualnih standarda 2026:

| Uloga | Font | Datoteke |
|-------|------|----------|
| Primarni (naslovi) | **Binoma Trial** — Regular / Bold | `BinomaTrialRegular-R9Kvv.ttf`, `BinomaTrialBold-1jPDj.ttf` |
| Sekundarni (tekst) | **Avenir LT Std** — Light / Medium | `AvenirLTStd-Light.otf`, `AvenirLTStd-Medium.otf` |

## Zašto nisu u repozitoriju

- **Avenir LT Std** je komercijalni font (Linotype/Monotype) — redistribucija u javnom repozitoriju krši licencu.
- **Binoma Trial** je probna (trial) verzija — za produkciju nabaviti punu licencu.

## Što napraviti prije build-a

1. Nabaviti licencirane datoteke fontova.
2. Staviti ih u ovaj folder (`public/fonts/`) s gornjim nazivima.
3. `npm run build` — fontovi se kopiraju u `dist/fonts/` i učitavaju preko `@font-face` (vidi `src/styles/global.css`).

Bez ovih datoteka sajt će se renderirati sa system-fallback fontovima (sans-serif), ali NE u skladu s brand standardom.
