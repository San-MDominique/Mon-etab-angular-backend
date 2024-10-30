import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent implements OnInit{
  form! :FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({

    })
  }


}
