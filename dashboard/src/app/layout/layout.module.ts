import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../components/header/header.module";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule
    ],
    exports: [
        LayoutComponent,
    ]
})

export class LayoutModule { }