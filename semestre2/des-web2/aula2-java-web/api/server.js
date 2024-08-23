import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(requisacao,resposta)=>{
    resposta.send('Olá mundo!')
})
app.get('/teste',(requisacao,resposta)=>{
    resposta.json({msg: "Teste"})
})
// node server.js - rodar a API
app.listen(port, ()=>{
    console.log(`API Rodando em http://localhost:${port}`)
})


app.get('/tabuada', (req,res)=>{
    const numero = 3
    let delivery = ''
    for(let i=0; i<=10 ; i++) {
        let result = i * numero
        delivery = delivery+(`<p>${numero}x${i}=${result} </p>`)
    }
    res.send(delivery)
})

app.get('/tabuada3', (req,res)=>{
    const valor = 2
    let envio = ''
    for(let i=0; i<=10 ; i++) {
        let result = i * valor
        envio = envio+(`<p>${valor}x${i}=${result} </p>`)
    }
    res.send(envio)
})


