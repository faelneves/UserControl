import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../components/mensagem/mensagem.module';
import { ModalModule } from '../components/modal/modal.module';
import { DeleteModule } from './delete/delete.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { EditModule } from './edit/edit.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    ModalModule,
    DeleteModule,
    SignUpModule,
    EditModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
