
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";


@Component({
  selector: 'app-login',
  imports: [Footer, Header , ReactiveFormsModule , CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
formdata: any;
Login() {
throw new Error('Method not implemented.');
}
submited: any;
form: any;

}
