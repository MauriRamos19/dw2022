import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient:HttpClient) { }



  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get('http://localhost:8888/usuarios', {});
  }

  obtenerPlaylists(usuario): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/usuarios/${usuario}/playlists`, {});
  }

  guardarCancionPlaylist(data: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/usuarios/${data.idUsuario}/playlists/${data.idPlaylist}/canciones`, 
    {
      "nombreCancion": data.cancion.nombreCancion,
      "nombreArtista": data.artista.nombreArtista,
      "nombreAlbum": data.album.nombreAlbum
    });
  }
  
  guardarPlaylist(idUsuario, nombrePlaylist): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/playlists`,
      {
        tituloPlaylist: nombrePlaylist
      });
  }
}