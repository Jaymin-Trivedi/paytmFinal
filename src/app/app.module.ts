import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    NavigationComponent,
    ShoppingComponent,
    DisplayItemComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
