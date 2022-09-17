import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Skill } from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../../shared/services/auth.service';
import { ApiEndPoint } from '../../rutas-api';

@Component({
  selector: 'app-skills-items-list',
  templateUrl: './skills-items-list.component.html',
  styleUrls: ['./skills-items-list.component.css'],
})
export class SkillsItemsListComponent implements OnInit {
  @Input() portfolioItem: Skill = {
    id: 0,
    nombre: '',
    valor: 0,
    logo: '',
  };

  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateItem: EventEmitter<any> = new EventEmitter();

  misdatosPortfolioList: Skill[] = [];

  texto: string = '';
  editando: boolean = false;
  valor: string = ''; // para el circular progress bar
  masde50: string = '';

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio
      .obtenerDatosPortfolio(ApiEndPoint.getSkill)
      .subscribe((data: Skill[]) => {
        this.misdatosPortfolioList = data;
      });
    this.valor = this.portfolioItem.valor.toString() + '%';
    if (this.portfolioItem.valor > 50) {
      this.masde50 = 'over50';
    } else {
      this.masde50 = '';
    }
  }

  onDelete(item: any) {
    this.onDeleteItem.emit(item);
  }

  onUpdate(itemPortfolio: any) {
    // lo que sigue acutaliza esta vista con el item
    // tal como estaba  antes de su cancelacion porque
    // sino con el binding tiene guardada la modificacion
    this.portfolioItem = itemPortfolio;

    if (this.portfolioItem.valor > 50) {
      this.masde50 = 'over50';
    } else {
      this.masde50 = '';
    }
    
    this.onUpdateItem.emit(itemPortfolio);
  }
}
