import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private cartaService = inject(CartaService)

  getInfo(){
    window.open("https://wa.me/524442038808?text=Hola,%20quisiera%20más%20información%20sobre%20el%20botanero", '_blank')
  }
  reservaciones(){
    window.open("https://wa.me/524442038808?text=Hola,%20quisiera%20reservar%20una%20mesa", '_blank')
  }
  eventos(){
    window.open("https://wa.me/524442038808?text=Hola,%20quisiera%20información%20para%20realizar%20un%20evento%20privado%20en%20sus%20Instalaciones", '_blank')
  }

  changeCarta(){
    this.cartaService.togleCarta()
  }


}
