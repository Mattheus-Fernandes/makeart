import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../components/header/header.module";
import { SidebarModule } from "../components/sidebar/sidebar.module";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
        SidebarModule,
        LayoutRoutingModule,
    ],
    exports: [
        LayoutComponent,
    ]
})

export class LayoutModule { }