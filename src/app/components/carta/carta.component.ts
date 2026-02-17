import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.scss'
})
export class CartaComponent {
 botanas_frias = signal([
    {
      name: 'Agua chile salseado',     
      price: '120.00 ',
      temp:'cold',
      description: 'Platillo con 100 gr. de camarón, con la Salsa marisquera de la casa, estilo Nayarit',
      imageUrl: 'img/agua_chile_hero.jpg'
    },
    {
      name: 'Coctel de camarón',
      price: '120.00',
        temp:'cold',
      description: 'Platillo con 100 gr. de camarón, al puro estilo Sinaloa',
      imageUrl: 'img/coctel_hero.jpg'
    },
    {
      name: 'Ceviche de la Casa',
      price: '120.00',
      temp:'cold',
      description: 'Platillo con 230 gr. de pescado sierra o tilapia al estilo Nayarit',
      imageUrl: 'img/ceviche_hero.jpg'
    }  
  ]);

   botanas_calientes = signal([    
    {
      name: 'Camarones al ajo',
      price: '0.00',
      temp: 'warm',
      description: 'Lo mejor de la comida china y todo su sabor',
      imageUrl: 'img/al_ajo_hero.jpg'
    },   
    {
      name: 'Camarones al chimichurri',
      price: '0.00',
      temp: 'warm',
      description: 'Camarones picositos con la salsa sirracha de la casa que tanto te gusta',
      imageUrl: 'img/chimichurri_hero.jpg'
    },
    {
      name: 'Camarones estilo Acaponeta',
      price: '0.00',
      temp: 'warm',
      description: 'Camarones crujientes y picositos, para el antojo de algo diferente',
      imageUrl: 'img/acaponeta_hero.jpg'
    },
  ]);
}
