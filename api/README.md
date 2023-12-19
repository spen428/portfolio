## 'Database'

- Dummy data exists under `res/dummy[/subfolder]/*.json` while real data containing sensitive information should be placed
  under `res/data[/subfolder]/*.json` before building, and **not** committed to the repository.
- By default data is read from `RES_PATH/DATA_PATH`, which defaults to `$srcDir/../res/dummy`.
- In production, you should set `DATA_PATH=data` and `RES_PATH` too if it is deployed in a different location.
