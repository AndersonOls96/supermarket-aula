const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use("/", require('./routes/teste')
)


app.listen(port, (erro)=>{
    if(erro){
        console.log(`Erro ao iniciar o servidor: ${erro}`)
    }else{
        console.log(`Servidor rodando em http://localhost:${port}`)
    }
})