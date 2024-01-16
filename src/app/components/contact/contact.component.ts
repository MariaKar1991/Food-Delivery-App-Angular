import { NavigationComponent } from './../../core/navigation/navigation.component';
import { HeaderComponent } from './../../core/header/header.component';
import { FooterComponent } from './../../core/footer/footer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, NavigationComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
