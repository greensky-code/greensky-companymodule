import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { CompanyManagemmentComponent } from './company-managemment/company-managemment.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsAddEditComponent } from './assets-add-edit/assets-add-edit.component';

const routes : Routes = [
    
    { path : '' , component: CompanyManagemmentComponent , 
        children : [
          { path : "" , redirectTo : 'companyList', pathMatch :"full" },
          { path : "companyList" , component: CompanyDetailsComponent  },
          { path : "companyInfo" , component: CompanyInformationComponent}, 
          { path : "companyInfo/:id" , component: CompanyInformationComponent},
          { path : "assestList" , component: AssetsListComponent  }  , 
          {path:"addeditassest",component:AssetsAddEditComponent},
          {path:"addeditassest/:id",component:AssetsAddEditComponent}       
       
        ]}
]

@NgModule({
  imports : [RouterModule.forChild(routes) ],
  exports : [RouterModule]
})

export class CompanyManagementRoutingModule {}