import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { SelectEmptyComponent } from "./select-empty/select-empty.component";
import { UploadComponent } from "./upload/upload.component";
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'select', component: SelectEmptyComponent},  
    {path: 'upload', component: UploadComponent},
    { path: 'update' , component: UpdateComponent }, 
    {path: '', component: HomeComponent},
    { path: '**', component: PageNotFoundComponentComponent }, 
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
