var app = require('./config/express')();
//var express = require("express");
//var app = express();
// app = configura();
	//app.set('view engine','ejs');
	
	//var rotasProdutos = require('./app/routes/produtos')(app);
	//var rotasClientes = require('./app/routes/clientes')(app);
	//var rotasServicos = require('./app/routes/servicos')(app);

	app.listen(3000,() => {
		console.log("Servidor está rodando...");
	});