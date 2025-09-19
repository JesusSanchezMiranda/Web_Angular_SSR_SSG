import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos implements OnInit {

  constructor(private title: Title, private meta: Meta) { }
  ngOnInit(): void {
    this.title.setTitle('Productos | Mi Negocio');
    this.meta.updateTag({ name: 'description', content: 'Descubre nuestros productos de alta calidad.' });
    this.meta.updateTag({ property: 'og:title', content: 'Productos | Mi Negocio' });
    this.meta.updateTag({ property: 'og:description', content: 'Encuentra variedad y calidad en cada producto.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://tusitio.com/assets/productos.jpg' });
  }

}
