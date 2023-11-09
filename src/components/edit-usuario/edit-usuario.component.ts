import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css',
})
export class EditUsuarioComponent {
  @Input() usuario?: Usuario;

  constructor() {}

  ngOnInit(): void {}

  updateUsuario(usuario: Usuario) {}

  deleteUsuario(usuario: Usuario) {}

  createUsuario(usuario: Usuario) {}
}
