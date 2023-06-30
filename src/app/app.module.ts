import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './DsAndAlgos/array/array.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'array', component: ArrayComponent }];
@NgModule({
  declarations: [AppComponent, ArrayComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
