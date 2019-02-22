import { MessageMocks } from './../mocks/messageMocks';
import { Message } from './../models/message';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public messages = MessageMocks;
  public input = '';


  constructor(  ) { }

  ngOnInit() {
  }




  doSend() {
     if (this.input.length > 0) {
      const message: Message = new Message();
    }
  }

}
