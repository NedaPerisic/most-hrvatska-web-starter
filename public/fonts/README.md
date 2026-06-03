# Fontovi

Vizualni identitet MOST-a koristi dva fonta iz Knjige vizualnih standarda 2026:

| Uloga | Font | Datoteke |
|-------|------|----------|
| Primarni (naslovi) | **Binoma Trial** — Regular / Bold | `BinomaTrialRegular-R9Kvv.ttf`, `BinomaTrialBold-1jPDj.ttf` |
| Sekundarni (tekst) | **Avenir LT Std** — Light / Medium | `AvenirLTStd-Light.otf`, `AvenirLTStd-Medium.otf` |

Fontovi su **kupljeni i licencirani** za upotrebu MOST-a. Učitavaju se preko `@font-face` (vidi `src/styles/global.css`) i pri build-u se kopiraju u `dist/fonts/`.

> Napomena: repozitorij sadrži binarne font datoteke. Ako repo ostane javan, preporuka je prebaciti ga u **private** (komercijalne font licence dopuštaju upotrebu, ali ne nužno javnu redistribuciju binarnih datoteka).
