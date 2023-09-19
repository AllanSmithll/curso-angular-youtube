import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesComponent,
    ParentDataComponent,
    EventosComponent,
    IfRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
