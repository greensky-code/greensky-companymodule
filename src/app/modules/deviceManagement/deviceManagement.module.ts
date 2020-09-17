import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceManagementRoutingModule } from './deviceManagement-routing.modules';
import { DeviceManagemmentComponent } from './device-managemment/device-managemment.component';
import { DeviceListComponent } from './device-list/device-list.component';



@NgModule({
    imports : [
        CommonModule,
        DeviceManagementRoutingModule
    ],
    exports: [],
    declarations : [DeviceManagemmentComponent, DeviceListComponent],
    providers : []
})

export class DeviceManagementModule{}