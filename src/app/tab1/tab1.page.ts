import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public nav: NavController){

  }
  yemeksepeti() {
    window.location.href = "https://www.yemeksepeti.com/house-of-b-besiktas-sinanpasa-mah-istanbul";
  }
  tel(){
    window.open("tel:+902122362747");
  }

  
}
