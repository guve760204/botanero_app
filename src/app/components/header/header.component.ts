import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = signal([
    {name:'Botanas', link:'#botanas'}, 
    {name:'Promociones', link:'#promociones'}, 
    {name:'Nosotros', link:'#nosotros'}   
  ]);

  getInfo(){
    window.open("https://wa.me/524442038808?text=Hola,%20quisiera%20más%20información%20sobre%20el%20botanero", '_blank')
  }
}
