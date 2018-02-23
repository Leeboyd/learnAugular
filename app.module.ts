// ng API
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// My Module
import { AppRoutingModule } from './app-routing.module'
// import { AppMaterialModule } from './app-material.module';
import { SharedModule } from './Modules/shared.module'
// import { MyformModule } from './Modules/myform/myform.module'


// My Component
import { AppComponent } from './app.component';
import { WidgetsComponent } from './Components/widgets/widgets.component';
import { WidgetsListComponent } from './Components/widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './Components/widgets/widget-details/widget-details.component';
import { WidgetSearchComponent } from './Components/widgets/widget-search/widget-search.component';

import { ReviewsComponent } from './Components/reviews/reviews.component';
import { ReviewsCarComponent } from './Components/reviews/reviews-car.component';

import { StatusComponent } from './Components/status/status.component';

// Directive 

 
// Service 
import { WidgetsService } from './Services/services';
import { HomeComponent } from './Components/home/home.component';


@NgModule({ 
  declarations: [ 
    AppComponent,
    WidgetsComponent,
    ReviewsComponent,
    ReviewsCarComponent,
    HomeComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    WidgetSearchComponent,
    StatusComponent
  ], 
  imports: [
    // Ng
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpModule,
    // AppMaterialModule,
    SharedModule.forRoot()
  ], 
  providers: [
    WidgetsService
  ], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 