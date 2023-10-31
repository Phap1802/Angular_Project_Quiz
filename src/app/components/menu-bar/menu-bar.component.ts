import { Component, Inject, } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-bar.responsive.component.css']
})
export class MenuBarComponent {

  navbarOpen = false;

  constructor() {
    
    
    // Comando para adicionar evento onde "ouve" a renderização da tela  
    window.addEventListener('resize', this.checkScreenSize.bind(this));
    // chama a função para verificar o tamnho da tela quando a pagina e carregada. 
    this.checkScreenSize();
  }

  toggleNavbar() {
    // Altera o valor de "navbarOpen"  apenas quando a tela for menor  a 1024 pixels de largura
    if (window.innerWidth < 1024) {
      this.navbarOpen = !this.navbarOpen;
    }
  }

  // Verifica e Atribui o valor "false" ao "navbaropen" para telas maiores ou igual a 1024px de largura
  checkScreenSize() {
    if (window.innerWidth >= 1024) {
      this.navbarOpen = false;
    }
  }
  
}

