import { Component, OnInit } from '@angular/core';
import { Proyecto} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';
import { Restaurar } from '../restaurar';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  misdatosPortfolioList: Proyecto[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getProyecto).subscribe((data: Proyecto[]) => {
      this.misdatosPortfolioList = data;
    });
    
  }

  addItem(itemPortfolio: any) {
    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postProyecto,itemPortfolio).subscribe((item: Proyecto) => {
      this.misdatosPortfolioList.push(item);
    });
  }

 
  updateItem(itemPortfolio: any){
  
    this.datosPortfolio.updateItemPortfolio(ApiEndPoint.putProyecto, itemPortfolio).subscribe((item: Proyecto) => {

    });
  }

  deleteItem(itemPortfolio: any) {
    this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delProyecto, itemPortfolio).subscribe(() => {
      this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element: Proyecto) => {
        return element.id !== itemPortfolio.id;
      });
    });
  }

  restaurar(){
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delProyecto, element).subscribe(() => {
       });
    });
    this.misdatosPortfolioList.splice(0);
   
    Restaurar.proyectos.forEach((element, index) => {
     this.datosPortfolio.addItemPortfolio(ApiEndPoint.postProyecto, element).subscribe((item: Proyecto) => {
        this.misdatosPortfolioList.push(item);
      });
    });
  }
}
