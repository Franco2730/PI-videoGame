//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js'); //Importamos configuracion del servidor
const { conn } = require('./src/db.js'); //Importamos base de datos.

// Syncing all the models at once. Cada vez que se levante el servidor, la base de datos estará ready 
conn.sync({ force: false }).then(() => {//Debe estar en tru para que la BD borre las tablas en caso de que existan y si no existen las crean. Esto es perjudicial para el sistema en produccion ya que borra todos los datos. La sincronización de la bd debe estar forzada cuando hago un cambio en los modelos. 
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
