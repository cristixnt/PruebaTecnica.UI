import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { EditUsuarioComponent } from '../edit-usuario/edit-usuario.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, EditUsuarioComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  usuarioToEdit?: Usuario;
  constructor(private UsuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.UsuarioService.getUsuarios().subscribe(
      (result: Usuario[]) => (this.usuarios = result)
    );
  }

  updateUsuariosList(usuarios: Usuario[]) {
    this.usuarios = usuarios;
  }

  initNewUsuario() {
    this.usuarioToEdit = new Usuario();
  }

  editUsuario(usuario: Usuario) {
    this.usuarioToEdit = usuario;
  }
}
