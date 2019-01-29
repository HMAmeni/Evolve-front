import { Component, OnInit } from '@angular/core';
import { IdeaProvider } from 'src/app/shared/models/ideaProvider';

@Component({
  selector: 'app-idea-provider-registration',
  templateUrl: './idea-provider-registration.component.html',
  styleUrls: ['./idea-provider-registration.component.css']
})
export class IdeaProviderRegistrationComponent implements OnInit {

  constructor() { }
  ideaProvidersList:  IdeaProvider[] = []; 
  ideaProviderToAdd: IdeaProvider=  new IdeaProvider();
  ngOnInit() {
    console.log("Hello **************" );

  }


  
  addNewideaProvider(){
    this.ideaProvidersList.push(this.ideaProviderToAdd);
    this.displayAllIdeaProviders();
    this.ideaProviderToAdd = new IdeaProvider();
  }


  displayAllIdeaProviders(){
    console.log("*********** displayAllideaProviders ***********");
    this.ideaProvidersList.forEach(ideaProvider=>{
      console.log(ideaProvider.toString(this.ideaProviderToAdd));      
    })
  }
  
}
