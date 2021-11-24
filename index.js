let calcFunc = require("./methodsCalc")

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/calcImc', function (req, res) {
    let alt = req.query.altura;
    let peso = req.query.peso;
    let result = calcFunc.calc(peso, alt);
    let value = calcFunc.result(result);
    res.cookie('resultado', result)
    res.cookie('value', value)

    switch (value) {
        case 'Pessoa Abaixo do peso':
            res.sendFile(path.join(__dirname, 'baixo.html'))
            break;
        case 'Pessoa com peso normal':
            res.sendFile(path.join(__dirname, 'normal.html'))
            break;
        case 'Pessoa com sobrepeso':
            res.sendFile(path.join(__dirname, 'sobrepeso.html'))
            break;
        default:
            res.sendFile(path.join(__dirname, 'obesidade.html'))
            break;
    }
})

router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

router.get('/baixo',(req,res) =>{
    res.sendFile(path.join(__dirname, 'baixo.html'))
})

router.get('/normal',(req,res) =>{
    res.sendFile(path.join(__dirname, 'normal.html'))
})

router.get('/sobrepeso',(req,res) =>{
    res.sendFile(path.join(__dirname, 'sobrepeso.html'))
})

router.get('/obesidade',(req,res) =>{
    res.sendFile(path.join(__dirname, 'obesidade.html'))
})


app.use('/', router);
app.listen(process.env.PORT ?? 3000,function(erro){
    if(erro){
        console.log(erro)
    }else{
        console.log('Servidor rodando')
    }
})