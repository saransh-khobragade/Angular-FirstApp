import {RouterModule, Routes} from '@angular/router';
import { Component} from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './Home.component';
import { ParaComponent } from './para/para.component';
import { ChildComponent } from './child/child.component';
import { ChildRoute } from './child/child.route';

const APP_ROUTES: Routes = [
    { path: 'first', component: FirstComponent},
    { path: 'second', component: SecondComponent},
    { path: 'para/:id', component: ParaComponent},
    { path: 'child', component: ChildComponent, children: ChildRoute},
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: '/para/1', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
