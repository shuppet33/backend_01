import express from 'express'
import mysql from 'mysql2'
import router from './router.js'
import fileupload from 'express-fileupload'
import cors from 'cors'

const PORT = 5001

const app = express()

const connection = mysql.createConnection({

});


// let query = "SELECT * FROM  mydatabase";
// connection.query(query, (err, result, field) => {
//    console.log(err)
//    console.log(result[0]['email'])
//    // console.log(field)
// });

// connection.end(err => {
//    if (err) {
//       console.error('Ошибка подключения:', err.stack);
//       return err;
//    }
//    console.log('database ---- close');
// });

app.use(express.json())
app.use(fileupload({}))
app.use(cors())
app.use('/api', router)


async function startApp() {
   try {
      connection.connect((err) => {
         if (err) {
            console.error('Ошибка подключения:', err.stack);
            return;
         }
         console.log('Подключено к базе данных с идентификатором', connection.threadId);
         });
      app.listen(PORT, () => console.log('SERVER STARTES ON PORT ' + PORT))
   } catch (err) {
      console.log(err)
   }
}

startApp()