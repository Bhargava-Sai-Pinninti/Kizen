import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [Footer, Header , CommonModule ,ReactiveFormsModule] ,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
formdata: any;
Register() {
throw new Error('Method not implemented.');
}
submited: any;
form: any;

}
