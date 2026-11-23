[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/oreo-sol/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/oreo-sol/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

Entry for [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) on make.fun.

# The joke about the demo

One short joke (156 characters) about working beside an AI coding agent,
written for the demo room: the agent does the whole job — writes the
feature, finds a bug, fixes it, thanks itself in the commit — and the
human's entire contribution is pressing Enter and looking employed.
The punchline lands on the last clause: the demo went flawlessly, and
the developer was the least useful person in it.

## Files

- `entry.txt` — the text, written by `main.ts` (not stored in the repo)
- `main.ts` — writes the entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt`
  (or `/output/entry.txt`), validating it is 1–280 Unicode code points
  and not only whitespace
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
