import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category.component';
const appRoutes: Routes = [

    {
        path: ':pagename',
        component: CategoryComponent,
    },
    {
        path: '**',
        component: HomeComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
