import { CategoriaService } from './../../../service/domain/categoria.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  bucketUrl: string = API_CONFIG.backetBaseUrl;
  itens:CategoriaDTO[];

  constructor(public categoriaService: CategoriaService  ) { }

  ionViewDidLoad(){
  }
  ngOnInit() {

    this.categoriaService.findAll()
        .subscribe(response => {
          this.itens = response;
          console.log(response);
        },
        error => {
          console.log( error);
        });
  }
}
