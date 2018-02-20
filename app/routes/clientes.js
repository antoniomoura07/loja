//var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){

	app.get('/clientes', function(req,res){
		
		console.log("atualizado.");

		var connection = app.infra.connectionFactory();

		var clientesBanco = new app.infra.ClientesDAO(connection);

		clientesBanco.clientes(function(err, results){
			res.render('clientes/clientes',{clientes:results});

		});
		connection.end();
	});
}