import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {ListPetsComponent} from "./list-pets/list-pets.component";
import {AddNewPetComponent} from "./add-new-pet/add-new-pet.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddNewPetService} from "./add-new-pet/add-new-pet.service";
import {NgSelectizeModule} from "ng-selectize";
import {DateValueAccessorModule} from "angular-date-value-accessor";
import {ViewPetInfoComponent} from "./view-pet-info/view-pet-info.component";
import {ViewPetInfoService} from "./view-pet-info/view-pet-info.service";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgSelectizeModule, DateValueAccessorModule],
    exports: [HomeComponent],
    declarations: [HomeComponent, ListPetsComponent, AddNewPetComponent, ViewPetInfoComponent],
    providers: [AddNewPetService, ViewPetInfoService],
})
export class HomeModule { }
