import { Component, EventEmitter, Output } from '@angular/core';
import { SibebarItemsList } from 'src/app/types/sidebar-items-list.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarItems: SibebarItemsList = [
    { label: 'Geral', routeLink: '', icon: 'house' },
    { label: 'Produtos', routeLink: '', icon: 'squares-four' },
    { label: 'Finalizar venda', routeLink: '', icon: 'currency-dollar' },
    { label: 'Mais vendidos', routeLink: '', icon: 'chart-line-up' },
    { label: 'Reposição', routeLink: '', icon: 'stack' },
    { label: 'Gerar promoção', routeLink: '', icon: 'storefront' },
    { label: 'Marcas', routeLink: '', icon: 'tag' },
    { label: 'Categorias', routeLink: '', icon: 'line-segment' },
    { label: 'Subcategorias', routeLink: '', icon: 'line-segments' },
    { label: 'Usuários', routeLink: '', icon: 'users' },
    { label: 'Sair', routeLink: '', icon: 'sign-out' },
  ]

  @Output() redirectEvent = new EventEmitter<void>();

  redirectTo(route: string) {
    console.log('redirect to ...')
  }

  redirect() {
    this.redirectEvent.emit()
  }
}
