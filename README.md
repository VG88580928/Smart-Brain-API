## 資料庫結構
users table:
```sql
CREATE TABLE users (
	id serial PRIMARY KEY,
	name varchar(100) NOT NULL,
	email text UNIQUE NOT NULL,
	entries BIGINT DEFAULT 0,
	joined TIMESTAMP NOT NULL
);
```
login table:
```sql
CREATE TABLE login (
	id serial PRIMARY KEY,
	hash varchar(100) NOT NULL,
	email text UNIQUE NOT NULL
);
```
