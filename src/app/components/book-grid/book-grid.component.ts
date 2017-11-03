import { Component, OnInit,Optional } from '@angular/core';
import { BooksDataService } from "../../services/booksService/books-data.service";
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit {

  constructor(
    private booksDataService : BooksDataService,
    @Optional() private AllBooks:any[]
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
      this.booksDataService.getJSON().subscribe(data => {this.AllBooks=data},error =>console.log(error));
  }
}
