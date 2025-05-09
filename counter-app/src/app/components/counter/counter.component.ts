import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Titulo contador';
  counter: number = 0;

  constructor(private store: Store<{counter: number}>) {
    this.counter = 0;
    this.store.select('counter').subscribe(count => {
      this.counter = count;
    })
  }

  increase(): void {
    this.store.dispatch(increment({add: 1}));
    console.log('incrementando....');
  }

  decrease(): void {
    this.store.dispatch(decrement());
    console.log('bajamdo....');
  }

  reset(): void {
    this.store.dispatch(reset());
    console.log('Reset....');
  }
}
