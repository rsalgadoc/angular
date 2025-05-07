import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  @Input() title! : string;
  counter: number = 0;
  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    localStorage.setItem('counter', this.counter.toString());
  }
}
