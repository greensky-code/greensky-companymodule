import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { layoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
    declarations : [LayoutComponent, HeaderComponent, TabsComponent],
    imports : [
        // BrowserModule,
        FormsModule,
        CommonModule,
        layoutRoutingModule
    ],
    exports : [LayoutComponent],
    providers : []
})

export class layoutModule{}