import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleListComponent } from './samplelist/samplelist.component';
import { SampledetailComponent } from './sampledetail/sampledetail.component';


const routes: Routes = [{
  path:'',
  redirectTo:'samplelist',
  pathMatch:'full'},

  {path:'samplelist',component:SampleListComponent},
  {path:'sampledetail',component:SampledetailComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
