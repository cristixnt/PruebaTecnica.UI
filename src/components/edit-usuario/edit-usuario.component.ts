import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css',
})
export class EditUsuarioComponent implements OnInit {
  @Input() usuario?: Usuario;
  @Output() usuariosUpdated = new EventEmitter<Usuario[]>();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  updateUsuario(usuario: Usuario) {
    this.usuarioService
      .updateUsuario(usuario)
      .subscribe((usuarios: Usuario[]) => this.usuariosUpdated.emit(usuarios));
  }

  deleteUsuario(usuario: Usuario) {
    this.usuarioService
      .deleteUsuario(usuario)
      .subscribe((usuarios: Usuario[]) => this.usuariosUpdated.emit(usuarios));
  }

  createUsuario(usuario: Usuario) {
    this.usuarioService
      .createUsuario(usuario)
      .subscribe((usuarios: Usuario[]) => this.usuariosUpdated.emit(usuarios));
  }
}
