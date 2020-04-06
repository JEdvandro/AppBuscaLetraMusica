import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';
import { MusicasService } from '../service/apimusicas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artista: string;
  titulo: string;
  letra: any;

  constructor(private cepService: MusicasService ) { }

  async consultaMusica() {
    try {
      const result = await this.cepService.getMusica(this.artista, this.titulo);
      this.populaDadosCep(result);
  
    } 
    catch (error) {
      console.log(error);
      this.letra = ("Letra não encontrada!");
    }
  }

  populaDadosCep(dados) {
    this.letra = dados.lyrics;


    
  }
}
