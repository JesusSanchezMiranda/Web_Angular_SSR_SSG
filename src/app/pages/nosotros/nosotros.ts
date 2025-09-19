import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

ngOnInit(): void {
  // Título de la página
  this.title.setTitle('Nosotros | TechStore');

  // Metatag principal de descripción
  this.meta.updateTag({
    name: 'description',
    content: 'Conoce la historia de TechStore, nuestra misión y visión en el mundo de la tecnología y los gadgets innovadores.'
  });

  // Open Graph para redes sociales
  this.meta.updateTag({ property: 'og:title', content: 'Nosotros | TechStore' });
  this.meta.updateTag({
    property: 'og:description',
    content: 'En TechStore nos dedicamos a ofrecer productos tecnológicos de calidad, con innovación y confianza para todos nuestros clientes.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/50-regalos-tecnologicos-menos-50-euros.jpg?tf=3840x'
  });

  // Opcional: metatag de Twitter
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({ name: 'twitter:title', content: 'Nosotros | TechStore' });
  this.meta.updateTag({
    name: 'twitter:description',
    content: 'TechStore: nuestra historia, misión y visión para traer la mejor tecnología y gadgets innovadores a nuestros clientes.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/50-regalos-tecnologicos-menos-50-euros.jpg?tf=3840x'
  });
}


}
