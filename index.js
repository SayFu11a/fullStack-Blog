import express from 'express';
// import { restart } from 'nodemon';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';

mongoose
   .connect('mongodb+srv://admin1:wwwwww@cluster0.okaofvn.mongodb.net/?retryWrites=true&w=majority')
   .then(() => console.log('DB ok'))
   .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json()); // чтобы читать джейсон запросы.

app.post('/auth/register', (req, res) => {}); //  если придет пост запрос вернуть сексес тру

app.listen(4444, (err) => {
   if (err) {
      return console.log(err);
   }

   console.log('Server OK');
});

// app.get('/', (req, res) => {
//    res.send('Hello World');
// }); // если придет гет запрос вернуть хеловорлд

// app.post('/auth/login', (req, res) => {
//    console.log(req.body); // с помошью req получаем инфу

//    const token = jwt.sign(
//       {
//          email: req.body.email,
//          fullName: 'Хрен Моржовый',
//       },
//       'secret123',
//    ); // шифрует данные

//    res.json({
//       success: true,
//       token,
//    });
// }); //  если придет пост запрос вернуть сексес тру
