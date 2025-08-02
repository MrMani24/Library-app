import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BooksService } from '../services/books.service';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../model/book.model';
import { BookComponent } from './book/book.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-books',
  imports: [MatButtonModule, MatTableModule, MatIconModule, BookComponent ,MatDialogModule ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit {
  ngOnInit(): void {
    this.refresh()
  }
  booksServic = inject(BooksService);
  action = 'list';
  selected: Book | undefined;
  selsctedId: number = 0
  async ok(book: Book) {
    if (this.action == 'create') {      
      await this.booksServic.add(book);
    }
    else if (this.action == 'edit') {      
      await this.booksServic.edit(this.selsctedId,book);
    }
    else if (this.action == 'remove') {      
      console.log(this.selsctedId)
      await this.booksServic.remove(this.selsctedId);
    }
    this.action = 'list';
    await this.refresh()
  }
  async refresh() {
    this.dataSource = await this.booksServic.list();
  }
  cancel() {
    this.action = 'list';
  }
  create() {
    this.selected = undefined;
    this.action = 'create';
  }
  remove(book: Book) {
    this.action = 'remove';
    this.selected = {...book}
    this.selsctedId = book.id
  }

  edit(book: Book) {
    this.selected = {...book}
    this.selsctedId = book.id
    this.action = 'edit';
  }
  displayedColumns: string[] = [
    'title',
    'writer',
    'publisher',
    'price',
    'actions',
  ];
  dataSource : any;
  readonly dialog = inject(MatDialog);
}
