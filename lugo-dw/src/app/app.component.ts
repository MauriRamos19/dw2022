import { Component, ViewChild } from '@angular/core';

interface User {
  id: string;
  name: string;
  orders: String[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'lugo-dw';
  servicios:any[] = [];
  @ViewChild('selectedUser') selectedUser: any;
  users: User[] = [
    {
      id: '1',
      name: 'Juan Perez',
      orders: ['Medicamento 1', 'Medicamento 2', 'Medicamento 3']
    },
    {
      id: '2',
      name: 'Sofia Gomez',
      orders: ['Medicamento 1', 'Medicamento 2', 'Medicamento 3']
    },
    {
      id: '3',
      name: 'Angelina Lopez',
      orders: ['Medicamento 1', 'Medicamento 2', 'Medicamento 3']
    }
  ];
  serviciosTitulos: any[] = ['Farmacias', 'Regalos', 'Cafe', 'Salud','Regalos','Comida','Restaurantes'];
  showModal = false;
  servicioSeleccionado:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.generarServicios();
  }

  generarServicios(){
    for(let i=0; i< this.serviciosTitulos.length; i++){
      let data = {
        nombre: this.serviciosTitulos[i],
        comercios: [
          {
            name: 'Farmacia 1',
            img: '../assets/banner.jpg',
            description: 'Farmacia 1',
            productos: [
              {
                name: 'Producto 1',
                img: 'https://www.farmaciasanpablo.com.ar/wp-content/uploads/2019/03/Logo-Farmacia-San-Pablo-1.png',
                description: 'Producto 1',
                price: 100
              },

              {
                name: 'Producto 2',
                img: 'https://www.farmaciasanpablo.com.ar/wp-content/uploads/2019/03/Logo-Farmacia-San-Pablo-1.png',
                description: 'Producto 2',
                price: 100
              }
            ]
          },
          {
            name: 'Farmacia 2',
            img: '../assets/banner.jpg',
            description: 'Farmacia 2'
          },
          {
            name: 'Farmacia 3',
            img: '../assets/banner.jpg',
            description: 'Farmacia 3'
          }
        ]
      }
      this.servicios.push(data)
    }
  }

  
  abrirModal(servicio:any) {
    this.servicioSeleccionado = servicio;
    this.showModal = !this.showModal;
  }

  cerrarModal() {
    this.showModal = !this.showModal;
  }

  agregarACarrito(producto:any){
    console.log(producto)
  }
}
