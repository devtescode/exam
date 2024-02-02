import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface Studentinterface {
  email: string,
  password: string,
  message: string
}
@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.css'
})
export class SigninPageComponent {
  constructor(public routes: Router) { }
  public email = ''
  public password = ''
  public message = ''
  public studentarray: Studentinterface[] = []
  ngOnInit() {
    const studentsData = localStorage['students'];
    if(studentsData){
      this.studentarray = JSON.parse(studentsData)
      console.log(this.studentarray);
    }
  }

  signin() {
    let currectuser = this.studentarray.find((student, index) => this.email == student.email && this.password == student.password)
    if (currectuser) {
      localStorage.setItem('current_user', JSON.stringify(currectuser))
      alert("correct")
      this.routes.navigate(['/dashboard'])
    }
    else {
      alert("user not found")
      alert("incorrect")
      this.message = 'user not found'
    }
  }
}
