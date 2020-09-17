import { Component, OnInit } from '@angular/core';
import { AssetsAddEditComponent } from '../assets-add-edit/assets-add-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
  }

  goToAssetsDetails(){
    this.modalService.open(AssetsAddEditComponent)
  }

}
