---
name: skimlight
description: Send decisions the user should make to SkimLight with `ask`, keep working without waiting, and pick up the answers later with `answers`. Use when a choice belongs to the user (money, publishing, deleting, production, outside services, design, or anything you can't settle yourself), at each checkpoint, and before you finish.
---

# SkimLight

SkimLight is the user's inbox for decisions. Post a question with `ask`, keep working, and pick up the answer later with `answers`. The user answers on their Mac or iPhone.

## When to ask

- Ask when the choice belongs to the user: spending money, publishing, deleting, touching production, contacting an outside service, design direction, or any call you can't settle from the code and docs.
- Don't ask about things you can look up yourself, and don't use it for your tool's own permission prompts.

## How to ask

- Give `ask` a short `title`, the `question`, 2 or 3 `options`, and a `recommendation`: the `id` of the option you would pick. Always recommend one.
- Keep each option label short. Put trade-offs in the option's `detail` or in `detail`.
- Add `urls` (https only) or `images` when they help the user decide.
- Set `urgent: true` only when the work is blocked on the answer. Set `kind` when one fits.
- Never put secret values (API keys, passwords, tokens, private keys) in any field.

## Don't wait

- `ask` returns an `id` right away. Don't stop, sleep, or poll for the answer.
- Hold back only the part that depends on the answer, and keep doing the rest.

## Pick up answers

- Call `answers` at each natural checkpoint and before you finish.
- Pass the `now` from your previous `answers` call as `since`. Leave `since` out on your first call.
- Follow `answer.optionId` and `label`. If the user wrote `freeText`, follow that instead.
- `pending` counts your questions that are still open. If any are open when you finish, tell the user what's waiting on them.

## Cancel

- When a question no longer matters (you found the answer, or the plan changed), call `cancel` with its `id`.
