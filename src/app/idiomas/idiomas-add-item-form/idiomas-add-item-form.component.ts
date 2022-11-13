import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Idioma } from 'src/app/portfolio-interface';
import { Restaurar } from 'src/app/restaurar';
@Component({
  selector: 'app-idiomas-add-item-form',
  templateUrl: './idiomas-add-item-form.component.html',
  styleUrls: ['./idiomas-add-item-form.component.css']
})
export class IdiomasAddItemFormComponent implements OnInit {


  @Output() onAddItem: EventEmitter<any> = new EventEmitter();

  closeResult: any;

  portfolioNewItem: Idioma = {
    id: 0,
    nombre: '',
    descripcion: '',
    logo: Restaurar.defaultLogoURL,
  };
  //ese logo por default cambiarlo luego

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  // revisar si algo de esto vale la pena
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
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
      nombre: '',
      descripcion: '',
      logo: Restaurar.defaultLogoURL,

    };
    this.modalService.dismissAll('guardar');
  }

  cancelAddItem() {
    this.portfolioNewItem = {
      id: 0,
      nombre: '',
      descripcion: '',
      logo: Restaurar.defaultLogoURL,

    };
    this.modalService.dismissAll('cancelar');
  }
}
