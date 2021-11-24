import axios from "axios";

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
    const response = await axios.get("http://localhost:3000/posts/" + id);
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(`http://localhost:3000/posts/${id}/comments`);
    return response;
  }

  static async onCreateNewPost(title, body) {
    const response = await axios.post("http://localhost:3000/posts/" ,
      { title:title, body:body});
    return response;
  }


  static async onRemovePostId(id) {
    const response = await axios.delete(`http://localhost:3000/posts/${id}`);
    return response;
  }

  static async onRemoveCommentByPostId(id) {
    const response = await axios.delete(`http://localhost:3000/comments/${id}`);
    return response;
  }
}
