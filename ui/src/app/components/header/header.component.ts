import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'tp-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private subscription : Subscription;
  constructor(private authService: AuthService) {
    this.subscription = this.authService.isSignIn().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
   }

  isAuth(){
    return this.isAuthenticated;
  }

  onLogout(){
    this.authService.logout();
    console.log(this.isAuth());
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
