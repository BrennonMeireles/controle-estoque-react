    //importando o mongoose e o express
    const express = require('express'); 
    const mongoose = require('mongoose'); 
    const cors = require('cors');

    const app = express();  //fazendo a instancia do método express()
    app.use(express.json()) //To configurando minha API para que ela consiga ler dados que venha como JSON
    app.use(cors()); // Adicionando o middleware de CORS. O CORS serve para que tanto o react quanto a API rodem em diferentes portas
    const port = 3000; //declarando a porta que estará a aplicação

    //Fazendo a conexão com o banco de dados
    mongoose.connect('mongodb+srv://gabrieldosanjosdbz:Vdm3N71Zvr22NOgR@estoque.dukzdi9.mongodb.net/?retryWrites=true&w=majority&appName=estoque')

    //Declarando a minha model, que é praticamente o meu manipulador do banco de dados. No segundo parametro é a estrutura do meu model
    const Produto = mongoose.model('Produto', {
        nome: String,
        sku: String,
        descricao: String,
        quantidade: Number,
        marca: String,
        preco: String,
        cor: String,
        imagem: String // Novo campo para a URL da imagem
    })

    //Método GET
    app.get("/", async (req, res) => {     // Definindo uma rota para o método GET na raiz do servidor
        const produto = await Produto.find()  //Método estatico para ler e trazer todos os dados do banco de dados  
        return res.send(produto)     //caso o método get, ou seja, a requisição seja bem sucedida, voltará a resposta do produtos
    })

    //Método GET para buscar um usuario em especifico
    app.get("/:id", async(req, res) => {     //passando o id como parametro na URL
        const produto = await Produto.findById(req.params.id)  //aqui estou consultando um cadastro em especifico pelo parametro id vindo da url
        return res.send(produto)
    })

    //Método GET para fazer consulta no banco de dados para buscar por produtos com nome semelhante ao termo de pesquisa
    app.get("/search/:query", async(req, res) => {
        const query = req.params.query
        const produto = await Produto.find({ nome: { $regex: query, $options: 'i' } }); // Faz uma consulta no banco de dados usando expressão regular para buscar por produtos com nome semelhante ao termo de pesquisa
        return res.send(produto);
    })

    //Método POST 
    app.post("/", async (req, res) => {
        const produto = new Produto({   //to instanciando o Model Produto que eu criei e salvando os dados nele
            nome: req.body.nome,
            sku: req.body.sku,
            descricao: req.body.descricao,
            quantidade: req.body.quantidade,
            marca: req.body.marca,
            preco: req.body.preco,
            cor: req.body.cor,
            imagem: req.body.imagem // Adicione o campo imagem

        })

        await produto.save() //salva o objeto do produto no banco de dados dele
        return res.send(produto)   //Retornando o produto salvo como resposta
    })

    //Método DELETE 
    app.delete("/:id", async(req, res) => { 
        const produto = await Produto.findByIdAndDelete(req.params.id)  //aqui estou deletando um cadastro em especifico pelo parametro id vindo da url
        return res.send(produto)
    })

    app.put("/:id", async(req, res) => {
        const produto = await Produto.findByIdAndUpdate(req.params.id, {    //o primeiro parametro to pegando o id da url
            nome: req.body.nome,                                           //este segundo parametro estou fazendo o update dos dados
            sku: req.body.sku,
            descricao: req.body.descricao,
            quantidade: req.body.quantidade,
            marca: req.body.marca,
            preco: req.body.preco,
            cor: req.body.cor,
            imagem: req.body.imagem // Adicione o campo imagem

        }, {
            new: true                                                   //ele retorna este documento atualizado como "novo"
        })
        
        return res.send(produto)
    })

    app.listen(port, () => {        // Iniciando o servidor na porta especificada
        console.log('App running')  // Imprimindo uma mensagem no console enquanto o servidor estiver rodando
    })
