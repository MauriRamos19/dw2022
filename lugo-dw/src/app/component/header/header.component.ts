import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() users: any[] = [];
  @Input() selectedUser: any;
  constructor() { }

  ngOnInit(): void {
  }

}
