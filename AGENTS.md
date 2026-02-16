# JimmyPaolini — GitHub Profile README

This project contains the [GitHub profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) for [@JimmyPaolini](https://github.com/JimmyPaolini).

## Purpose

This is **not a buildable application**. It's a static markdown project that renders as the GitHub profile page. All Nx targets (`build`, `lint`, `test`, `run`) are no-ops that simply echo a message.

## Contents

- [README.md](README.md) — The profile page content (portfolio icons, tech stack badges, contribution stats)
- [assets/](assets/) — Images and icons used in the profile
- [config/](config/) — Configuration files for profile widgets

## Development

To modify the GitHub profile:

1. Edit [README.md](README.md) directly
2. Commit and push — changes appear on the GitHub profile automatically
3. No build, test, or lint steps are needed

## Nx Integration

This project exists in the monorepo for organizational purposes. It is:

- **Excluded from knip** via `ignoreWorkspaces` in [knip.ts](../../knip.ts)
- **No-op targets** — all tasks echo placeholder messages
- **No dependencies** — standalone project with no internal or external package dependencies
