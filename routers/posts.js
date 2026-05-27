import express from 'express';
import {index, show, create, destroy, modify} from '../controllers/posts.js'
import findSlug from '../middlewares/findSlug.js'
const router = express.Router();

// INDEX hhtp://localhost:5555/posts
router.get('/', index)

// SHOW hhtp://localhost:5555/posts/1
router.get('/:slug',findSlug, show);

// CREATE
router.post('/', create)

// PATCH
router.patch('/:slug',findSlug, modify)

// DELETE
router.delete('/:slug', findSlug, destroy)


export default router
