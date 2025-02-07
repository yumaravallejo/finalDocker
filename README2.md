# Guía detallada de despliegue de la aplicación
Para comenzar será necesario descargar los archivos del repositorio o hacer un pull del mismo para poder tener los archivos y programas necesarios para el despliegue, el uso y las pruebas de la misma.

## 1.- Cómo construir los contenedores
Para construir los contenedores será necesario tener un Dockerfile para cada microservicio y para la base de datos mysql, es decir 3 Dockerfile que puedes encontrar en los archivos del repositorio. Además para hacerlo más sencillo usaremos un Docker Compose, ya que con este podremos tener todas las configuraciones más a mano y actualizables cuando lo necesitemos.

Crear una imagen (nombre: Dockerfile) posicionándote donde esté el Dockerfile
```
docker build nombre_imagen .
docker build -f Dockerfile_nombre -t nombre_imagen .
```

## 2.- Cómo levantar los servicios

Crearemos los contenedores a partir del siguiente comando combinándolo con las opciones siguientes según el contenedor y sus necesidades específicas
```
docker run [opciones] nombre_imagen 
```
###Opciones
--name nombre_contenedor --> dar un nombre al contenedor
-p puerto_local:puerto_maquina --> ponerle un puerto de escucha
-d --> activar en segundo plano
-v /ruta/local:/ruta/contenedor --> crear un volumen
-e NOMBRE_VAR=valor --> dar variables de entorno
--restart {always, no, ...} --> que se reinicie cuando digas
--link contenedor --> que se conecte a otro contenedor por ejemplo php con mysql

## 3.- Usando Docker Compose (Opcional)
Para hacer el despliegue con el docker compose donde ya están todas las configuraciones necesarias para cada contenedores, solo necesitaremos usar el siguiente comando estando posicionados donde se encuentre el dockerfile:
```
docker-compose up -d 
```

## 4.- Pruebas de funcionamiento
Para las pruebas de funcionamiento usaremos curl y Postman
Con curl escribiremos lo siguiente:
```
curl http://localhost:5000?id_producto=1
curl http://localhost:5000
curl -X POST http://localhost:10000 -d "usuario=mi_usuario&clave=mi_contraseña"
```
Para la aplicación de postman deberemos escribir las url siguientes
```
GET --> http://localhost:5000
GET --> http://localhost:5000 en este caso le pasaremos por param id_usuario con un valor de ejemplo como 1
POST --> http://localhost:10000 para el login usaremos en raw el modo json y escribiremos lo siguiente
{
	"usuario":"Yumara",
	"clave":"123456",
}
```
Deberemos usar valores que hayamos escrito en el script de la base de datos o añadamos después
