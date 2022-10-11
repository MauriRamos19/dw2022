import { Component, OnInitm, Output, EventEmitter } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasService } from '../../services/artistas.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Output() onAgregarCancion = new EventEmitter();
  faPlay = faPlay;
  faPlus = faPlus;
  albumes: any = [];
  artistaActual: string;
  idUsuarioSeleccionado: string;
  playlists: any = [];
  playlistSeleccionado: any;
  albumSeleccionado: string;
  cancionSeleccionada: string;
  constructor(
    private modalService: NgbModal,
    private artistasService: ArtistasService,
    private usuariosService: UsuariosService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  guardarCancionPlaylist(){
    const data = {
      idUsuario: this.idUsuarioSeleccionado,
      idPlaylist: this.playlistSeleccionado,
      artista: this.artistaActual,
      cancion: this.cancionSeleccionada,
      album: this.albumSeleccionado
    }

    this.usuariosService.guardarCancionPlaylist(data)
    .subscribe( res => {
      if(res.ok === 1){
        this.modalService.dismissAll();
        this.onAgregarCancion.emit(this.idUsuarioSeleccionado);
      }
    }
    , error => {
      console.log(error);
    }
    );
  }

  agregarAPlaylist(modalGuardarEnPlaylist,cancion,nombreAlbum){
    this.cancionSeleccionada = cancion;
    this.albumSeleccionado = nombreAlbum;
    this.usuariosService.obtenerPlaylists(this.idUsuarioSeleccionado).subscribe(
      res=>{
        this.playlists = res.playlists;
        console.log('Playlists: ', this.playlists);
        this.modalService.open(modalGuardarEnPlaylist, {
          size: 'xs',
          centered: true
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

  obtenerAlbumes(artista) {
    console.log('Obtener albumes de artista: ' + artista.idArtista);
    this.artistaActual = artista.nombreArtista;
    this.artistasService.obtenerAlbumes(artista.idArtista)
    .subscribe( res => {
      console.log('Albumes: ', res);
      this.albumes = res.albumes;
    }, error => {
      console.log(error);
  }
  );
  }

  obtenerUrl(imagen){
    return this.sanitizer.bypassSecurityTrustStyle(`url(../assets/${imagen})`);
  }
}
