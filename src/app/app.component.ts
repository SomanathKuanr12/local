import { Component } from '@angular/core';
import { UsersService } from './Services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private user:UsersService){}
  title = 'session_storage';
  key=''
  val=''
  data=''
  key1=''
  onInsert()
  {
    this.user.setItem(this.key,this.val)
  }
  onUpdate(){
    this.user.UpdateItem(this.key,this.val)
  }
  onShow(){
    this.data=this.user.readItem(this.key)
  }
  onDelete(){
    this.user.DeleteItem(this.key)
  }
}
