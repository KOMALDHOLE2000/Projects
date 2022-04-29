// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
  
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    LikedPostsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }