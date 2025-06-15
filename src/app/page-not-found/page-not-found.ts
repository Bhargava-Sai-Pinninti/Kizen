import { Component } from '@angular/core';
import { Footer } from "../Home_Screen/footer/footer";
import { Header } from "../Home_Screen/header/header";

@Component({
  selector: 'app-page-not-found',
  imports: [Footer, Header],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {

}
