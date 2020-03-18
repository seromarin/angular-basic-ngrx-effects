import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':id',
    component: UserComponent
  },
  {
    path: '**',
    component: ListComponent
  }
];

@NgModule({
  declarations: [ListComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ListComponent, UserComponent],
})
export class UsersModule { }
