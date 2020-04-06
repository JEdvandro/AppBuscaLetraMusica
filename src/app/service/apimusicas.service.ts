import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private http: HttpClient) { }

  getMusica(artista: string, musica: string) {
    return this.http.get(`https://api.lyrics.ovh/v1/${artista}/${musica}`).toPromise();
  }
}
