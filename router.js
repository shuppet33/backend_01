import Router from 'express';
import PostController from './postController.js';


const router = new Router()

router.post('/posts', PostController.create)
// router.post('/posts/submit', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update) // update
router.delete('/posts/:id', PostController.delete)

export default router;