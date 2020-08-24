import { Request, Response } from 'express';
import { connect } from "../database";
import { Post } from '../interface/post.interface';

export async function getPosts(req: Request, res: Response): Promise<Response> {

    const conn = await connect();
    const posts = await conn.query('select * from posts');
    return res.json(posts[0]);
}

export async function createPosts(req: Request, res: Response): Promise<Response> {

    const newPost: Post = req.body;

    const conn = await connect();
    await conn.query('insert into posts set ?', [newPost]);

    console.log(newPost);

    return res.json({
        message: 'Post created'
    });
}

export async function getPost(req: Request, res: Response): Promise<Response> {

    const id = req.params.postId;

    const conn = await connect();
    const posts = await conn.query('select * from posts where id = ?', [id]);

    return res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response): Promise<Response> {

    const id = req.params.postId;

    const conn = await connect();
    const posts = await conn.query('delete from posts where id = ?', [id]);

    return res.json('Post deleted');
}

export async function updatePost(req: Request, res: Response): Promise<Response> {

    const id = req.params.postId;
    const updatePost: Post = req.body

    const conn = await connect();
    const posts = await conn.query('update posts set ? where id = ?', [updatePost, id]);

    return res.json('Post updated');
}