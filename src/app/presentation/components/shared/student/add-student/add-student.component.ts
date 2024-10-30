import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {
  form! : FormGroup;

  ngOnInit(): void {
    this.form= new FormGroup({
      nom:new FormControl("",Validators.required),
      prenom:new FormControl("",Validators.required),
      genre:new FormControl("",Validators.required),
      matricule:new FormControl("",Validators.required),
      dateNaissance:new FormControl("",Validators.required),
      telephone:new FormControl("",Validators.required),
      ville:new FormControl("",Validators.required)
    })
  }

  save(){
    console.log(this.form.value)
  }
}
