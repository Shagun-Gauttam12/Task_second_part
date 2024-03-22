import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

  @Input() release_year : any[] = [];
  @Input()  release_title : any[] = [];
  @Input() release_label: any[] = [];
  @Input() track_count : any[] = [];


  numSequence(n: number): Array<number> { 
    return Array(n); 
  }
  
}
