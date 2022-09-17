import { Component, OnInit } from '@angular/core';
import { Skill} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';
import { Restaurar } from '../restaurar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

 
  misdatosPortfolioList: Skill[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getSkill).subscribe((data: Skill[]) => {
      this.misdatosPortfolioList = data;
    });
     
  }

  addItem(itemPortfolio: any) {
    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill,itemPortfolio).subscribe((item: Skill) => {
      this.misdatosPortfolioList.push(item);
    });
  }

  

  updateItem(itemPortfolio: any){
     
    this.datosPortfolio.updateItemPortfolio(ApiEndPoint.putSkill, itemPortfolio).subscribe((item: Skill) => {

    });
  }

  deleteItem(itemPortfolio: any) {
    this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delSkill, itemPortfolio).subscribe(() => {
      this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element: Skill) => {
        return element.id !== itemPortfolio.id;
      });
    });
  }
  
  restaurar(){
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delSkill, element).subscribe(() => {
       });
    });
    this.misdatosPortfolioList.splice(0);
   
    Restaurar.skills.forEach((element, index) => {
     this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, element).subscribe((item: Skill) => {
        this.misdatosPortfolioList.push(item);
      });
    });
  }
}
