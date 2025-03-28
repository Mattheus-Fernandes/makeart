import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../components/header/header.module";
import { SidebarModule } from "../components/sidebar/sidebar.module";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
        SidebarModule
    ],
    exports: [
        LayoutComponent,
    ]
})

export class LayoutModule { }