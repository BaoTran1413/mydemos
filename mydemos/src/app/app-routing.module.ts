import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DesignComponent } from './design/design.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component: UserComponent},
  {path:'department',component: DepartmentComponent},
  {path:'',component: DesignComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
