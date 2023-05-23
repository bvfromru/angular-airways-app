import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Airways Angular App';

  isMainPage: boolean;

  constructor(private router: Router) {
    router.events.subscribe((v) => {
      if (v instanceof NavigationEnd) {
        this.isMainPage = v.url === '/';
      }
    });
  }
}
