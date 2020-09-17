import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.css']
})
export class CompanyContactComponent implements OnInit {

  constructor(private activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

}
