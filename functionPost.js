import mysql from 'mysql2';
const connection = mysql.createConnection({

});

function unificationKeyObject (object) {
   const arr = []
   for (let key in object) {
      arr.push(`'${object[key]}'`)
   }
   return arr.join(', ')
}

function keyObject (object) {
   const arr = []
   for (let key in object) {
      arr.push(`${key}`)
   }
   return arr.join(', ')
}

export function createPost (object, callback) {

   const query = `INSERT INTO posts (${keyObject(object)}) VALUES (${unificationKeyObject(object)})`

   connection.query(query, (err, results, field) => {
      if (err) {
         callback(err, null);
         console.log(query)
         return;
      }
      console.log('Пост создан с ID:', results.insertId);

      const newPost = {
         id: results.insertId
      };
      Object.assign(newPost, object)
      callback(null, newPost);
   });
}

export function deleteOnePost(postId, callback) {
   const query = `DELETE FROM posts WHERE id = ${postId}`;
   connection.query(query, (err, results) => {
     if (err) {
       callback(err, null)
       console.error('Ошибка при удалении поста:', err);
       return;
     }

     callback(null, results)
     console.log('Пост с ID', postId, 'удалён');
   });
}

export function getAllPosts (callback) {
   const query = 'SELECT * FROM posts';
   connection.query(query, (err, results) => {
      if (err) {
         console.error('Ошибка при получении постов:', err);
         callback(err, null);
         return;
      }
      callback(null, results)
   })
 }

 export function getOnePost (params, callback) {
   const query = `SELECT * FROM posts WHERE id = ${params}`;
   connection.query(query, (err, results) => {
      if (err) {
         console.error('Ошибка при получении поста:', err);
         callback(err, null);
         return;
      }
      callback(null, results)
   })
 }

export function putPost (object, callback) {
   const query = `UPDATE posts SET author = '${object.author}', title = '${object.title}', content = '${object.content}' WHERE id = ${object.id}`;
   connection.query(query, (err, results) => {
      if (err) {
         console.error('Ошибка при обновлении поста:', err);
         callback(err, null);
         return;
      }

      const newPost = {
         id: object.id,
         author: object.author,
         title: object.title,
         content: object.content
      };
      callback(null, newPost)
   })
 }



