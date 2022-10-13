## Descripción

Bakend para revisión de código.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Swagger](https://transfer-backend-c6etffdimq-uc.a.run.app/api) Definición básica de endpoints

[Sequelize](https://sequelize.org/) ORM para consultas a base de datos.

Esta api se encuentra alojada en el servicios "Cloud Run" en Google Cloud Platform, por lo que esta contenerizada y preparada para escalamiento.

## Como instalar

- Instalar [NodeJS](https://nodejs.org/es/)

- Clonar repositorio > git clone https://github.com/endergalban/transfer-backend.git

- cd transfer-backend

- npm i

- Clonar el archivo .env.example y crear un nuevo archivo con el nombre .env

  Ajustar variables em archivo .env:

  DB_HOST :
  Host de la base de datos, por ejemplo:

		DB_HOST = localhost

  DB_NAME :
  Nombre de la base de datos, por ejemplo:

		DB_NAME = transfer

  DB_PASSWORD :
  Password de la base de datos, por ejemplo:

		DB_PASSWORD = password

  DB_PORT :
  Puerto usado por base de datos, por ejemplo:

		DB_PORT = 3306

  DB_USER :
  Usuario de la base de datos, por ejemplo.

		DB_USER = root

## Puesta en marcha

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Contacto

- Author - Ender Galban
- Email - endergalban@gmail.com
