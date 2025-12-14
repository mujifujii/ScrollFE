import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ITextObject} from '../creating/type/interfaces/ITextObject';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {form, Field} from '@angular/forms/signals'
import {IUser} from './type/interface/IUser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reading',
  imports: [MatCardModule, MatButton, MatFormField, MatInput, MatLabel, Field],
  templateUrl: './reading.html',
  styleUrl: './reading.css',
  standalone: true
})
export class Reading {
  http = inject(HttpClient);

  userObject = signal<IUser>({
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  })

  textObjectForm = form(this.userObject)

  uploadUser(){
    this.http.post('http://localhost:3000/users', this.userObject()).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
      }
    )
  }
  console(){
    console.log(this.userObject())
  }

}
