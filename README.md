# CrudMongoDB
![image](https://user-images.githubusercontent.com/44410208/121423066-40fabd00-c946-11eb-9595-164ea99a0dd8.png)


Para executar esse código você precisa primeiro ir no painel do mongoDB (https://cloud.mongodb.com/) se cadastrar e criar um cluster e uma colection ( as colections são as tabelas no Mongo DB), você precisará criar um usuário e dar as permissões para ele:
![image](https://user-images.githubusercontent.com/44410208/121423508-b9fa1480-c946-11eb-9f4c-7c636171cfa1.png)

Ao clicar em "+ New Database User" você criará um usuário, informe um nome, vc pode gerar uma senha automática, clique em 'SHOW' caso queira ver a senha, deixe nesse momento com todas as permissões para fins didáticos e cique em copiar a senha (Você vai precisar copiar essa senha para informar no código que irá fazer a autenticação)
![image](https://user-images.githubusercontent.com/44410208/121424139-663bfb00-c947-11eb-9487-c0cccb2b7ec8.png)

Você pode clonar esse projeto, dentro da pasta rode um 'npm init' e depois 'npm install nodemoon'. 
Abrindo o arquivo index.js você deve informar o user criado, senha em 'psw' e o nome do cluste.
![image](https://user-images.githubusercontent.com/44410208/121424625-eb271480-c947-11eb-8ba3-38aa80800d07.png)

Descomente o trecho onde está comentado CREATE DOCUMENT e READ DOCUMENT:
![image](https://user-images.githubusercontent.com/44410208/121424983-52dd5f80-c948-11eb-9eba-f75e4f9d1242.png)

 E rode o projeto no terminal com 'node index.js'
 
 O código deve ter gerado um registro em seu cluster MongoDB, para executar o UPDATE e o DELETE basta descomentar os outros trechos do código e informar os valores a serem afetados.

Se precisarem de ajuda para essa integração podem mandar e-mail para yuri.erik.oliveira@gmail.com. 

Vlw! ;)
