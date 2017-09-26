const config = require('./config');
const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const scheduler = require('./controllers/scheduler');

/**
  * Initialize Server
  */
const server = restify.createServer({
	name: config.name,
	version: config.version,
});


server
.use(restifyPlugins.fullResponse())
.use(restifyPlugins.bodyParser());

// server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
// server.use(restifyPlugins.acceptParser(server.acceptable));
// server.use(restifyPlugins.queryParser({ mapParams: true }));
// server.use(restifyPlugins.fullResponse());


server.post('coffee/scheduling',scheduler.start);


server.get('coffee/scheduling', scheduler.list);

server.listen(config.port, () => {
	    console.log(`Iniciando serviço na porta: ${config.port}`);
});