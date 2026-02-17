import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.scss'
})
export class OfertasComponent {
  ofertas = signal([
    {
      tag: 'PARA EMPEZAR',
      title: '¡Cubeta de cuartitos!',
      description: '8 cervezas 210 ml. + 4 platillos de  Botana para compartir.',
      price: 350,
      oldPrice: 420,
      bgClass: 'from-orange-500/10 to-transparent'
    },
    {
      tag: 'COMO DIOS MANDA',
      title: 'Cubetazo XL',
      description: '8 cervezas 355 ml. + 4 platillos de  Botana para compartir.',
      price: 450,
      oldPrice: 480,
      bgClass: 'from-blue-500/10 to-transparent'
    },
    {
      tag: 'MINI COMBO PERSONAL',
      title: '2 Bebidas de cuartito + botana',
      description: '2 cervezas de 210 ml. o 2 refrescos de 250 ml. + un platillo de botana a elegir.',
      price: 120,
      oldPrice: 150,
      bgClass: 'from-blue-500/10 to-transparent'
    },
    {
      tag: 'COMBO PERSONAL',
      title: '2 Bebidas + botana',
      description: '2 cervezas de 355 ml. o 2 refrescos de 600 ml. + un platillo de botana a elegir.',
      price: 160,
      oldPrice: 200,
      bgClass: 'from-blue-500/10 to-transparent'
    },
    {
      tag: 'MÚSICA EN VIVO',
      title: 'TODOS LOS SÁBADOS',
      description: 'Lo mejor del talento local y más allá de nuestras fronteras.',
      priceText: '',
      price: null,
      oldPrice: null,
      bgClass: 'from-green-500/10 to-transparent'
    },
    {
      tag: 'DOMINGOS DE ANTOJO',
      title: 'TODOS LOS DOMINGOS',
      description: 'Botana especial para variar, pregunta por el platillo del día.',
      priceText: '',
      price: null,
      oldPrice: null,
      bgClass: 'from-green-500/10 to-transparent'
    }
  ]);

}
