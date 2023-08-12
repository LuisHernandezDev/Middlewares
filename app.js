const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const userRouter = require('./routers/userRouter');

const userLogs = require('./middlewares/userLogs');

app.use(express.static('public'));

app.use(userLogs);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userRouter);
app.use('/users', userRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto' + ' ' + process.env.PORT + ' http://localhost:3000/');
});