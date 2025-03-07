import { createPost , deleteOnePost, getAllPosts, getOnePost, putPost } from './functionPost.js';
import fileService from './fileService.js';

class PostController {
   async create(req, res) {
      try {
         const object = req.body

         createPost(object, (err, post) => {
            if (err) {
               console.error('Ошибка:', err);
               return;
            } else {
               res.json(post)
            }
         })
      } catch (e) {
         res.status(500).json(e)
      }
   } 
   async getAll(req, res) {
      try {
         getAllPosts((err, posts) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }

            res.json(posts)

         })
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async getOne(req, res) {
      try {
         const id = req.params.id
         getOnePost(id, (err, post) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }
            res.json(post)
         })
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async update(req, res) {
      try {
         const post = req.body
         if (!post.id) {
            res.status(400).json({message: 'Id не указан'})
         }
         putPost(post, (err, post) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }
            res.json(post)
         })
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async delete(req, res) {
      try {
         const id = req.params.id
         deleteOnePost(id, (err, post) => {
            if (err) {
               console.log('Ошибка: ', err)
               return;
            }
            res.json('Пост удален')
         })
      } catch (e) {
         res.status(500).json(e)
      }
   }
}

export default new PostController()