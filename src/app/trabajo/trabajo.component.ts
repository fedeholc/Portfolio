import { Component, OnInit } from '@angular/core';
import { Trabajo} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';
import { Restaurar } from '../restaurar';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {
  misdatosPortfolioList: Trabajo[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getTrabajo).subscribe((data: Trabajo[]) => {
      this.misdatosPortfolioList = data;
    });
    
  }

  addItem(itemPortfolio: any) {
    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postTrabajo,itemPortfolio).subscribe((item: Trabajo) => {
      this.misdatosPortfolioList.push(item);
    });
  }

 

  updateItem(itemPortfolio: any){
    this.datosPortfolio.updateItemPortfolio(ApiEndPoint.putTrabajo, itemPortfolio).subscribe((item: Trabajo) => {

    });
  }

  deleteItem(itemPortfolio: any) {
    this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delTrabajo, itemPortfolio).subscribe(() => {
      this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element: Trabajo) => {
        return element.id !== itemPortfolio.id;
      });
    });
  }

  restaurar(){
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delTrabajo, element).subscribe(() => {
       });
    });
    this.misdatosPortfolioList.splice(0);
   
    Restaurar.trabajos.forEach((element, index) => {
   
        this.datosPortfolio.addItemPortfolio(ApiEndPoint.postTrabajo, element).subscribe((item: Trabajo) => {
          this.misdatosPortfolioList.push(item);
  
        });
      });
     
  }
}
