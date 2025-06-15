import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

@Component({
  selector: 'app-login',
  imports: [Footer, Header],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
