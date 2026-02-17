import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testimoniales',
  standalone: true,
  imports: [],
  templateUrl: './testimoniales.component.html',
  styleUrl: './testimoniales.component.scss'
})
export class TestimonialesComponent {
   stars = signal([1, 2, 3, 4, 5]);

  testimonials = signal([
    {
      text: '"El mejor ambiente para disfrutar con amigos. Los Tacos de Camarón son de otro nivel y el servicio es impecable. ¡Altamente recomendado!"',
      name: 'Ricardo Mendoza',
      initials: 'RM',
      color: 'bg-red-500'
    },
    {
      text: '"Me encanta el concepto y las promociones de los sábados son geniales y la frescura de los mariscos se nota en cada bocado."',
      name: 'Sofía García',
      initials: 'SG',
      color: 'bg-green-500'
    },
    {
      text: '"Un lugar vibrante con música excelente. El Ceviche de la Casa es fresco y delicioso. Sin duda, mi lugar favorito para el fin de semana."',
      name: 'Alejandro López',
      initials: 'AL',
      color: 'bg-blue-500'
    }
  ]);

}
