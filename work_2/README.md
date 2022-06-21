# Día dos
## Creando pequeña API usando Nodes.js y Express. Se usó Github Codespaces

![primero](./primero.png)
![segundo](./segundo.png)
![tercero](./tercero.png)

## Script
```bash
#!/bin/bash

NAME=${1:-"proyecto"}
read  -p 'Introduzca el mensaje> ' MESSAGE
CSS="body{
        background-color: #2b388f;
        display: grid;
        place-items: center;
    }
    h2{
        color: #fff
    }"
HTML='<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scripting</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h2>'"$MESSAGE"'</h2>
</body>
</html>'

mkdir $NAME/
if [ $? -ne 0 ] ; then
    echo "Could not create the project"
else
    cd $NAME/
    mkdir assets
    cd assets
    mkdir css img js;
    echo $CSS > css/style.css
    cd ..
    echo $HTML > index.html
    echo "git init"
    git init
    brave index.html
    echo "Project created" 
fi
```

## [Problemas de lógica](https://github.com/contents-pasantia/content2/blob/main/Resources/Actividad1.md)
### 1) 
**Pasos** 
- Tener un arreglo donde se guarden las botellas con sus proiedades (capacidad y cantidad)
- Por cada botella calcular
  - Si la cantidad requerida es mayor a 0
    - Calcular la cantidad de botellas haciendo una división entre la cantidad requerida y la capacidad de la botella
    - Si el resultado de esa división es mayor a la cantidad de botellas de la capacidad evaluada entonces se toman todas las botellas, sino se toman solo las necesarias
    - Restar la cantidad de botellas en el inventario
    - Agregar las botellas a la entrega.
    - Restar la cantidad requerida por el cliente

```
BOTELLA{
  CAPACIDAD
  CANTIDAD
}

ENTREGA = []
Por cada BOTELLA_ACTUAL EN CAPACIDAD_DE_BOTELLAS:
  SI COMPRA_ML > 0:
    cantidad = COMPRA_ML / BOTELLA_ACTUAL.CAPACIDAD
  	SI cantidad > BOTELLA_ACTUAL.CANTIDAD:
      botellas_final = BOTELLA_ACTUAL.CANTIDAD
    SINO
      botellas_final = cantidad
    BOTELLA_ACTUAL.CANTIDAD = BOTELLA_ACTUAL.CANTIDAD - botellas_final
    entrega = BOTELLA(botellas_final, BOTELLA_ACTUAL.CAPACIDAD)
    ENTREGA.AGREGAR(entrega)
    COMPRA_ML = COMPRA_ML - (botellas_final * BOTELLA_ACTUAL.CAPACIDAD)

```
### 2)
**Pasos**
- Recibir los archivos (FILES)
- Por cada archivo hacer
  - Si el archivo está en el diccionario, entonces sumar uno a ese elemento en el diccionario y cambiar el nombre del archivo actual usando '(' repitencias ')'.
  - Si no está en el diccionario, agregarlo con un valor de 0.


```
ARCHIVOS_GUARDADOS = {}
Por cada FILE_ACTUAL en FILES:
  SI FILE_ACTUAL está en ARCHIVOS_GUARDADOS:
    ARCHIVOS_GUARDADOS[FILE_ACTUAL]++
    FILE_ACTUAL = FILE_ACTUAL +'('+ ARCHIVOS_GUARDADOS[FILE_ACTUAL]  + ')'
  SINO:
    ARCHIVOS_GUARDADOS[FILE_ACTUAL] = 0
```