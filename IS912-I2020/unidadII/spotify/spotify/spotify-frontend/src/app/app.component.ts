import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PlaylistComponent } from './component/playlist/playlist.component';
import { AlbumComponent } from './component/album/album.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('sidebar') sidebarComponent: SidebarComponent;
  @ViewChild('playlist') playlistComponent: PlaylistComponent;
  @ViewChild('album') albumComponent: AlbumComponent;
  title = 'spotify-frontend';
  regionVisible:string = '';

  verArtista(id){
    this.regionVisible = 'artistas';
    console.log('Ver artista con ID: ' + id);
    this.albumComponent.obtenerAlbumes(id);
  }

  verPlaylist(playlist){
    this.playlistComponent.verPlaylist(playlist);
    this.regionVisible = 'playlists';
    console.log('Ver playlist con ID: ', playlist);
  }


  seleccionarUsuario(usuario) {
    console.log('Usuario seleccionado: ', usuario);
    this.sidebarComponent.obtenerPlaylists(usuario);
  };


  recargarPlaylists(idUsuario){
    this.sidebarComponent.obtenerPlaylists(idUsuario);
  }
}
