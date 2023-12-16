import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Custom Auth Interceptor */
import { authInterceptorProviders } from './services/auth.interceptor';

/* Angular Material Imports */
import{ MatButtonModule } from '@angular/material/button';
import{ MatCardModule } from '@angular/material/card';
import{ MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import{ FlexLayoutModule } from '@angular/flex-layout';
import{ MatFormFieldModule } from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{ MatSelectModule } from '@angular/material/select';
import{ MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

/* Main Components */
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

/* Leader Components */
import { LeaderHomeComponent } from './pages/leader/leader-home/leader-home.component';
import { LeaderBodyComponent } from './pages/leader/leader-body/leader-body.component';
import { ViewProfileLeaderComponent } from './pages/leader/view-profile-leader/view-profile-leader.component';


/* User Components */
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { ViewProfileComponent } from './pages/user/view-profile/view-profile.component';
import { UserBodyComponent } from './pages/user/user-body/user-body.component';

/* Navbar Components */
import { NavbarComponent } from './component/navbar/navbar.component';
import { LeaderNavbarComponent } from './component/leader-navbar/leader-navbar.component';

/* Post Components */
import { ViewPostComponent } from './component/Post/view-post/view-post.component';
import { PostByIdComponent } from './component/Post/post-by-id/post-by-id.component';
import { PostByLeaderComponent } from './component/Post/post-by-leader/post-by-leader.component';

import { ViewAllPostComponent } from './component/Post/view-all-post/view-all-post.component';
import { PostByIdLeadComponent } from './component/Post/post-by-id-lead/post-by-id-lead.component';

/* Follow Components */
import { ViewFollowingsComponent } from './component/following/viewfollowings/viewfollowings.component';
import { FollowByIdComponent } from './component/following/follow-by-id/follow-by-id.component';
import { ViewfollowerComponent } from './component/follower/viewfollower/viewfollower.component';
import { FollowerByIdComponent } from './component/follower/follower-by-id/follower-by-id.component';

/* Search Components */
import { SearchhomeComponent } from './pages/search/searchhome/searchhome.component';
import { FilterLeadersListComponent } from './pages/user/view-leaders/filter-leaders-list/filter-leaders-list.component';
import { LeadersListComponent } from './pages/user/view-leaders/leaders-list/leaders-list.component';
import { LeaderByIdComponent } from './pages/user/view-leaders/leader-by-id/leader-by-id.component';

import { LeaderSearchHomeComponent } from './pages/search/leader-search-home/leader-search-home.component';
import { LeadersViewListComponent } from './pages/leader/view-Leaders/leaders-view-list/leaders-view-list.component';
import { LeadersViewLeaderByIdComponent } from './pages/leader/view-Leaders/leaders-view-leader-by-id/leaders-view-leader-by-id.component';
import { LeadersFilterLeadersListComponent } from './pages/leader/view-Leaders/leaders-filter-leaders-list/leaders-filter-leaders-list.component';

/* View Users Component */
import { ViewUserListComponent } from './pages/leader/viewUsers/view-user-list/view-user-list.component';
import { ViewUserByIdComponent } from './pages/leader/viewUsers/view-user-by-id/view-user-by-id.component';
import { FilterViewUserComponent } from './pages/leader/viewUsers/filter-view-user/filter-view-user.component';
import { ViewFollowerByLeadComponent } from './component/follower/view-follower-by-lead/view-follower-by-lead.component';
import { SearchFilterComponent } from './pages/search/search-filter/search-filter.component';
import { ViewFollowingByUserComponent } from './component/following/view-following-by-user/view-following-by-user.component';
import { PostByFollowerComponent } from './component/Post/post-by-follower/post-by-follower.component';
import { FollowerPostByIdComponent } from './component/Post/follower-post-by-id/follower-post-by-id.component';
import { ManageHomeComponent } from './pages/manage/manage-home/manage-home.component';
import { ManageSkillComponent } from './pages/manage/manage-skill/manage-skill.component';
import { ManageIndustryComponent } from './pages/manage/manage-industry/manage-industry.component';
import { ManageLocationComponent } from './pages/manage/manage-location/manage-location.component';
import { MyPostsComponent } from './component/Post/my-posts/my-posts.component';
import { AddPostComponent } from './component/Post/add-post/add-post.component';
import { UpdatesComponent } from './pages/updates/updates/updates.component';
import { LeaderupdatesComponent } from './pages/updates/leaderupdates/leaderupdates.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ViewLeadersComponent } from './pages/user/view-leaders/view-leaders.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    HomeComponent,

    NavbarComponent,
    LeaderNavbarComponent,

    UserHomeComponent,
    UserBodyComponent,
    ViewProfileComponent,

    LeaderHomeComponent,
    LeaderBodyComponent,
    ViewProfileLeaderComponent,

    ViewPostComponent,
    PostByIdComponent,
    PostByLeaderComponent,
    ViewAllPostComponent,

    ViewFollowingsComponent,
    FollowByIdComponent,
    ViewfollowerComponent,
    FollowerByIdComponent,

    SearchhomeComponent,
    LeaderByIdComponent,
    FilterLeadersListComponent,
    LeadersListComponent,

    LeaderSearchHomeComponent,
    LeadersViewLeaderByIdComponent,
    LeadersFilterLeadersListComponent,
    LeadersViewListComponent,

    PostByIdLeadComponent,
    ViewUserListComponent,
    ViewUserByIdComponent,
    FilterViewUserComponent,
    ViewFollowerByLeadComponent,
    SearchFilterComponent,
    ViewFollowingByUserComponent,
    PostByFollowerComponent,
    FollowerPostByIdComponent,

    ManageHomeComponent,
     ManageSkillComponent,
     ManageIndustryComponent,
     ManageLocationComponent,
     MyPostsComponent,
     AddPostComponent,
     UpdatesComponent,
     LeaderupdatesComponent,
     ForgotPasswordComponent,
     ViewFollowingsComponent,
     ViewLeadersComponent,
     SearchFilterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }