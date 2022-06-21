# Día dos
## Creando pequeña API usando Nodes.js y Express. Se usó Github Codespaces

![primero](./primero.png)
![segundo](./segundo.png)
![tercero](./tercero.png)

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