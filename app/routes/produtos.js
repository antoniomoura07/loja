//var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){

	app.get('/produtos', function(req,res){
		
		console.log("atualizado.");

		var connection = app.infra.connectionFactory();

		var produtosBanco = new app.infra.ProdutosDAO(connection);

		produtosBanco.lista(function(err, results){
			res.render('produtos/lista',{lista:results});

		});
		connection.end();
	});
}