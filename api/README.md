## 'Database'

- Dummy data exists under `res/dummy[/subfolder]/*.json` while real data containing sensitive information should be placed
  under `res/data[/subfolder]/*.json` before building, and **not** committed to the repository.
- If `NODE_ENV=production` is
  set, it will read from the `data` directory otherwise it will read from the `dummy` directory.
