import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';
import { Restaurar } from '../restaurar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  miPortfolio: Persona = {
    id: 0,
    nombre: '',
    titulo: '',
    mail: '',
    descripcion: '',
    foto: '',
    ubicacion: '',
    banner: '',
  };

  misdatosPortfolioList: Persona[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio
      .obtenerDatosPortfolio(ApiEndPoint.getPersona)
      .subscribe((data: Persona[]) => {
        this.miPortfolio = data[0];
        this.misdatosPortfolioList = data;
      });
  }

  onUpdate(itemPortfolio: any) {
    this.miPortfolio = { ...itemPortfolio };
   
    this.datosPortfolio
      .updateItemPortfolio(ApiEndPoint.putPersona, itemPortfolio)
      .subscribe((item: Persona) => {});
  }

  restaurar() {
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio
        .deleteItemPortfolio(ApiEndPoint.delPersona, element)
        .subscribe(() => {});
    });
    this.misdatosPortfolioList.splice(0);

    this.datosPortfolio
      .addItemPortfolio(ApiEndPoint.postPersona, Restaurar.persona)
      .subscribe((item: Persona) => {
        this.miPortfolio = item;  
        this.misdatosPortfolioList.push(item);
        this.ngOnInit();
      });

    
  }
  
}
