/**
 * file: server.js
 * description: file responsible for all configuration and execution the application
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Application running on port ', port);
});
