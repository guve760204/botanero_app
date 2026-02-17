import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor() { }

  carta = signal<boolean>(false)
  togleCarta(){
    this.carta.set(!this.carta())
  }


}
