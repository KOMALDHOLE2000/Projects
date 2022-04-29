import { Component } from '@angular/core';

type TUser = {
  name : string;
  age : number;
  bio : string;
  gender : string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  name : string; 
  age : number;
  bio : string;
  gender : string;
  // name="";
  // age ="";
  // bio ="";
  // gender ="";
  user : TUser[] = []
  
  handleUser(event : MouseEvent)
  {
    event.preventDefault();
    
    console.log(this.name,this.age,this.bio,this.gender)
    this.user.push(
      {name : this.name,
      age : this.age,
      bio : this.bio,
      gender : this.gender
      }
    )
    console.log(this.user)
    
  
  }
}