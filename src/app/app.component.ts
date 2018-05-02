import { Component } from '@angular/core';
import { PokeDataService } from './services/poke-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private tinker: PokeDataService) {
    this.tinker.get();
  }
}
