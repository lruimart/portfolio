import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../app/pages/home/home.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HomeModule
    ],
    exports: []
})
export class SharedModule { }