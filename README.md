# javasciptsingleapp

Este proyecto fue creado con Node versión 20.12.2.
Al momento de descargar este proyecto, instale las dependencias con npm install, para ejecutar npm run dev, la aplicación corre en: http://localhost:8080/
## Single App Javascrip

Single App Javascrip es una aplicación web de página única y fue creada como resultado a una práctica utilizando JavaScript y HTML puro, Webpack como server, controles Bootstrap y estilos Bootswatch, fetch para conectarse vía URL https://jsonplaceholder.typicode.com/users, https://jsonplaceholder.typicode.com/posts/, y Firebase Hosting como servicio de publicación. 

Si desea ver en operación la aplicación, solo de click en la siguiente URL:
https://javasciptsingleapp.web.app/#/

![](/images/01.png)

En base a la práctica, decidí crear un solo FrontEnd para mostrar todos los puntos que requerían programación.

## Detalles técnicos

En base a la url https://jsonplaceholder.typicode.com/users, revisando la API de jsonplaceholder para la ruta /users, solo maneja el método Get, por consiguiente para hacer nuestro get a la url, utilizo el método fetch para extraer el listado de los usuarios que maneja la url, que en este caso solo envía un listado de 10 elementos y dicha informacion se guarda en el localstorage del navegador para el manejo del despliegue en la tabla de la vista Usuarios.

## Vista de usuarios:

Para tener acceso a la vista de usuario solo de click en la opción de Users en la NavBar.

![](/images/02.png)

## Post.

Para poder ver los post de cada usuario, solo de click en el botón Post. 

![](/images/03.png)

Se desplegará el siguiente Micro FrontEnd, donde muestra lo posteo del usuario seleccionado.

![](/images/04.png)

`© 2024 Copyright: GMayaS C:\>Desarrollo en Sistemas.`


