import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SelectEmptyComponent } from "./select-empty/select-empty.component";
import { UploadComponent } from "./upload/upload.component";
export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'select', component: SelectEmptyComponent},  
    {path: 'upload', component: UploadComponent},     
];