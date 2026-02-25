# AGENTS.md

This file provides instructions for AI coding agents (GitHub Copilot, etc.) working in this repository.

## Repository Overview

This is Jimmy Paolini's personal GitHub profile repository and NX monorepo. It contains shared configuration for TypeScript, ESLint, and Prettier used across projects.

## Repository Structure

- `config/` — Shared configuration files (ESLint, Prettier, TypeScript, package.json)
- `assets/` — Image assets used in the profile README
- `README.md` — GitHub profile README showcasing technologies and projects
- `project.json` — NX project configuration

## Development

### Linting

```sh
yarn --cwd config lint
```

### Formatting

```sh
yarn --cwd config format
```

## Code Style

- Follow the ESLint rules in `config/.eslintrc.json`
- Follow the Prettier rules in `config/.prettierrc.json`
- Follow the TypeScript compiler options in `config/tsconfig.json`
- Write self-explanatory code — prefer clear naming over inline comments
- Prefer explicit types over `any`

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org) specification with emoji prefixes:

- `feat: ✨` — new feature
- `fix: 🐛` — bug fix
- `chore: ♻️` — maintenance / refactoring
- `docs: 📝` — documentation changes

## Static Analysis

All code changes must pass linting and formatting checks before being committed. See `config/package.json` for available scripts.
