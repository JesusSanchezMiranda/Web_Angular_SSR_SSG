import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
   styleUrls: ['./inicio.scss']
})
export class Inicio implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Inicio | Mi Negocio');

    this.meta.updateTag({ name: 'description', content: 'Bienvenido a Mi Negocio, donde encuentras lo mejor en productos y servicios.' });
    this.meta.updateTag({ property: 'og:title', content: 'Inicio | Mi Negocio' });
    this.meta.updateTag({ property: 'og:description', content: 'Explora todo lo que ofrecemos en Mi Negocio.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://tusitio.com/assets/preview.jpg' });
  }
}
