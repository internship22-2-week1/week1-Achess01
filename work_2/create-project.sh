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
