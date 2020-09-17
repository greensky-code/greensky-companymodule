import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  navigateTo(url: any){
    this.router.navigate(['company/' + url])
  }
}
