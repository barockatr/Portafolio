const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../dist');

// Define una función para excluir archivos CSS
function filterOutCSS(file) {
  return !file.endsWith('.css');
}

// Elimina todos los archivos excepto los archivos CSS
sh.ls(destPath).filter(filterOutCSS).forEach(file => {
  sh.rm('-rf', upath.join(destPath, file));
});
