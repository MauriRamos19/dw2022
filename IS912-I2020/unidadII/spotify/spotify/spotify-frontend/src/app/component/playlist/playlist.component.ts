import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist:any = {}
  constructor() { }

  ngOnInit(): void {
  }

  verPlaylist(playlist){
    this.playlist = playlist;
    console.log('Ver desde playlistComponent: ', playlist);
  }


}
