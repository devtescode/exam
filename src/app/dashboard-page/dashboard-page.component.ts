import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {
  stustudentArray: any[] = [];
  ngOnInit() {
    const stustoredUsers = localStorage.getItem('stustudents');
    if (stustoredUsers) {
      this.stustudentArray = JSON.parse(stustoredUsers);
    }
  }
}
