const termux = termux => {
return `Comandos básicos para usar en termux o cualquier terminal que simule linux

cd = abrir directorios(carpetas)
exemplo = cd /sdcard/

ls = enumera los archivos y directorios presentes

mv = mover archivo o directorio a otra ubicación
exemplo = mv teste.sh(archivo) $HOME
Obs: el comando $ HOME es la carpeta de inicio de termux (donde comienzas)

cp = copiar archivos y directorio a otra ubicación
exemplo = cp -r teste(Directorio) $HOME 
Obs: o -r despues de cp es un argumento que se utilizó para mover el directorio con su contenido a otra ubicación

qué son los argumentos = los argumentos son opciones que usas en el terminal para poder ejecutar el comando de una manera diferente

rm = elimina archivos y directorios
ejemplo = rm -r -f teste(directorio)
Obs = Lo mismo que el comando cp, mas o -f se utiliza en caso de que el archivo o directorio tenga dificultades para eliminarse o -f obligue a eliminarlo`
}

exports.termux = termux
