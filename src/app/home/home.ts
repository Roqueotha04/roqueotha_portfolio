import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Stack } from './stack/stack';
import { Contact } from './contact/contact';
import { Navbar } from '../layout/navbar/navbar';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Projects, Stack, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
