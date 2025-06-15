import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

@Component({
  selector: 'app-register',
  imports: [Footer, Header],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
