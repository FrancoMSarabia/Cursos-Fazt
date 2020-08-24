"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPost = exports.createPosts = exports.getPosts = void 0;
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const posts = yield conn.query('select * from posts');
        return res.json(posts[0]);
    });
}
exports.getPosts = getPosts;
function createPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield database_1.connect();
        yield conn.query('insert into posts set ?', [newPost]);
        console.log(newPost);
        return res.json({
            message: 'Post created'
        });
    });
}
exports.createPosts = createPosts;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield database_1.connect();
        const posts = yield conn.query('select * from posts where id = ?', [id]);
        return res.json(posts[0]);
    });
}
exports.getPost = getPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield database_1.connect();
        const posts = yield conn.query('delete from posts where id = ?', [id]);
        return res.json('Post deleted');
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatePost = req.body;
        const conn = yield database_1.connect();
        const posts = yield conn.query('update posts set ? where id = ?', [updatePost, id]);
        return res.json('Post updated');
    });
}
exports.updatePost = updatePost;
