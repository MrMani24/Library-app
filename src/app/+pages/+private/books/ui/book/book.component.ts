import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book',
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      this.data = this.current;
    }
  }
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter<Book>();
  @Input() current: Book | undefined;
  @Input() action: string= ''
  ok() {
    this.onOk.emit(this.data);
  }
  data: Book = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0,
  };
}
