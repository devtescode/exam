import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface stuStudentinterface {
  stufirstname: string,
  stulastname: string,
  stuemail: string,
  studepartment: string,
  stugender: string,
  stupassword: string,
  stumatric: string,
}

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {
  public stufirstname = ''
  public stulastname = ''
  public studepartment = ''
  public stuemail = ''
  public stupassword = ''
  public stugender = ''
  public stumatric = ''
  public stustudentArray: stuStudentinterface[] = []
  ngOnInit(){
    const stustoredUsers = localStorage.getItem('stustudents')
    if(stustoredUsers){
      this.stustudentArray = JSON.parse(stustoredUsers)
    }
  }
  signupBTN() {
    let stustudentobj: stuStudentinterface = {
      stufirstname: this.stufirstname,
      stulastname: this.stulastname,
      studepartment: this.studepartment,
      stuemail: this.stuemail,
      stupassword: this.stupassword,
      stugender: this.stugender,
      stumatric: this.stumatric,
    }
    console.log(stustudentobj);
    this.stustudentArray.push(stustudentobj)
    localStorage.setItem('stustudents', JSON.stringify(this.stustudentArray))
    console.log(this.stustudentArray);
  }
}
