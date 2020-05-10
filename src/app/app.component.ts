import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soccerAcademy';
  path: string;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
    // see also 
    if(val instanceof NavigationEnd){
      const res = val.url.split("/");
      this.path = res[1]
    }
});
}
  toggleSideBar(){
    document.getElementsByClassName("sideNavBar")[0].classList.toggle("active");
    }
}
