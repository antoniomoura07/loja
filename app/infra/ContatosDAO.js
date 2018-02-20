function ContatosDAO(connection){
	this._connection = connection;
}

ContatosDAO
	.prototype.contatos = function(callback){
            this._connection.query('select * from contatos',callback);
        }

module.exports = function(){
	return ContatosDAO;
}