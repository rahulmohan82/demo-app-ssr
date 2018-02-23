import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category.component';
//
import { ServerModule } from '@angular/platform-server';
//
import { HomeComponent } from './home.component';
@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        HomeComponent
    ],
    imports: [
        ServerModule,
        BrowserModule.withServerTransition({ appId: 'ssr' }),
        AppRoutingModule
    ],
    providers: [Title, Meta],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
