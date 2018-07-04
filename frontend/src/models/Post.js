
import axios from 'axios';

class PostModel {
   static all(){
      let request = axios.get("http://super-crud-api.herokuapp.com/api/pokemon")
      return request
   }
   static create(post) {
      console.log(post);
      let request = axios.post("http://super-crud-api.herokuapp.com/api/pokemon", post)
      return request
   }
   static delete(post) {
      let request = axios.delete(`http://super-crud-api.herokuapp.com/api/pokemon/${post._id}`)
      return request
   }
   static update(postId, postBody) {
      let request = axios.put(`http://super-crud-api.herokuapp.com/api/pokemon/${postId}`, {
         name: postBody
      })
      return request
   }

}

export default PostModel
