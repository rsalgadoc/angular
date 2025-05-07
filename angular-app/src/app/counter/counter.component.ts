import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  counter: number = 0;
  @Input() title! : string;
  @Output() counterEmit : EventEmitter<number>= new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) localStorage.setItem('counter', this.counter.toString());
    this.counterEmit.emit(this.counter);
  }
}
