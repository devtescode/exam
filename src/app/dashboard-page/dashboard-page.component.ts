import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {
  stustudentArray: any[] = [];
  ngOnInit() {
    const stustoredUsers = JSON.parse(localStorage['stustudents'] )
      if (stustoredUsers) {
      this.stustudentArray = stustoredUsers
      console.log(this.stustudentArray );
      
    }
  }

  delect(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.stustudentArray.splice(index, 1);
      localStorage.setItem('stustudents', JSON.stringify(this.stustudentArray));
    }
  }
}
