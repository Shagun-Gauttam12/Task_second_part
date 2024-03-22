import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrl: './short-list.component.css'
})
export class ShortListComponent implements OnInit{

 @Input() short_artist : any = []; 

 favourites_artist : any = [];

 ngOnInit(): void {
  
 }

 moveToFavorites(artist: any){
   this.favourites_artist.push(artist);
 }


 

}
