import {Component, OnInit, signal} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ITextObject} from './type/interfaces/ITextObject';
import {form, Field} from '@angular/forms/signals'
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-creating',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    Field,
    MatButtonModule
  ],
  templateUrl: './creating.html',
  styleUrl: './creating.css',
  standalone: true
})
export class Creating {

  textObject = signal<ITextObject>({
    title:'',
    author:'',
    text:''
  })

  textObjectForm = form(this.textObject)

}
