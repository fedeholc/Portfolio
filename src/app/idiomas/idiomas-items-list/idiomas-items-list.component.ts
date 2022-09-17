import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Idioma} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../../shared/services/auth.service';
import { ApiEndPoint } from '../../rutas-api';

@Component({
  selector: 'app-idiomas-items-list',
  templateUrl: './idiomas-items-list.component.html',
  styleUrls: ['./idiomas-items-list.component.css']
})
export class IdiomasItemsListComponent implements OnInit {

  @Input() portfolioItem: Idioma = {
    id: 0,
    nombre: '',
    descripcion: '',
    logo: '',
  };

  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateItem: EventEmitter<any> = new EventEmitter();

  misdatosPortfolioList: Idioma[] = [];

  texto: string = '';
  editando: boolean = false;
  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio
      .obtenerDatosPortfolio(ApiEndPoint.getIdioma)
      .subscribe((data: Idioma[]) => {
        this.misdatosPortfolioList = data;
      });
  }

  onDelete(item: any) {
    this.onDeleteItem.emit(item);
  }

  onUpdate(itemPortfolio: any) {
    // lo que sigue acutaliza esta vista con el item
    // tal como estaba  antes de su cancelacion porque
    // sino con el binding tiene guardada la modificacion
    this.portfolioItem = itemPortfolio;
    this.onUpdateItem.emit(itemPortfolio);
  }
}
