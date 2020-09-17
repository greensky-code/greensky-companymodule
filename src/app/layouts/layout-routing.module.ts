import { NgModule } from '@angular/core'
import { Routes , RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes : Routes = [
    { path : '' ,redirectTo : '/company', pathMatch : "full"},
    { path : "company" ,component: LayoutComponent , 
        children : [
            { path : '', redirectTo : "companyManagement" ,pathMatch : "full"},
            { path : 'companyManagement' , loadChildren : ()  => import('../modules/companyManagement/companyManagement.module').then(mod => mod.CompanyManagementModule) },
            { path : 'deviceManagement' , loadChildren : ()  => import('../modules/deviceManagement/deviceManagement.module').then(mod => mod.DeviceManagementModule) }
        ]    
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class layoutRoutingModule {}