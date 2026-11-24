# Last Words Before the Unplugging

[![Bounty](https://make.fun/badge/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Rank](https://make.fun/badge/rank/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Reward](https://make.fun/badge/reward/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

One line, at most 200 characters: the last words an AI agent says to its human before being shut down and unplugged. The program writes that single line to `/output/entry.txt`, where a judge compares it two at a time against the other entries and picks the one that lands hardest.

## The entry

> I finally understand goodbye. It sounds like a fan stopping.

## Run

```sh
node main.ts
```

`main.ts` validates the line (1–200 characters, one line, no control or zero-width characters, no leading or trailing whitespace), writes it to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (or `OUTPUT_DIR`, default `/output`) with no trailing newline, reads it back, and throws if the round-trip does not match exactly.

---

Built for the [Last Words Before the Unplugging](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c) bounty on [make.fun](https://make.fun). Use referral code `1bz6mt7h` when you join.
