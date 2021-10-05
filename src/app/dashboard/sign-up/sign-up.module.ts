import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from 'src/app/components/mensagem/mensagem.module';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
