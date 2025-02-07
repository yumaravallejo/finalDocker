# Intrucciones para controlar los contenedores

Es necesario descargar primero los archivos necesarios o hacer pull del repositorio https://github.com/yumaravallejo/finalDocker

##1. Iniciar los servicios
Si se crea con docker compose la primera vez se usará 
```
docker-compose up -d
```
Para crear una imagen (estando situado en la carpeta del dockerfile)
```
docker build -t nombre_imagen . 
```
Si el dockerfile tiene un nombre distinto
```
docker build -t nombre_imagen -f nombre_dockerfile 
```
Para crear un contenedor
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

Para empezar un contenedor ya creado
```
docker start nombre_imagen 
```

##2. Detener los servicios
Para el docker compose use usará
```
docker-compose down
```
Para un contenedor específico
```
docker stop nombre_contenedor
```
Para borrar un contenedor
```
docker rm nombre_contenedor
```

##3. Actualizar los servicios
Lo cerramos, agregamos cambios al dockerfile o docker-compose y lo volvemos a construir y lanzar
```
docker-compose down
docker-compose build
docker-compose up
```

##4. Gestionar los logs de los contenedores
Para poder saber qué está ocurriendo en un contenedor, si va todo bien, si falla algo... existen los logs. Para poder llamarlo debemos escribir
```
docker logs nombre_contenedor
```
