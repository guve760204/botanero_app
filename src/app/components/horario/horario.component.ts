import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [ CommonModule, ],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.scss'
})
export class HorarioComponent implements OnInit {

  ngOnInit(): void {
    this.verificarHorario()
  }

  stars = signal([1, 2, 3, 4, 5]);
  status:boolean = false

  dias = [
      {id:5, name:"viernes", apertura:14, cierre:21},
      {id:6, name:"sábado", apertura:14, cierre:21},
      {id:7, name:"domingo", apertura:11, cierre:18}
    ]


    verificarHorario() {
      const ahora = new Date();
      const today = ahora.getDay()
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const horario = this.dias.filter((dia)=>{
      return dia.id == today
    })

     let aperturaMinutos = 0;
      let cierreMinutos = 0

    if(!horario.length){

      return
    }else{

      aperturaMinutos = horario[0].apertura * 60
      cierreMinutos = horario[0].cierre * 60

    }

    // Convertir todo a minutos para facilitar la comparación
    const horaActualMinutos = hora * 60 + minutos;
     console.log(horaActualMinutos)

    // Definir horario: 09:00 (540 min) a 18:00 (1080 min)


    if (horaActualMinutos >= aperturaMinutos && horaActualMinutos < cierreMinutos) {
      this.status = true
      //console.log("¡Abierto! Estamos atendiendo.");
      return true;
    } else {
      this.status = false
      //console.log("Cerrado. Vuelva más tarde.");
      return false;
    }
  }

  formatHourTo12Hour(hour24:number) {
    const period = hour24 >= 12 ? 'pm.' : 'am.';
    // Adjust hour 0 (midnight) to 12, and subtract 12 from hours > 12 (afternoon/evening)
    const hour12 = hour24 % 12 || 12;

    return `${hour12}:00 ${period}`;
  }
}
