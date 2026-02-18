import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { BotanasComponent } from "./components/botanas/botanas.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { HistoriaComponent } from "./components/historia/historia.component";
import { TestimonialesComponent } from "./components/testimoniales/testimoniales.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HorarioComponent } from "./components/horario/horario.component";
import { CartaComponent } from "./components/carta/carta.component";
import { CommonModule } from '@angular/common';
import { CartaService } from './services/carta.service';
import { CarouselComponent } from "./components/carousel/carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, BotanasComponent, OfertasComponent, HistoriaComponent, TestimonialesComponent, FooterComponent, HorarioComponent, CartaComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cartaService = inject(CartaService)

  title = 'botanero_app';

  get carta():boolean {
    return this.cartaService.carta()
  }
}
