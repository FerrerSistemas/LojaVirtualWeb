import { StorageService } from './../service/storage.service';
import { ClienteService } from './../service/domain/cliente.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CategoriaService } from 'src/service/domain/categoria.service';
import { AuthService } from 'src/service/auth.service';
import { StorageService } from 'src/service/storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,    
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CategoriaService,
    AuthService,
    StorageService,
    ClienteService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
