import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  title: string = 'Dashboard'

  @Output() toggleSidebar = new EventEmitter<void>()
  @Input() isSidebarOpen: boolean = false

  toggleSideBar() {
    this.toggleSidebar.emit()
  }
}
