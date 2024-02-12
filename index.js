import express from 'express';
import mongoose from 'mongoose';

// import { restart } from 'nodemon';

import { registerValidation, loginValidation, postCreateValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js'; // все методы из UserController.js сохрани в перемен UserController
import * as PostController from './controllers/PostController.js';

// import User from './models/User.js';

mongoose
   .connect(
      'mongodb+srv://admin1:wwwwww@cluster0.okaofvn.mongodb.net/blog?retryWrites=true&w=majority',
   )
   .then(() => console.log('DB ok'))
   .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json()); // чтобы читать джейсон запросы.

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register); //  если придет пост запрос вернуть сексес тру, регистрация
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
// app.delete('/posts', PostController.remove);
// app.patch('/posts', PostController.update);

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
