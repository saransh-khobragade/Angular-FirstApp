import { Route } from '@angular/router';
import { ChildDetailComponent } from './child-detail.component';
import { ChildEditComponent } from './child-edit.component';

export const ChildRoute: Route[] = [
    { path: 'detail' , component: ChildDetailComponent},
    { path: 'edit' , component: ChildEditComponent}
];
