import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent  {
  toggle: boolean = false

  sidebarToggle() {
    this.toggle = !this.toggle
  }

  redirectEvent() {
    this.toggle = false
  }
}
