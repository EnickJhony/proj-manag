# Project management - technical challenge

By: Enick Jhony

### Premissas:

- O front vai iniciar na rota `/` que vai me trazer um `GetAll` de todos registros criados
- ainda na rota `/` vai ter um link para direcionar para a criação do projeto
- nesse link vai direcionar para a rota `/project` que vai ter um form para cadastrar novos projetos
- voltando para a `home` terá uma lista com os projetos que foram posteriormente cadastrados
- e ao lado de cada um dos projetos terá um botão para deletar o projeto
- esse botão vai chamar o backend mandando o metodo `DELETE` junto com o ID do projeto

### Steps:
Back end
- [x] Definição do Back-End
- [x] Implantação do Model da aplicação
- [x] Implantação do Docker juntamente com imagem do PostgreSQL
- [x] Implantação do ORM da aplicação (Prisma)
- [x] Implantação das Rotas da aplicação (`/` e `/project`)
- [x] Criar Metodo `POST`
- [x] Criar Metodo `GET ALL`
- [x] Criar Metodo `GET BY ID`
- [x] Criar Metodo `DELETE`
- [x] Criar Seed dos membros iniciais
- [x] Liberar CORS para receber solicitações do Frontend
- [ ] Criar scripts para iniciar o projeto
- [ ] Criar unico scripts para iniciar todo o projeto
- [ ] Criar Validação dos campos junto ao banco e backend
- [ ] Criar testes unitários

Front end
- [x] Definição do Front-End com a limpeza inicial
- [x] Criar componente / serviço para listagem dos projetos
- [x] Criar componente / serviço para a criação do projetos
- [x] Criar botão para a deleção dos projetos pelo ID
- [x] Criar rotar `/` e `/project` sendo o `getAll` e a página de cadastro `POST`
- [x] Criar validação dos campos pelo form.
- [ ] Criar componente / serviço para mostrar os detalhes do projetos individualmente
- [ ] Estilizar as páginas
- [ ] Resolver problema de renderização da Data na página home (possivelmente problema de timezone)

### Diagrama de Classe

![Diagrama de classe](./.github/ClassDiagram.png)