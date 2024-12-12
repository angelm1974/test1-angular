import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MojeMenuComponent } from './moje-menu/moje-menu.component';
import { KafelekComponent } from "./kafelek/kafelek.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MojeMenuComponent, KafelekComponent, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test1';
}
