import { Component, signal } from '@angular/core';
import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";
import { About } from "./components/about/about";
import { Galery } from "./components/galery/galery";

@Component({
  selector: 'app-root',
  imports: [Home, Contact, About, Galery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('amarildoJardinagem');
}
