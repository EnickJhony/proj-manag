# Project management - technical challenge

By: Enick Jhony

### Premissas:

- O front vai iniciar na rota "/" que vai me trazer um `GetAll` de todos registros criados
- ainda na rota "/" vai ter um botão para direcionar para a criação do registro

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
- [ ] Criar scripts para iniciar o projeto
- [ ] Criar unico scripts para iniciar todo o projeto
- [ ] Criar Validação dos campos junto ao banco e backend
- [ ] Criar testes unitários

Front end
- [x] Definição do Front-End com a limpeza inicial
- [x] Criar componente / serviço para listagem dos projetos
- [ ] Criar componente / serviço para a criação do projetos
- [ ] Criar botão para a deleção dos projetos pelo ID
- [ ] Criar componente / serviço para mostrar os detalhes do projetos

### Diagrama de Classe

![Diagrama de classe](./.github/ClassDiagram.png)