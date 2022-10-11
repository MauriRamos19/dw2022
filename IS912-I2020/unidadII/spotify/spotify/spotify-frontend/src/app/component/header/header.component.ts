import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onSeleccionarUsuario = new EventEmitter();
  @Output() onGuardarPlaylist() = new EventEmitter();

  constructor(private modalService:NgbModal, private usuariosService:UsuariosService) { }
  usuarios:any = [];
  usuarioSeleccionado:any;
  nombrePlaylist:string = '';

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      res=>{
        this.usuarios = res;
        console.log('Usuarios', this.usuarios);
      },
      error=>{
        console.log(error);
      }
    )
  }

  guardarPlaylist(){
    this.usuariosService.guardarPlaylist(
      this.usuarioSeleccionado,
      this.nombrePlaylist
    ).subscribe(
      res=> {
        console.log(res);
        this.modalService.dismissAll();
      },
      error=>{
        console.log(error);
      }
    )
    
  }

  abrirNuevaPlaylist(modal){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  abrirModalUsuarios(modal){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  seleccionarUsuario(){
    this.modalService.dismissAll();
    console.log(this.usuarioSeleccionado);
  }

}
