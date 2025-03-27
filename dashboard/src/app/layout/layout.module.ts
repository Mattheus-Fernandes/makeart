import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LayoutComponent,
    ]
})

export class LayoutModule { }