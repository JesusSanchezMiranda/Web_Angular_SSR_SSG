import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class Inicio implements OnInit {
  

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    // Título de la página
    this.title.setTitle('Inicio | TechStore');

    // Metatag principal de descripción
    this.meta.updateTag({
      name: 'description',
      content: 'Bienvenido a TechStore, tu tienda online de productos tecnológicos: laptops, smartphones, gadgets y accesorios de última generación.'
    });

    // Open Graph para redes sociales
    this.meta.updateTag({ property: 'og:title', content: 'Inicio | TechStore' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Descubre las mejores ofertas en tecnología y gadgets innovadores en TechStore. Calidad y variedad al alcance de un clic.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/50-regalos-tecnologicos-menos-50-euros.jpg?tf=3840x'
    });

    // metatag de Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Inicio | TechStore' });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Explora TechStore: tu tienda de tecnología con laptops, smartphones, gadgets y accesorios de última generación.'
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/50-regalos-tecnologicos-menos-50-euros.jpg?tf=3840x'
    });
  }

}
