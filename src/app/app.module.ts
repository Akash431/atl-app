import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule } from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatChipsModule,
  MatGridListModule,
} from '@angular/material';
import 'hammerjs';
import {AppComponent} from './app.component';
import {NavComponent} from './components/nav-component/nav-component.component';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { BooksDataService } from "./services/booksService/books-data.service";

@NgModule({
  declarations: [
    AppComponent, NavComponent, BookGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [BooksDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}