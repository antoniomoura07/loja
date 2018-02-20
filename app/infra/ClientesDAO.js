function ClientesDAO(connection){
	this._connection = connection;
}

ClientesDAO
	.prototype.clientes = function(callback){
            this._connection.query('select * from clientes',callback);
        }

module.exports = function(){
	return ClientesDAO;
}