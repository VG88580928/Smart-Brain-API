import express, { response } from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import handleRegister from './controllers/register.js';
import handleSignin from './controllers/signin.js';
import handleProfileGet from './controllers/profile.js';
import { handleApiCall, handleImagePut } from './controllers/image.js';

const db = knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
  });

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {res.send('success')})
app.post('/signin', handleSignin(db, bcrypt))
app.post('/register', handleRegister(db, bcrypt))
// 問題>>註冊沒打名字(沒勾選not null)和密碼(應該是空string也會被hash函式作用導致)也會成功
app.get('/profile/:id', handleProfileGet(db))
app.put('/image', handleImagePut(db))
app.post('/imageurl',handleApiCall)

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(process.env.PORT || 3000,() => {
    console.log(`app is running on ${process.env.PORT}!!`)
})


/*
/ --> res = 成功
/signin --> post = 成功/失敗
/register --> post = userObj 
/profile/:userId --> GET = user
/image --> PUT --> user
*/