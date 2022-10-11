import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlaylist = new EventEmitter();
  faMusic = faMusic;
  faPlay = faPlay;

  artistas: any = [];
  playlists: any = []
  constructor(private artistasService:ArtistasService, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    //this.artistas =
    this.artistasService.obtenerArtistas().subscribe(
      res=>{
        this.artistas = res.playlists;
        console.log("Artistas: ", this.artistas);
      },
      error=>{
        console.log(error)
      }
    );
  }

  verArtista(artista){
    this.onVerArtista.emit({idArtista: artista._id, nombreArtista: artista.nombreArtista});
  }

  verPlaylist(playlist){
    this.onVerPlaylist.emit(playlist);
  }

  obtenerPlaylists(usuario){
    console.log('Obtener playlists de usuario: ' + usuario);
    this.usuariosService.obtenerPlaylists(usuario)
    .subscribe( res => {
      console.log('Playlists: ', res);
      this.playlists = res;
    }, error => {
      console.log(error);
    }
    );
  }
}
