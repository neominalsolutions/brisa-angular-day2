import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersComponent } from './users/users.component';

// static değilde dinamik route tanımlaması yapılacağında /:<param_name> şeklinde tanımlarız

const routes: Routes = [{
  path:'home',
  component:HomeComponent
}, {
  path:'about',
  component:AboutComponent
},
{
  path:'user-info/:name/:surname',
  component:UserInfoComponent
},
{
  path:'users',
  component:UsersComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
