import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface Studentinterface{
  firstname: string,
  lastname: string,
  department: string,
  email: string,
  password: string,
}
@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  constructor(public routes: Router){}
  public firstname =''
  public lastname =''
  public department =''
  public email =''
  public password =''
  public message  =''
  public studentArray: Studentinterface[]=[]
  ngOnInit(){
    const storedUsers = localStorage.getItem('students')
    if(storedUsers){
      this.studentArray = JSON.parse(storedUsers)
    }
  }
  signup(){
    let studentobj: Studentinterface = {
      firstname: this.firstname,
      lastname: this.lastname,
      department : this.department,
      email : this.email,
      password :  this.password,
    }
    console.log(studentobj);
    this.studentArray.push(studentobj)
    localStorage.setItem('students', JSON.stringify(this.studentArray))
    console.log(this.studentArray);
    if(this.studentArray.push(studentobj)){
      this.routes.navigate(['signin'])
    }
  }
}
