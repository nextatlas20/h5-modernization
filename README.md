# h5-modernization

React H5 rebuild of the product detail sheet that still ships inside the WeChat
mini-program bundle (the `msc` stack). Each module that is taken off the legacy
bundle becomes a standalone React module directory `modules/<module-key>/` on a
developer branch, so the H5 shell can load it independently.

Layout on `main`:

- `registry/rollout.json` – the modules that belong to the next release and the
  developer account responsible for each of them;
- `docs/porting-contract.md` – the definition of "ported" used by this program.

Developer work happens on `dev/<account>` branches. Nothing is merged back to
`main`; releases are cut from the branch tips once the contract is satisfied.
