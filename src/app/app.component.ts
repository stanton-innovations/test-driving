import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tinker;
  setTinker(data: object) {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(this.tinker = data), 1000)
    );
  }
}
