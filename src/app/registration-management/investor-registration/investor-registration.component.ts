import { Component, OnInit } from '@angular/core';
import { Investor } from 'src/app/shared/models/investor';

@Component({
  selector: 'app-investor-registration',
  templateUrl: './investor-registration.component.html',
  styleUrls: ['./investor-registration.component.css']
})
export class InvestorRegistrationComponent implements OnInit {

  constructor() { }
  investorsList:  Investor[] = []; 
  investorToAdd: Investor=  new Investor();
  ngOnInit() {
    console.log("Hello **************" );

  }

  
  addNewinvestor(){
    this.investorsList.push(this.investorToAdd);
    this.displayAllinvestors();
    this.investorToAdd = new Investor();
  }


  displayAllinvestors(){
    console.log("************ displayAllinvestors ************");
    this.investorsList.forEach(investor=>{
      console.log(investor.toString(this.investorToAdd));      
    })
  }

}
