import { Component, inject, signal } from '@angular/core';
import { CartaService } from '../../services/carta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartaService = inject(CartaService)

  navItems = signal([
    {name:'Botanas', link:'#botanas'}, 
    {name:'Promociones', link:'#promociones'}, 
    {name:'Nosotros', link:'#nosotros'}   
  ]);

  get carta():boolean{
    return this.cartaService.carta()
  }

  getInfo(){
    window.open("https://wa.me/524442038808?text=Hola,%20quisiera%20más%20información%20sobre%20el%20botanero", '_blank')
  }

  changeCarta(){
    this.cartaService.togleCarta()
  }
}
