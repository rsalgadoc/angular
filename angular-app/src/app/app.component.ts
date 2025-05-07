import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
      this.counter = parseInt(localStorage.getItem('counter')!);
  }
  title = 'Hola Mundo Angular!';
  subTitle = 'Mi contador';
  users = ['uno', 'dos', 'tres', 'cuatro'];

  visible: boolean = false; 
  counter! : number;
  setVisible(): void{
    this.visible = this.visible? false : true;
    console.log('click en boton');
  }

  setCounter (counter: number) : void{
      this.counter = counter;
  }
}
