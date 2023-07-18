import { NgModule } from '@angular/core';
import { NepaliDatepickerComponent } from './nepali-datepicker-angular.component';
import { ToNpPipe } from './pipes/to-np.pipe';

@NgModule({
  declarations: [ToNpPipe, NepaliDatepickerComponent],
  imports: [],
  exports: [NepaliDatepickerComponent],
})
export class NepaliDatepickerModule {}
