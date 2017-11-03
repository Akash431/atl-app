import { Component } from '@angular/core';
import {NavComponent} from './components/nav-component/nav-component.component'
import { BookGridComponent } from "./components/book-grid/book-grid.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
