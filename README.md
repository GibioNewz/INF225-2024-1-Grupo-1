# INF225-2024-1-PAR200-GRUPO-1

# Grupo 1

Este es el repositorio del *Grupo 1*, cuyos integrantes son:

* Eduardo Gómez García - 201910524-8
* Ignacio Muñoz Martínez - 202030543-9
* Gabriel Zapata  - 202041528-5
* Thomas Soto Fuica - 201930528-k
* **Tutora**: Giuliana Zanetti

## Wiki del proyecto Identificado


Puede acceder a la Wiki  del proyecto seleccionado del paralelo 200 mediante el siguiente [enlace](https://gitlab.inf.utfsm.cl/christian.ossa/inf236-2023-2-grupo-18/-/wikis/%E2%9D%80Home%E2%9D%80).

## Descripción

El proyecto base corresponde a un sistema de automatización para el analista de ventas de un banco. Este es una aplicción web que asiste al usuario en su procesamiento de solicitudes de préstamos en UF.


## Como correr el proyecto

-Instalar postgres.
-Ir a la carpeta de backend
-Ejecutar npm install
-Ejecutar los siguientes comandos o importar la base de datos adjunta
-npx sequelize db:create 
-npx sequelize-cli db:migrate
-npm run start
-Luego, ir a la carpeta proyecto
-Ejecutar npm install
-Ejecutar npm run start
-Loggearse y probar.

# Ojo
Si importaste la base de datos, no tendrás que registrar nuevos usuarios, pero si usaste los comandos para crear la base de datos y generar las migraciones, deberás crear usuarios con sus respectivos roles. Por ende se recomienda importar la db.

# Credenciales
### Analista
user : analista@usm.cl
pass: 220053

### Vendedor
Vendedor1 
user: vendedor1@usm.cl
pass: 220053
Vendedor2
user : vendedor2@usm.cl
pass: 220053

### Cliente
user: cliente1@usm.cl
pass: 220053
