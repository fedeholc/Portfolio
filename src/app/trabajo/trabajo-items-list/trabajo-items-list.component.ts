import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Trabajo} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../../shared/services/auth.service';
import { ApiEndPoint } from '../../rutas-api';

@Component({
  selector: 'app-trabajo-items-list',
  templateUrl: './trabajo-items-list.component.html',
  styleUrls: ['./trabajo-items-list.component.css'],
})
export class TrabajoItemsListComponent implements OnInit {

  @Input() portfolioItem: Trabajo = {
    id: 0,
    lugar: '',
    puesto: '',
    descripcion: '',
    periodo: '',
    logo: '',
  };

  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateItem: EventEmitter<any> = new EventEmitter();

  misdatosPortfolioList: Trabajo[] = [];

  texto: string = '';
  editando: boolean = false;
  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio
      .obtenerDatosPortfolio(ApiEndPoint.getTrabajo)
      .subscribe((data: Trabajo[]) => {
        this.misdatosPortfolioList = data;
      });
  }

  onDelete(item: any) {
    this.onDeleteItem.emit(item);
  }

  onUpdate(itemPortfolio: any) {
    // lo que sigue actaliza esta vista con el item
    // tal como estaba  antes de su cancelacion porque
    // sino con el binding tiene guardada la modificacion
    this.portfolioItem = itemPortfolio;
    this.onUpdateItem.emit(itemPortfolio);
  }
}
