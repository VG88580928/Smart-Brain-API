此為Smart-Brain-App後端部分的實作  
前端repo:https://github.com/VG88580928/Smart-Brain-App  
## 資料庫結構 
共有2個tables  

- users table(儲存用戶基本資訊):  
```
id | name |     email     | entries |         joined
----+------+---------------+---------+-------------------------
  2 | 阿倫 | lun@gmail.com |       1 | 2021-06-16 15:36:42.512
  1 | len  | 123           |      16 | 2021-06-14 15:19:40.375
(2 rows)
```

SQL語法:  
```sql
CREATE TABLE users (
	id serial PRIMARY KEY,
	name varchar(100) NOT NULL,
	email text UNIQUE NOT NULL,
	entries BIGINT DEFAULT 0,
	joined TIMESTAMP NOT NULL
);
```
login table(儲存用戶密碼等安全資訊):  
```
 id |                             hash                             |     email
----+--------------------------------------------------------------+---------------
  1 | $2a$10$j.JuixEZROsD5ACzLHxB7OlDH9ABIgv8BwWwBwVMKKVLSsFbzq2q2 | 123
  2 | $2a$10$dtvcxBmiGS.zQfpsqQhJ5uXIsRbA/AVcmlAcXDI2SNBdUqHn2mjj6 | lun@gmail.com
(2 rows)
```
SQL語法:  
```sql
CREATE TABLE login (
	id serial PRIMARY KEY,
	hash varchar(100) NOT NULL,
	email text UNIQUE NOT NULL
);
```
