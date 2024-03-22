import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-music-brainz',
  templateUrl: './music-brainz.component.html',
  styleUrl: './music-brainz.component.css'
})
export class MusicBrainzComponent {

  releases: any = [];

  track_count: any = [];
  release_label: any = [];
  release_title: any = [];
  release_year: any = [];

  search_artist: string = "jackson five";
  search_release: string = "";
  arrProducts: any;
  release_arrProducts: any;
  artist_array: any = [];
  artists_name: any = [];
  isCollapsed: boolean = true;
  release_array: any = [
    {
      'year': 2012,
      'title': 'The samual jackson five',
      'Release_label': 'sk',
      'No_of_tracks': 200
    }
  ];
  id_array: any = [];
  release_id_array: any = [];
  select_artist: string = 'jackson';

  constructor(public httpService: HttpService) {
    this.getArtists(this.search_artist);
  }

  OnSubmit(myform: NgForm) {
    this.artists_name = [];
    this.getArtists(this.search_artist);
    //  myform.reset();

  }

  getArtists(search_artist: any) {
    this.httpService.getMusicBrainzArtistByName(search_artist).subscribe(res => {
      this.arrProducts = res;
      this.artist_array = this.arrProducts.artists;

      for (const artist of this.artist_array) {
        this.artists_name.push(artist.name);
        this.id_array.push(artist.id);
      }
      // console.log(this.artist_array);
      // console.log(this.id_array);
      // console.log(this.artists_name);


    }

    )
  }

  getRelease(search_release: any) {
    this.httpService.getReleaseByArtistName(search_release).subscribe(res => {
      this.release_arrProducts = res;
      this.releases = this.release_arrProducts.releases;

      //  for(const release of this.releases){

      //  }


      for (let i = 0; i < this.releases.length; i++) {
        if (this.releases[i]['track-count']) {
          this.track_count.push(this.releases[i]['track-count']);
        }
        else {
          this.track_count.push(' ');
        }
      }

      for (let i = 0; i < this.releases.length; i++) {
        if (this.releases[i].title) {
          this.release_title.push(this.releases[i].title);
        }
        else {
          this.release_title.push(' ');
        }
      }

      for (let i = 0; i < this.releases.length; i++) {
        if (this.releases[i].date) {
          this.release_year.push(this.releases[i].date);

        }
        else {
          this.release_year.push(' ');
        }
      }

      for (let i = 0; i < this.releases.length; i++) {

        if (this.releases[i]['label-info']) {

          if( this.releases[i]['label-info'][0].label){
          this.release_label.push(this.releases[i]['label-info'][0].label.name); }

          else{
            this.release_label.push(' ');
          }
        }
        else {
          this.release_label.push(' ');
        }
      }


      console.log(this.release_arrProducts);

      console.log(this.track_count);
      console.log(this.release_label);
      console.log(this.release_title);
      console.log(this.release_year);
    })
  }

  OnshowRelease(artist:any) {
    console.log(artist);
   this.search_release = artist;
   this.track_count = [];
   this.release_label = [];
    this.release_title = [];
   this.release_year = [];
    
    this.getRelease(this.search_release);
  }





}
