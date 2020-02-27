import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageComponent } from './component';
import { PathRoutes } from './routing';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(PathRoutes),
    ],
    declarations: [ PageComponent ]
})

export class Module {}
