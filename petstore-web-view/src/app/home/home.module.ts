import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AddNewPetComponent } from './add-new-pet/add-new-pet.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { ViewPetInfoComponent } from './view-pet-info/view-pet-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { EditPetInfoComponent } from './edit-pet-info/edit-pet-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddNewPetComponent,
    ListPetsComponent,
    ViewPetInfoComponent,
    EditPetInfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRippleModule,
    RouterModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class HomeModule {
}
