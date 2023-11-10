import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username?: string;
  password?: string;
  @Output() onCallParent: EventEmitter<void> = new EventEmitter();

  callParent(): void {
    this.onCallParent.emit();
  }

  constructor(private loginService: LoginService) {}

  onSubmit() {
    const user = { username: this.username, password: this.password };
    this.loginService.login(user).subscribe((user) => {
      this.loginService.setToken(user);
      this.callParent();
    });
  }
}
