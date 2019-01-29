import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl} from '@angular/forms';

import { Former } from 'src/app/shared/models/former';

@Component({
  selector: 'app-former-registration',
  templateUrl: './former-registration.component.html',
  styleUrls: ['./former-registration.component.css']
})
export class FormerRegistrationComponent implements OnInit {

  constructor() { }
  formersList:  Former[] = []; 
  formerToAdd: Former=  new Former();
  ngOnInit() {
    console.log("Hello **************" );

  }
  
  addNewFormer(){
    this.formersList.push(this.formerToAdd);
    this.displayAllFormers();
    this.formerToAdd = new Former();
  }


  displayAllFormers(){
    console.log("************ displayAllFormers ************");
    this.formersList.forEach(former=>{
      console.log(former.toString(this.formerToAdd));      
    })
  }

}
