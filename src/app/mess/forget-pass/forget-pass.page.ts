import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backMess(){
    this.router.navigate(['mess'])
  }
}
