import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { EditUsuarioComponent } from '../components/edit-usuario/edit-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, HttpClientModule, EditUsuarioComponent],
})
export class AppComponent {
  title = 'PruebaTecnica.UI';
  usuarios: Usuario[] = [];
  usuarioToEdit?: Usuario;
  constructor(private UsuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.UsuarioService.getUsuarios().subscribe(
      (result: Usuario[]) => (this.usuarios = result)
    );
  }

  initNewUsuario() {
    this.usuarioToEdit = new Usuario();
  }

  editUsuario(usuario: Usuario) {
    this.usuarioToEdit = usuario;
  }
}
