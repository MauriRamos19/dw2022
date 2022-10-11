import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lugo-dw';
  servicios:any[] = [];
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
