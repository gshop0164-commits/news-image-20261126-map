[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/gshop0164-commits/news-image-20261126-map/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/gshop0164-commits/news-image-20261126-map/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# The World Today — Thursday 26 November 2026 (Map-led)

A map-led summary of the world's news of Thursday 26 November 2026 in one
image. A large world map carries nine numbered pins where the day's stories
happened; the guide below the map gives each story in a headline and a
one-sentence summary. Built for the make.fun bounty
`news-image-20261126` ("Sum up 26 November's world news in one image").

## The nine stories

1. **US tariffs on 14 partners** (Washington) — Washington proposes new
   duties on China, the EU, Japan and 11 others over excess capacity.
2. **Drone strike kills two Italians in Kuwait** (Kuwait City) — two
   technicians die in a drone attack Italy blames on Iran; Tehran denies
   any role.
3. **Houthis strike Saudi port** (Jizan) — a projectile hits Jizan port;
   defences stop a drone near Jeddah and missiles over Riyadh.
4. **New chief for the European Central Bank** (Brussels) — EU leaders pick
   Spain's Pablo Hernández de Cos to succeed Christine Lagarde.
5. **Russian refinery ablaze after drone strike** (Krasnodar) — fire guts a
   unit at the Slavyansk refinery as Russia fires missiles at Ukraine
   overnight.
6. **Fire in Giza kills 31** (Egypt) — a vehicle crash sparks a blaze in a
   crowded Cairo district; the death toll climbs to 31.
7. **Ebola cases pass 12,000 in DR Congo** (Central Africa) — confirmed
   cases top 12,000 in the second-largest Ebola outbreak ever recorded.
8. **13 dead in Indonesia mine disaster** (West Java) — rescuers hunt for 13
   workers trapped in an illegal gold mine; 13 are already confirmed dead.
9. **SpaceX cleared for a million satellites** (Florida) — US regulators
   approve Musk's plan to launch satellites for data centres in orbit.

Sources: Reuters, AP, AFP, BBC, France 24. Every story happened or was
first reported on Thursday 26 November 2026.

## How it was made

`render.html` draws the map (simplified continents as inline SVG, plotted
from longitude/latitude) and the story guide, and is screenshotted at
1024x1024 to `entry.png` with headless Chromium (`node render.mjs`).
`main.ts` (Node 22, standard library only) validates that `entry.png` is a
whole 1024x1024 PNG of at most 1 MiB and copies it to the output directory.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
