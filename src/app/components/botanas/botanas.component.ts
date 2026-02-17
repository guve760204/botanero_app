import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-botanas',
  standalone: true,
  imports: [ NgOptimizedImage ],
  templateUrl: './botanas.component.html',
  styleUrl: './botanas.component.scss'
})
export class BotanasComponent {
  botanas = signal([
    {
      name: 'Agua chile salseado',     
      price: '0.00 (Incluido con tus bebidas)',
      description: 'Nuestro platillo estrella, prueba el mejor agua chile, picosito y con el puro estilo de Nayarit',
      imageUrl: 'img/agua_chile_hero.jpg'
    },
    {
      name: 'Coctel de camarón',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'El consentido de todos y al puro estilo de Sinaloa, picosito y sabroso',
      imageUrl: 'img/coctel_hero.jpg'
    },
    {
      name: 'Ceviche de la Casa',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'El mejor pescado con ensalada y el sazón de la casa',
      imageUrl: 'img/ceviche_hero.jpg'
    },
    {
      name: 'Camarones al ajo',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'Lo mejor de la comida china y todo su sabor',
      imageUrl: 'img/al_ajo_hero.jpg'
    },   
    {
      name: 'Camarones al chimichurri',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'Camarones picositos con la salsa sirracha de la casa que tanto te gusta',
      imageUrl: 'img/chimichurri_hero.jpg'
    },
    {
      name: 'Camarones estilo Acaponeta',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'Camarones crujientes y picositos, para el antojo de algo diferente',
      imageUrl: 'img/acaponeta_hero.jpg'
    },
  ]);
}
