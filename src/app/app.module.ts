import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category.component';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr' }),
    AppRoutingModule
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
