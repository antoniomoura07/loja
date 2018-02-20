function ServicosDAO(connection){
	this._connection = connection;
}

ServicosDAO
	.prototype.servicos = function(callback){
            this._connection.query('select * from servicos',callback);
        }

module.exports = function(){
	return ServicosDAO;
}