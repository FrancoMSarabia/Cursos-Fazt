import { Router } from "express";
import { getPosts, createPosts, getPost, deletePost, updatePost } from "../controllers/post.controller";

const router = Router();

router.route('/').get(getPosts);
router.route('/:postId').get(getPost);
router.route('/').post(createPosts);
router.route('/:postId').delete(deletePost);
router.route('/:postId').put(updatePost);

export default router;