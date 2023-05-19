import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule  } from '@videogular/ngx-videogular/streaming';
import { VdoPlayerComponent } from './components/video/vdo-player/vdo-player.component';
import { HlsComponent } from './components/video/hls/hls.component';
import { VgDashDirective } from './directives/dash.directive';
import { VgHlsDirective } from './directives/hls.directive';

@NgModule({
  declarations: [AppComponent, SignUpComponent, LoginComponent, HomeComponent, VdoPlayerComponent, HlsComponent, VgDashDirective, VgHlsDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [VgDashDirective, VgHlsDirective]
})
export class AppModule {}
