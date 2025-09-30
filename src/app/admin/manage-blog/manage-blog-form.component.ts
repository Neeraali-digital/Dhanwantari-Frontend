import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-blog-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-blog-form.component.html',
  styleUrls: ['./manage-blog-form.component.css']
})
export class ManageBlogFormComponent implements OnChanges {
  @Input() blogPost: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  blogForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      excerpt: [''],
      tags: [''],
      published: [true],
      image: [null]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['blogPost'] && this.blogPost) {
      this.blogForm.patchValue(this.blogPost);
    } else if (changes['blogPost'] && !this.blogPost) {
      this.blogForm.reset({ published: true });
    }
  }

  onSubmit() {
    if (this.blogForm.valid) {
      this.save.emit(this.blogForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.blogForm.patchValue({ image: file });
    }
  }
}
