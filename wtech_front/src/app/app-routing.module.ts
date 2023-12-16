import { adminGuard } from './services/guard/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { LeaderHomeComponent } from './pages/leader/leader-home/leader-home.component';
import { userGuard } from './services/guard/user.guard';
import { SearchhomeComponent } from './pages/search/searchhome/searchhome.component';
import { LeaderSearchHomeComponent } from './pages/search/leader-search-home/leader-search-home.component';
import { ManageHomeComponent } from './pages/manage/manage-home/manage-home.component';
import { UpdatesComponent } from './pages/updates/updates/updates.component';
import { LeaderupdatesComponent } from './pages/updates/leaderupdates/leaderupdates.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'searchhome',component:SearchhomeComponent},

  {path:'userhome',component:UserHomeComponent,canActivate:[userGuard]},
  {path:'searchhome',component:SearchhomeComponent,canActivate:[userGuard]},
  {path:'userupdates',component:UpdatesComponent,canActivate:[userGuard]},

  {path:'manage',component:ManageHomeComponent,canActivate:[adminGuard]},
  {path:'leaderhome',component:LeaderHomeComponent,canActivate:[adminGuard]},
  {path:'leadersearchhome',component:LeaderSearchHomeComponent,canActivate:[adminGuard]},
  {path:'leaderupdates',component:LeaderupdatesComponent,canActivate:[adminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }