import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!:SocialUser;
  constructor(private authservice:SocialAuthService){
    
  }
  ngOnInit():void{
    this.authservice.authState.subscribe((user)=>
    {
      this.user = user;
    })
  }
  signWithGoogle():any{
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut():any{
    this.authservice.signOut();
  }
}
