import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>;
  
  constructor(private gifsService: GifsService) { }

  buscar(value: string){

   

  this.gifsService.searchGifs(this.txtBuscar.nativeElement.value)

  this.txtBuscar.nativeElement.value= "";
  }
  ngOnInit(): void {
  }

}
