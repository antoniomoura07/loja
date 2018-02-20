//var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){

	app.get('/servicos', function(req,res){
		
		console.log("atualizado.");

		var connection = app.infra.connectionFactory();

		var servicosBanco = new app.infra.ServicosDAO(connection);

		servicosBanco.servicos(function(err, results){
			res.render('servicos/servicos',{servicos:results});

		});
		connection.end();
	});
}