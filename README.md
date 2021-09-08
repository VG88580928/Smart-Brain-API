## 資料庫結構
這是users table
```sql
CREATE TABLE users (
	id serial PRIMARY KEY,
	name varchar(100) NOT NULL,
	email text UNIQUE NOT NULL,
	entries BIGINT DEFAULT 0,
	joined TIMESTAMP NOT NULL
);
```
