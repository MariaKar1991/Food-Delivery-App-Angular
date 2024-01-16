import { UserService } from './../../service/user.service';
import { User } from '../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Error404Component } from '../error404/error404.component';
import { NavigationComponent } from '../../core/navigation/navigation.component';
import { HeaderComponent } from '../../core/header/header.component';
import { FooterComponent } from '../../core/footer/footer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    Error404Component,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  user: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response: User[]) => {
        console.log('User:', response);
        this.user = response;
      },
    });
  }

  postUser(data: any) {
    this.userService.postUser(data).subscribe({
      next: () => {
        console.log('User created successfully');
      },
    });
  }

  putUser(userId: number, data: any) {
    this.userService.putUser(userId, data).subscribe({
      next: () => {
        console.log('User updated successfully');
      },
    });
  }

  patchUser(userId: number, data: any) {
    this.userService.patchUser(userId, data).subscribe({
      next: () => {
        console.log('User patched successfully');
      },
    });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        console.log('User deleted successfully');
      },
    });
  }
}
