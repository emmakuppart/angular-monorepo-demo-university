import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-monorepo-demo-university';

  readonly tabs = [
    {
      id: 0,
      name: 'Kursused',
      url: '/courses'
    },
    {
      id: 1,
      name: 'Õppekavad',
      url: '/curriculums'
    }
  ];

  selectedId: number;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('et');
    translateService.use('et');
  }
}