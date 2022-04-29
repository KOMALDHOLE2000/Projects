// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { TPost } from './posts/type/post_type';
// import { TPost } from '../type/post_type';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private post : TPost[];
  constructor() { }
  AddLikedPost(postItem : TPost)
  {
    this.post.push(postItem);
  }
}