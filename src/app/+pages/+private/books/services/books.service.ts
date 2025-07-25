import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  lastId = 6
  private data: Book[] = [
    { id: 1, title: 'برانامه نویسی', writer: 'Aخودم', publisher: 'Aخودش', price: 3000 },
    { id: 2, title: 'پایگاه داده', writer: 'Bخودم', publisher: 'Bخودش', price: 4000 },
    { id: 3, title: 'مهندسی نرم افزار', writer: 'Cخودم', publisher: 'Cخودش', price: 5000 },
    { id: 4, title: 'معماری کامپیوتر', writer: 'Dخودم', publisher: 'Dخودش', price: 7000 },
    { id: 5, title: 'هوش مصنوعی', writer: 'Eخودم', publisher: 'Eخودش', price: 10000 }
  ];
  list() {
    return this.data;
  }
  add(book: Book) {
    book.id = this.lastId++;
    this.data.push(book);
  }
  edit(id: number, book: Book) {
    let index = this.data.indexOf(this.data.filter(m => m.id = id)[0]);
    this.data[index] = book
  }
  remove(id: number) {
    let a = this.data.findIndex(m => m.id === id);
    this.data.splice(a, 1);
  }
}
