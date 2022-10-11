import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  
  categoriaSeleccionada:any;
  categorias: any = []
  

  constructor() { }

  ngOnInit(): void {
    this.cargarAplicaciones();
  }

  seleccionarCategoria() {
    console.log(this.categoriaSeleccionada);
  }

  cargarAplicaciones() {
    let textosDePrueba = [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
      "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
      "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
      "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
      "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
    ]
    let contador = 1;
    for (let i = 0; i < 5; i++) {//Generar 5 categorias
      let categoria: any = {
        nombreCategoria: "Categoria " + i,
        descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
        aplicaciones: []
      };
      for (let j = 0; j < 10; j++) {//Generar 10 apps por categoria
        let aplicacion = {
          codigo: contador,
          nombre: "App " + contador,
          descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
          icono: `../assets/app-icons/${contador}.webp`,
          instalada: contador % 3 == 0 ? true : false,
          app: "app/demo.apk",
          calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
          descargas: 1000,
          desarrollador: `Desarrollador ${(i + 1) * (j + 1)}`,
          imagenes: ["../assets/app-screenshots/1.webp", "../assets/app-screenshots/2.webp", "../assets/app-screenshots/3.webp"],
          comentarios: [
            { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Juan" },
            { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Pedro" },
            { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Maria" },
          ]
        };
        contador++;
        categoria.aplicaciones.push(aplicacion);
      }
      this.categorias.push(categoria);
    }
  }

    
}

