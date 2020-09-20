import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule} from 'angular-datatables';
import { CompanyManagementRoutingModule } from './companyManagement-routing.module';
import { CompanyManagemmentComponent } from './company-managemment/company-managemment.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyServiceService } from './company-service.service';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { CompanyLocationComponent } from './company-location/company-location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyContactComponent } from './company-contact/company-contact.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsAddEditComponent } from './assets-add-edit/assets-add-edit.component';
import { AddnewcompanyComponent } from './addnewcompany/addnewcompany.component';


@NgModule({
    imports : [
        CommonModule,
        CompanyManagementRoutingModule,
        ReactiveFormsModule, FormsModule,
        NgbModule,
        DataTablesModule
    ],
    exports: [CompanyManagemmentComponent,AssetsAddEditComponent],
    declarations : [CompanyManagemmentComponent, CompanyDetailsComponent, CompanyInformationComponent, CompanyLocationComponent, CompanyContactComponent, AssetsListComponent, AssetsAddEditComponent, AddnewcompanyComponent],
    providers : [CompanyServiceService],
    entryComponents : [CompanyLocationComponent, CompanyContactComponent]
})

export class CompanyManagementModule{}