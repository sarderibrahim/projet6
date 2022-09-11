const express = require('express');
const mongoose = require('mongoose');
// const helmet = require('helmet');
const path = require('path');
// require('dotenv').config();

const sauceRoutes = require('./routes/Sauce');
const userRoutes = require('./routes/User');


mongoose.connect('mongodb+srv://srk:srk@cluster0.iva6p.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
// app.use(helmet());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/sauces',sauceRoutes);
app.use('/api/auth',userRoutes);
app.use('/images',express.static(path.join(__dirname,'images')));



module.exports = app;