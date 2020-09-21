import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private router: Router, private route : ActivatedRoute) { }
  step:string;
  ngOnInit() {
    this.step = this.router.url;
    
  }

  navigateTo(url: any){
    this.step =this.router.url;
    
    this.router.navigate(['company/' + url])
  }
  
}
