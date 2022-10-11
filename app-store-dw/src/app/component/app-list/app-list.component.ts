import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  
  @Input() apps:any
  appSeleccionada:any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModal(modal:any,app:any){
    this.appSeleccionada = app;
    this.modalService.open(
      modal,
      {
        size:'lg',
        centered:true
      }
    );
  }

}
