import { Component, Input, input } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() arrayPosts: Post[] = [];
  isFormVisible: boolean = false;
  postInEditing!: Post;

  mostraForm(post: Post) {
    this.isFormVisible = !this.isFormVisible;
    this.postInEditing = post;
  }

  salvaForm() {
    this.isFormVisible = false;
  }
}
