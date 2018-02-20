//var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){

	app.get('/contatos', function(req,res){
		
		console.log("atualizado.");

		var connection = app.infra.connectionFactory();

		var contatosBanco = new app.infra.ContatosDAO(connection);

		contatosBanco.contatos(function(err, results){
			res.render('contatos/contatos',{contatos:results});

		});
		connection.end();
	});
}