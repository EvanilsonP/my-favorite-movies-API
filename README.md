# Sobre
CRUD - API contendo a lista dos meus filmes favoritos

# Rotas
router.get('/', controller.homePage);  

router.get('/allMovies', controller.allMovies);   

router.get('/movie/:id', checkMovieExists, controller.movieByID);  

router.post('/create', checkRequiredFields, movieValidation, controller.createMovie);   

router.delete('/:id', checkMovieExists, controller.deleteMovie);  

router.put('/:id', checkMovieExists, controller.updateMovie);

# Como usar
Clone esse repositório git@github.com:EvanilsonP/my_favorite_movies_API.git;  

Rode o comando npm install no terminal para instalar as dependências;    

Crie um arquivo .env e siga as instruções do arquivo .env.example;   

# Middlewares
checkMovieExists tem como função avisar ao usuário quando ele passar um id inexistente nas rotas de put, delete e selecionar filme por id;

checkRequiredFields avisa ao usuário quando ele deixa de preencher algum campo obrigatório;  

validateMovie faz a validação de dados antes de que o filme seja criado e salvo no Banco de Dados;

# Detalhes
Essa API foi feita com o framewordk do Node Js chamado Express Js;    

O banco de dados utilizado foi o mongodb + ORM mongoose;  

O padrão de arquitetura aplicado nessa API foi o padrão MVC;  

Para validação de dados foi usado a biblioteca Joi;   

Para testes foi usado a biblitoeca Jest;

# Novas funcionalidades
Até hoje o dia de hoje 15/03/24 as funcionalidades de criar usuário e login não foram implementadas, assim como autorização, autenticação e criptografia. 

 
