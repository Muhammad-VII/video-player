import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { VdoPlayerComponent } from './components/video/vdo-player/vdo-player.component';
import { HlsComponent } from './components/video/hls/hls.component';

const routes: Routes = [
  // { path: 'vdo', component: VdoPlayerComponent },
  { path: 'hls', component: HlsComponent },
  { path: '', redirectTo: 'hls', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
