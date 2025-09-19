import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos implements OnInit {

  constructor(private title: Title, private meta: Meta) { }


  ngOnInit(): void {
    // Título de la página
    this.title.setTitle('Productos Tecnológicos | TechStore');

    // Metatag principal de descripción
    this.meta.updateTag({
      name: 'description',
      content: 'Explora nuestra tienda de productos tecnológicos: laptops, smartphones, accesorios y gadgets de última generación.'
    });

    // Open Graph para redes sociales
    this.meta.updateTag({ property: 'og:title', content: 'Productos Tecnológicos | TechStore' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Descubre las mejores ofertas en tecnología y los gadgets más innovadores en TechStore.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/50-regalos-tecnologicos-menos-50-euros.jpg?tf=3840x'
    });

    // Opcional: metatag de Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Productos Tecnológicos | TechStore' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Descubre las últimas novedades en tecnología y gadgets en TechStore.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/50-regalos-tecnologicos-menos-50-euros.jpg?tf=3840x' });
  }

  products = signal([
    {
      name: 'Smartphone X200',
      description: 'Pantalla OLED, cámara triple y batería de larga duración.',
      image: 'https://m.media-amazon.com/images/I/71s72QE+voL._UF894,1000_QL80_.jpg'
    },
    {
      name: 'Laptop Pro 15"',
      description: 'Procesador de última generación, ideal para gaming y trabajo.',
      image: 'https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png'
    },
    {
      name: 'Auriculares Wireless',
      description: 'Sonido envolvente y cancelación de ruido avanzada.',
      image: 'https://www.miccell.com.pe/cdn/shop/files/audifonos-bluetooth-TWS-Miccell_VQ-BH11.webp?v=1702589692&width=720'
    },
    {
      name: 'Smartwatch GT',
      description: 'Monitoreo de salud y actividad física, notificaciones inteligentes.',
      image: 'https://i5.walmartimages.com/seo/Smart-Watch-Fits-for-Android-and-iPhone-EEEkit-Fitness-Health-Tracker-Waterproof-Smartwatch-for-Women-Men_819cb65b-8437-4eb3-aba1-ce6513dc8d58.312f5775b50ab18c130fe5a454149fa9.jpeg'
    },
    {
      name: 'Cámara 4K Pro',
      description: 'Captura videos en ultra alta definición y fotos profesionales.',
      image: 'https://d1abyhu02s963u.cloudfront.net/wp-content/uploads/2022/12/Blackmagic-Design-Studio-Camera-4K-Pro.jpg'
    }
  ]);


}
