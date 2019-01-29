import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  loginEmail: string;
  password: string;
  agentToLogin: string;

  ngOnInit() {

  }
  login() {
    console.log("agentToLogin: ", this.agentToLogin, "password: ", this.password, "loginEmail: ", this.loginEmail);
    switch (this.agentToLogin) {
      case "investor":
      this.investorLogin();
        break;

      case "former":
      this.formerLogin();
        break;

      case "ideaProvider":
      this.ideaProviderLogin();
        break;
    }
  }

  formerLogin() {
    if ((this.loginEmail == "former@gmail.com") && (this.password == "former0000")) {

      this.router.navigate(['/envirements/formerActivities/1'], {});
    } else {
      swal("Error", "Verify your email and password", "error")
    }

  }

  investorLogin() {
    if ((this.loginEmail == "investor@gmail.com") && (this.password == "investor0000")) {

      this.router.navigate(['/envirements/investorActivities/1'], {});
    } else {
      swal("Error", "Verify your email and password", "error")
    }

  }

  ideaProviderLogin() {
    if ((this.loginEmail == "ideaprovider@gmail.com") && (this.password == "ideaprovider0000")) {

      this.router.navigate(['/envirements/ideaproviderActivities/1'], {});
    } else {
      swal("Error", "Verify your email and password", "error")
    }

  }


}
