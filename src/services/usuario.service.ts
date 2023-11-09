import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'Usuarios';

  constructor(private http: HttpClient) {}

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      `${environment.apiUrl}/${this.url}/GetUsuarios`
    );
  }
}
