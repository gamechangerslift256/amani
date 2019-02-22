import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // public Util = Util;
  private profile: User = new User();
  private isLoading: true;

  doSubmit() {

  }

}
