import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverid:number = 10;
  serverstatus:string = 'offline';
  serverName = 'TestServer'
  
  getserverstatus(){
    return this.serverstatus;
  }

  allownewserver = false;

  constructor() {
    setTimeout(() => {
      this.allownewserver=true;
    }, 3000);
   }

  ngOnInit() {
  }

  serverCreationStatus = 'No server was created!';
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! '+ this.serverName;
  }

//   onUpdateServerName(event:Event){
//     this.serverName = (<HTMLInputElement>event.target).value;
//   }
}
