// --> importar módulo OS
import os from 'os';

// Función para convertir bytes en gb, para facilitar la legibilidad
const fnGigabytes = (bytes) => {
    return (bytes / (1024 ** 3)).toFixed(2) + ' GB';
}

// Obtener la arquitectura del sistema OP
console.log('Arquitectura del Sistema:', os.arch());

// Obtener el tipo de sistema OP
console.log('Sistema Operativo:', os.platform());

// Obtener la arquitectura del sistema OP
console.log('Total Memoria Ram:', fnGigabytes(os.totalmem));

// Obtener la arquitectura del sistema OP
console.log('Total Memoria Ram Libre:', fnGigabytes(os.freemem()));

// Obtener la arquitectura del sistema OP
console.log('Arquitectura del Sistema:', os.cpus());
