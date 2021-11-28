import axios from "axios";

/**
 * Не понял профита в отказе от локального json-server,
 * как насчёт полноценных crud операций, а не только чтения данных
 * Например я удаляю пост а он заново появляется, что говорит о эмуляции запроса
 *
 * После создания поста он пропадает сразу же после использования пагинации, хотя по логике он должен создаваться в конце списка на посл странице.
 * Редактирования нет
 * В общем основная задача это перейти на локальный сервер который умеет сохранять состояние
 */
export default class PostService {
  static async getAll(limit, page) {
    const response = await axios.get("http://localhost:3000/posts", {
      params: {
        _limit: limit,
        _page: page,
      }
    });
    return response;
  }

  static async getById(id) {
    const response = await axios.get(`http://localhost:3000/posts/${id}`);
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(`http://localhost:3000/posts/${id}/comments`);
    return response;
  }

  static async onCreateNewPost(newPost) {
    const response = await axios.post("http://localhost:3000/posts/" ,
      {title:newPost.title, body:newPost.body});
    return response;
  }

  static async onEditPost(editPost, id) {
    const response = await axios.get(`http://localhost:3000/posts/${id}`,
      {title:editPost.title, body:editPost.body});
    return response;
  }


  static async onRemovePostId(id) {
    const response = await axios.delete(`http://localhost:3000/posts/${id}`);
    return response;
  }

  static async onCreateNewComment(newComment, postId) {
    const response = await axios.post("http://localhost:3000/comments/" ,
      {postId, name:newComment.name, email:newComment.email, body:newComment.body});
    return response;
  }

  static async onRemoveCommentByPostId(id) {
    const response = await axios.delete(`http://localhost:3000/comments/${id}`);
    return response;
  }
}
