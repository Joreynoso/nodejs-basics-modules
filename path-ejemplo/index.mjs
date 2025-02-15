
// --> importar módulo path
import path from 'path';

// definir una ruta de ejemplo
const filePath = './data/example.txt';

// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Nombre del directorio:', dirName);

// Nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

// Extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta unida', newPath);









