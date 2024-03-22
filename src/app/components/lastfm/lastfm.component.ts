import { Component,OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-lastfm',
  templateUrl: './lastfm.component.html',
  styleUrl: './lastfm.component.css'
})
export class LastfmComponent implements OnInit {

  constructor(public httpService : HttpService){
   
  }

  ngOnInit(): void {
    this.getArtistByName(this.search_artist);
  }

  short_list_page : boolean = false;
  short_item : any = "";
  short_item_array : any = [];

   artists : any = [];
   arrProducts: any;
   artist_array : any = [];
   artist_name: string='';
   search_artist : string = 'jackson';
   images_url : any = [];
   image_array : any = [];



   getArtistByName(artis_name : any){
   
    this.httpService.getAllArtists(artis_name).subscribe(res =>{
      this.arrProducts = res;
      console.log(this.arrProducts.results.artistmatches.artist);
      this.artist_array = this.arrProducts.results.artistmatches.artist

      for (const artist of this.artist_array) {
          this.artists.push(artist.name);
           this.image_array.push(artist.image[0]);
      }

      for(const image of this.image_array){
        this.images_url.push(image['#text']);
      }

     })
   }

   OnSubmit(myform:any){
     console.log(this.images_url);
       this.artists = [];
       this.getArtistByName(this.search_artist);
      // myform.reset();
   }

   getArtist(){
 
   }
   numSequence(n: number): Array<number> { 
    return Array(n); 
  }

Onchange(){
  this.short_list_page = !this.short_list_page;
}

moveToShortItem(artist : any){
     console.log(artist);
     this.short_item_array.push(artist);
    
}
  
}  
