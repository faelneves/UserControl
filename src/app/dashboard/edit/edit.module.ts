import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from 'src/app/components/mensagem/mensagem.module';



@NgModule({
  declarations: [ EditComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule
  ],
  exports: [
    EditComponent
  ]
})
export class EditModule { }
