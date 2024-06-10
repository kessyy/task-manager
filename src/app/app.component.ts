import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management-system';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  toggleNavbar(): void {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    }
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['authenticate/login']);
  }
}
