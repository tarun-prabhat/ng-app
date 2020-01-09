import { Component, OnInit } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-testserver',
  templateUrl: './testserver.component.html',
  styleUrls: ['./testserver.component.css']
})
export class TestserverComponent implements OnInit {

  username:string='';
  empty=true;
 
  test(){

    
    if(this.username=='')
      {
        this.empty=true;
      }
    else
      {
        this.empty=false;
      }
      console.log(this.username);

  }
  onClickMe(){
    this.username='';
    this.empty=true;
  }

  
  constructor() {  
    setInterval(this.test.bind(this),1000)
  }


  ngOnInit() { 
    
  }

}
