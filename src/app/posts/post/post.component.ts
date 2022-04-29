import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TPost } from '../type/post_type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post:TPost;
  @Output('delete')postDelelte:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}