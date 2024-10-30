import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent implements OnInit{
  form! :FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nom:new FormControl("",Validators.required),
      prenom:new FormControl("",Validators.required),
      vacant:new FormControl("",Validators.required),
      classe:new FormControl("",Validators.required),
      dateNaissance:new FormControl("",Validators.required),
      telephone:new FormControl("",Validators.required),
      ville:new FormControl("",Validators.required),

    })
  }

  save() {
    console.log(this.form.value)
    this.form.reset()
  }

}
