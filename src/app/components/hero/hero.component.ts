import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartaService } from '../../services/carta.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  cartaService = inject(CartaService)

  get is_carta(){
    return this.cartaService.carta()
  }

  active_color:string = 'bg-orange-500 hover:bg-orange-600 text-white'
  secondary_color:string = 'bg-white/20 hover:bg-white/30 disable  cursor-pointer'

  changeCarta(){
    this.cartaService.togleCarta()
  }

}
