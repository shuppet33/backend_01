import mysql from 'mysql2'


const connection = mysql.createConnection({

});

// Подключитесь к базе данных
connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения:', err.stack);
    return;
  }
  console.log('Подключено к базе данных с идентификатором', connection.threadId);
});