import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { FormComponent } from './form/form.component';
import { ItemComponent } from './list-items/item/item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './shared/customer.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListItemsComponent,
    FormComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
