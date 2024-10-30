import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    PaginatorModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  form! :FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo:new FormControl("",[Validators.required,Validators.min(4)]),
      motdepasse:new FormControl("",Validators.required),
      confirmermotdepasse:new FormControl("",Validators.required),
    })
  }
  save(){
    console.log(this.form.value)
  }
}
