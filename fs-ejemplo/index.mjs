// --> Importar módulo FileSystem
import fs from 'fs';

// leer un archivo de manera asincronica (el archivo debe existir o el cb devolverá un error)
fs.readFile('./data/example.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo');
});

// Escribir un nuevo archivo en la ruta indicada
fs.writeFile('./data/newfile.txt', 'contenido del nuevo archivo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    // // Leer el archivo despues de crearlo
    // fs.readFile('./data/newfile.txt', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log('Leyendo archivo..', data);
    // });
});

// Reconombrar un archivo
fs.rename('./data/newfile.txt', 'modifiedFile.text', (err) => {
    if (err) throw err;
    console.log('El archivo a cambiado su nombre');
});