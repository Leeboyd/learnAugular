import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MyFormRoutingModule } from './myform-routing.module';

import { MyFormComponent } from './myform.component'
import { SimpleFormComponent } from './Components/simple-form/simple-form.component';
// import { ReviewingComponent } from './Components/reviews/reviews.component';

@NgModule({
  imports: [
    CommonModule,
    
    // MyFormRoutingModule
  ],
  declarations: [
    MyFormComponent,
    SimpleFormComponent,
    // ReviewingComponent
  ]
})
export class MyformModule {}
