import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( effectsArr ),
    StoreDevtoolsModule.instrument({
      maxAge: 27,
      logOnly: environment.production
    }),
    UsuariosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
