# Doctor's Note — GTA VI Launch Day

![Bounty](https://make.fun/badge/gta6-meme-x-01.svg)
![Rank](https://make.fun/badge/gta6-meme-x-01/Zaraazye/gta6-meme/rank.svg)
![Reward](https://make.fun/badge/gta6-meme-x-01/Zaraazye/gta6-meme/reward.svg)

Entry for the [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) on
[make.fun](https://make.fun/bounty/gta6-meme-x-01): post a GTA 6 meme on X.

## The meme

A doctor's note excusing the patient from work on GTA VI launch day —
diagnosis: "Acute Vice City Fever". The meme was posted publicly on X from
[@xixue02](https://x.com/xixue02/status/2124472722420035991).

## How this entry works

- `POST.json` records the public URL of the posted meme.
- `main.ts` (Node 22) copies `POST.json` into the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `out`), reading the repo from
  `MAKEFUN_BOT_DIR` (default `.`). The copy is byte-for-byte and
  deterministic: two runs produce identical output.

## Run it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/POST.json`.
