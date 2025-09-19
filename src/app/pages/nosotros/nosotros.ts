import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros implements OnInit {

  constructor(private title: Title, private meta: Meta) { }
  ngOnInit(): void {
    this.title.setTitle('Nosotros | Mi Negocio');
    this.meta.updateTag({ name: 'description', content: 'Conoce la historia y misión de Mi Negocio.' });
    this.meta.updateTag({ property: 'og:title', content: 'Nosotros | Mi Negocio' });
    this.meta.updateTag({ property: 'og:description', content: 'Nuestra misión es brindar calidad y confianza.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://tusitio.com/assets/nosotros.jpg' });
  }

}
