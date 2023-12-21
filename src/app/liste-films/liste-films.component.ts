import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent {
  tabFilms=[{nomFilm : 'Mission Impossible : Fallout ',imageFilm : 'assets/films/miFallout.jpg',nbJaime : 0 , nbJenaimePas : 0 ,disponible : true},
{nomFilm : 'Mission Impossible 2 ',imageFilm : 'assets/films/mi2.jpg',nbJaime : 0 , nbJenaimePas : 0 ,disponible : true},
{nomFilm : 'Mission Impossible : Protocole Fantôme ',imageFilm : 'assets/films/miFantome.jpg',nbJaime : 0 , nbJenaimePas : 0 ,disponible : true}]
onJaime(str:number) {

  console.log('J\'aime ce film');
  this.tabFilms[str].nbJaime++;
}
onAimePas(str:number)
{
  console.log('Je n\'aime pas ce film');
  this.tabFilms[str].nbJenaimePas++;
    
    
  }
getColor(str:number)
{
if (this.tabFilms[str].nbJaime > this.tabFilms[str].nbJenaimePas)
  {
    return '#1c8454';
  }
else if(this.tabFilms[str].nbJaime < this.tabFilms[str].nbJenaimePas)
  {
    return '#dc3444';
  }
else 
    return '#ffffff';
}
}
