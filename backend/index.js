var fs = require('fs');
const http = require('http');

const https = require('https');

const app = require('./app');


// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/leche-vitrines.tv/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/leche-vitrines.tv/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/leche-vitrines.tv/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


// normelize the port used. 
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);

// TODO : Partie à revoir https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express
  const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);

// TODO : Partie à revoir https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express
httpServer.on('error', errorHandler);

httpServer.on('listening', () => {
  const address = httpServer.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});


httpsServer.on('error', errorHandler);
httpsServer.on('listening', () => {
  const address = httpsServer.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});
httpsServer.listen(process.env.PORT || 3000);


httpServer.listen(process.env.PORT || 3001);
