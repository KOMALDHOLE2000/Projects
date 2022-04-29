// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { TPost } from '../type/post_type';

// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.css']
// })
// export class PostComponent implements OnInit {

//   @Input('post') post:TPost;
//   @Output('delete')postDelelte:EventEmitter<number> = new EventEmitter();

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TPost } from '../type/post_type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') public post: TPost;
  @Output() postDelete: EventEmitter<number> = new EventEmitter();
  @Output() postLiked: EventEmitter<TPost> = new EventEmitter(); // Task Service
  
  constructor() { }

  ngOnInit(): void {}
  handleLike()
  {
    this.postLiked.emit(this.post);
  }
  handleDelete()
  {
    this.postDelete.emit(this.post.id);
  }

}