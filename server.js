const app = require('./app')
const port = 3000

app.listen(port, (erro)=>{
    if(erro){
        console.log(`Erro ao iniciar o servidor: ${erro}`)
    }else{
        console.log(`Servidor rodando em http://localhost:${port}`)
    }
})