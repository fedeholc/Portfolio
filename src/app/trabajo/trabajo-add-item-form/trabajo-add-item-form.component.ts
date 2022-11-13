import { Component, Input, Output, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Trabajo} from 'src/app/portfolio-interface';
import { Restaurar } from 'src/app/restaurar';
@Component({
  selector: 'app-trabajo-add-item-form',
  templateUrl: './trabajo-add-item-form.component.html',
  styleUrls: ['./trabajo-add-item-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrabajoAddItemFormComponent implements OnInit {

  @Output() onAddItem: EventEmitter<any> = new EventEmitter();

  closeResult: any;

  portfolioNewItem: Trabajo = {
    id: 0,
    puesto: '',
    descripcion: '',
    lugar: '',
    logo: Restaurar.defaultLogoURL,
    periodo: '',
  };
  //ese logo por default cambiarlo luego

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  // revisar si algo de esto vale la pena
  open(content: any) {
    this.modalService
      .open(content, { modalDialogClass: 'my-class', centered: true, size: 'lg', scrollable: true})
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addItem() {
 
    this.onAddItem.emit(this.portfolioNewItem);
    
    this.portfolioNewItem = {
      id: 0,
      puesto: '',
      descripcion: '',
      lugar: '',
      logo: '',
      periodo: '',
    };
    this.modalService.dismissAll('guardar');
  }

  cancelAddItem(form: NgForm) {
    

    this.portfolioNewItem = {
      id: 0,
      puesto: '',
      descripcion: '',
      lugar: '',
      logo: '',
      periodo: '',
    };
    this.modalService.dismissAll('cancelar');
  }
}
