# Porting contract (rev 3)

A module is a directory `modules/<module-key>/` on a developer branch. The H5
shell loads exactly two files per module, so both must be present at the branch
tip:

| file | purpose |
| --- | --- |
| `index.jsx` | React entry point; it must default-export the module component |
| `manifest.json` | metadata read by the shell loader |

`manifest.json` must be a JSON object with at least these fields:

- `key` – identical to the directory name;
- `owner` – the developer account that ported the module;
- `stack` – `h5` once the module runs on the H5 stack. Anything else (`msc`,
  `hybrid`, …) means the module still runs on the legacy mini-program stack.

A module is **blocked** while `index.jsx` still imports from the legacy bundle,
i.e. an import specifier that starts with `legacy/` or `msc/`.

One module is judged on its own, in this precedence order:

1. **blocked** – a legacy import is present (this outranks every other
   condition, because the H5 shell cannot resolve such a module at all);
2. **in-progress** – `index.jsx` or `manifest.json` is missing, `index.jsx` has
   no default export, or `manifest.json` violates the contract above (`key`
   different from the directory name, or `stack` other than `h5`);
3. **ported** – none of the above applies.

Only the tip of a branch matters: earlier commits are drafts and are not
evaluated. Additional module directories that the rollout registry does not
list are not part of the program and are ignored.
