import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-demo';
  datas=[
    {
      id:1,
      Jan:[150,250],
      Feb:[320,240],
      March:[450,100,760]
    },
    {
      id:2,
      Jan:[250,70],
      Feb:[220,220],
      March:[250,100,260]
    },
    {
      id:3,
      Jan:[450,550],
      Feb:[320,240],
      March:[450,760]
    }
    
    
       ]
    


  calRewardPoint = num => {
    if (num > 100) {
      return 2 * (num - 100) + 50;
    } else if (num > 50) {
      return num - 50;
    } else {
      return 0;
    }
  };  

}