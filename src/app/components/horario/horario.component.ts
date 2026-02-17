import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [HorarioComponent],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.scss'
})
export class HorarioComponent {
   stars = signal([1, 2, 3, 4, 5]);
  
    testimonials = signal([
      {
        text: '"El mejor ambiente para disfrutar con amigos. Los Tacos de Camarón son de otro nivel y el servicio es impecable. ¡Altamente recomendado!"',
        name: 'Ricardo Mendoza',
        initials: 'RM',
        color: 'bg-red-500'
      },   
    ]);

}
