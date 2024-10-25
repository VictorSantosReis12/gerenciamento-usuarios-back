const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10740696',
    password: 'i8XtPhb2kl',
    database: 'sql10740696'
});

conexao.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

module.exports = conexao;
