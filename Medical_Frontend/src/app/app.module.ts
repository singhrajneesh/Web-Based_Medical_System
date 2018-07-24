import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { OldUserComponent } from './components/old-user/old-user.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { Router } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MessageService } from './services/message.service';

const appRoutes:Routes=[

  { path:'home',component: HomeComponent},
  { path:'newuser',component: NewUserComponent},
  { path:'olduser',component: OldUserComponent},
  { path:'userdetails',component: UserdetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    OldUserComponent,
    UserdetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
