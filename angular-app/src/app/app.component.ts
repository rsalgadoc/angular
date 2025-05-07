import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo Angular!';
  subTitle = 'Mi contador';
  users = ['uno', 'dos', 'tres', 'cuatro'];

  visible: boolean = false; 

  setVisible(): void{
    this.visible = this.visible? false : true;
    console.log('click en boton');
  }
}
