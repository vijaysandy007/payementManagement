import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';
import { CardtypePipe } from './Pipes/cardtype.pipe';
import { CardspacingDirective } from './Directivies/cardspacing.directive';
import { CardNamePipe } from './Pipes/card-name.pipe';
import { CardIdentityPipe } from './Pipes/card-identity.pipe';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { FormingComponent } from './forming/forming.component';
import { ApipracticeComponent } from './apipractice/apipractice.component';

import {HttpClientModule} from '@angular/common/http';
import { CoronaapiComponent } from './coronaapi/coronaapi.component';
import { CameraComponent } from './camera/camera.component'


@NgModule({
  declarations: [
    AppComponent,
    PaymentcomponentComponent,
    ListpaymentComponent,
    SearchPipe,
    CardtypePipe,
    CardspacingDirective,
    CardNamePipe,
    CardIdentityPipe,
    ReactiveComponent,
    FormingComponent,
    ApipracticeComponent,
    CoronaapiComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
