import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faPhone = faPhone;
  faBars = faBars;
  faXmark = faXmark;
  isMenuOpen = false;
  toogleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
