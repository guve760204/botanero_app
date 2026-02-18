import { Component, signal } from '@angular/core';
import { DividerComponent } from "../divider/divider.component";

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [DividerComponent],
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
      name: 'Coctel de camarón estilo Sinaloa',
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
    },
    {
      name: 'Chabela de coctel de camarón',
      price: '150.00',
      temp:'cold',
      description: 'Coctel de camarón 200 gr. Con aguacate y sus respectivas galletas saladas',
      imageUrl: 'img/chabela.jpg'
    }
  ]);

   botanas_calientes = signal([
    {
      name: 'Camarones al ajo',
      price: '150.00',
      temp: 'warm',
      description: 'Lo mejor de la comida china y todo su sabor',
      imageUrl: 'img/al_ajo_hero.jpg'
    },
    {
      name: 'Camarones al chimichurri',
      price: '150.00',
      temp: 'warm',
      description: 'Camarones picositos con la salsa sirracha de la casa que tanto te gusta',
      imageUrl: 'img/chimichurri_hero.jpg'
    },
    {
      name: 'Camarones estilo Acaponeta',
      price: '150.00',
      temp: 'warm',
      description: 'Camarones crujientes y picositos, para el antojo de algo diferente',
      imageUrl: 'img/acaponeta_hero.jpg'
    },
    {
      name: 'Filete de pescado empanizado',
      price: '150.00',
      temp: 'warm',
      description: 'Filete de pescado empanizado 250 gr. aprox, acompañado de ensalada y papas a la francesa',
      imageUrl: 'img/filete.jpg'
    },
    {
      name: 'Chicharrón de pescado',
      price: '150.00',
      temp: 'warm',
      description: 'Pescado frito 250 gr. acompañado de ensalada y papas',
      imageUrl: 'img/chicharron_pescado.jpg'
    },
  ]);

  menu_infantil =signal([
     {
      name: 'Papas a la francesa',
      price: '60.00',
      temp: 'warm',
      description: '100 gr. de papas fritas',
      imageUrl: 'img/papas.jpg'
    },
    {
      name: 'Nuggets de pollo',
      price: '80.00',
      temp: 'warm',
      description: '100 gr. de Nuggets de pollo empanizado',
      imageUrl: 'img/nuggets.jpg'
    },
    {
      name: 'Tenders de pollo',
      price: '80.00',
      temp: 'warm',
      description: '100 gr. de Tenders (tiras) de pollo empanizado',
      imageUrl: 'img/tenders.jpg'
    },

  ])

  menu_bebidas = signal([
     {
      name: 'Cerveza 355 ml.',
      price: '40.00',
      temp: 'cold',
      description: 'Cerveza: Corona, Victoria o Pacífico (Pregunte por otras existencias)',
      imageUrl: 'img/corona.jpg'
    },
    {
      name: 'Refresco o agua embotellada',
      price: '35.00',
      temp: 'cold',
      description: 'Refresco o agua embotellada de 500 ml. (Pregunte por existencias)',
      imageUrl: 'img/refrescos.jpg'
    },
    {
      name: 'Preparado para michelada',
      price: '40.00',
      temp: 'cold',
      description: 'Preparado con salsas de la casa y la receta secreta para el mejor sabor de tu miche',
      imageUrl: 'img/michelada.jpg'
    },

  ])
}
