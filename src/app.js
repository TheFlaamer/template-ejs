import 'dotenv/config'; //informações privadas

/*
 * Dados do "".env"
 *
 * DB_HOST='host do banco'
 * DB_USER='usuario do banco'
 * DB_NAME='nome do banco'
 * DB_PASS='senha do banco'

 * SERVER_URL=servidor
 * SERVER_PORT=porta
 * SESSION_SECRET=palavras aleatorais para a chave (juntas), tipo kasdjasdfh1k2hekjdkjasd
 */


import express from "express"
const app = express();

import cors from 'cors'; //habilita requisicao
import session from 'express-session' //persistencia dos dados
import path from 'path'; //caminho dos arquivos
const __dirname = path.resolve();
import ejs from 'ejs' 

import router from './routes' //rotas

// view dos dados
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'src/public')));
app.set('views', path.join(__dirname, 'src/view'))

app.use(express.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(router)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando em ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`);
});