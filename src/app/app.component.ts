import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngssr';

  constructor(title: Title, meta: Meta, private router: Router) {
    title.setTitle('Hello World');
    meta.addTag({ ame: 'description', content: 'Hello World Meta Content' });
    meta.addTag({ ame: 'og:link', content: '//local' });
  }
  buttonclicked() {
    alert('Ouch!');
    this.router.navigate(['/page2']);
  }
}
