import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { SelectEmptyComponent } from './select-empty/select-empty.component';
import { ResultsComponent } from './results/results.component';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,   
    UploadComponent,
    SelectEmptyComponent,
    
    PageNotFoundComponentComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgIf,
    
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
