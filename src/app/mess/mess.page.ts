import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mess',
  templateUrl: './mess.page.html',
  styleUrls: ['./mess.page.scss'],
})
export class MessPage implements OnInit {

  constructor(private router:Router) { }
  user ={
    account:'hoangthai',
    password:'123'
  }
  acc:string=null;
  pass:string=null;
  ngOnInit() {
  }

  goHome(){
    this.checkUser(this.acc,this.pass);
    
  }
  checkUser(account,password){
    if(account == null && password == null){
      alert("Nhập tài khoản và mật khẩu")
    }
    if(account == this.user.account && password != this.user.password){
      alert("Sai mật khẩu !!!")
    }
    if(account != this.user.account && password == this.user.password){
      alert("Sai tài khoản !!!")
    }
    if(account == this.user.account && password == this.user.password){
      alert("Đăng nhập thành công !!!")
      this.router.navigate(['home'])
    }
  }
}
