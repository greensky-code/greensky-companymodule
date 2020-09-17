import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DeviceManagemmentComponent } from './device-managemment/device-managemment.component';
import { DeviceListComponent } from './device-list/device-list.component';

const routes : Routes = [
    
    { path : '' , component: DeviceManagemmentComponent , 
        children : [
          { path : "" , redirectTo : 'deviceList', pathMatch :"full" },
          { path: "deviceList" , component: DeviceListComponent  } 
        ]}
]

@NgModule({
  imports : [RouterModule.forChild(routes) ],
  exports : [RouterModule]
})

export class DeviceManagementRoutingModule {}