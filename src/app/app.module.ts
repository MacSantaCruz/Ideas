import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbInputModule, NbCardModule, NbToastrModule, NbWindowModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http'
import { TodoService } from './services/todo.service';
import { DeckService } from './services/deck.service';
import { PlayerService } from './services/player.service';
import { GameService } from './services/game.service';
import { InsertFormComponent } from './shared/insert-form/insert-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbIconModule,               
    NbSidebarModule.forRoot(),  
    NbMenuModule.forRoot(), 
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbWindowModule.forRoot()
  ],
  providers: [
    TodoService,
    DeckService,
    PlayerService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
