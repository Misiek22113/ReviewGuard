# Issue tracker: GitHub

Issues and specs for this repo live as GitHub issues. Use the locally installed `gh` CLI for all operations. Do not create Codex cloud tasks as a substitute for issues.

## Conventions

- **Create an issue**: `gh issue create --title "..." --body "..."`
- **Read an issue**: `gh issue view <number> --comments`, including labels
- **List issues**: use `gh issue list` with suitable state and label filters
- **Comment on an issue**: `gh issue comment <number> --body "..."`
- **Apply or remove labels**: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`
- **Close an issue**: `gh issue close <number> --comment "..."`

Infer the repository from `git remote -v`; `gh` does this automatically when run inside this clone.

## Pull requests as a triage surface

**PRs as a request surface: no.**

GitHub shares one number space across issues and pull requests. If a bare reference such as `#42` is ambiguous, try `gh pr view 42` and fall back to `gh issue view 42`.

## When a skill says “publish to the issue tracker”

Create a GitHub issue.

## When a skill says “fetch the relevant ticket”

Run `gh issue view <number> --comments`.

## Wayfinding operations

Used by `/wayfinder`. The map is a single issue with child issues as tickets.

- **Map**: an issue labelled `wayfinder:map`, containing Notes, Decisions-so-far, and Fog
- **Child ticket**: a GitHub sub-issue, with a task-list fallback where sub-issues are unavailable
- **Labels**: `wayfinder:research`, `wayfinder:prototype`, `wayfinder:grilling`, or `wayfinder:task`
- **Blocking**: use GitHub’s native issue dependencies, falling back to a `Blocked by: #<n>` line
- **Claim**: assign the issue to the current GitHub user before starting work
- **Resolve**: comment with the result, close the issue, and add the context pointer to the map
