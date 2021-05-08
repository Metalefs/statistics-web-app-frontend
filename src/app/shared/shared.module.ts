import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ClarityModule } from '@clr/angular';
import { MaterialModule } from './material-module';
import { MathjaxComponent } from './mathjax/mathjax.component';

@NgModule({
  declarations: [MathjaxComponent],
  imports: [
    MaterialModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ServiceWorkerModule,
    CommonModule
  ],
  exports:[
    MaterialModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ServiceWorkerModule,
    CommonModule,
    MathjaxComponent
  ]
})
export class SharedModule { }