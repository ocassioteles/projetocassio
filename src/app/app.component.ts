import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetocassio';

   produtos = [
    {name:"celular", description:"aparelho eletrônico"},

    {name:"rodo", description:"acessório de limpeza"},

    {name:"bola", description:"bola de futebol"},
    
  ]

  name: string='Cassio';

 /*  produtos = [
    "Cássio estudando programação", "O dia está frio"
  ] */

  



}
