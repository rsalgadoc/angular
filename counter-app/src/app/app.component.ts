import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'counter-app';
}
