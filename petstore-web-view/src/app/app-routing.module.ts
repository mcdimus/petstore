import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddNewPetComponent } from './home/add-new-pet/add-new-pet.component';
import { ViewPetInfoComponent } from './home/view-pet-info/view-pet-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddNewPetComponent},
  {path: 'id/:id', component: ViewPetInfoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
