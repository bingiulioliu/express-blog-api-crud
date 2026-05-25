import express from 'express';
import {index, show, create, destroy} from '../controllers/posts.js'

const router = express.Router();

// INDEX hhtp://localhost:5555/posts
router.get('/', index)

// SHOW hhtp://localhost:5555/posts/1
router.get('/:id', show);

// CREATE
router.post('/', create)

// DELETE
router.delete('/:id', destroy)


export default router