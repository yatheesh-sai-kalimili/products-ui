import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent  } from "./components/admin/admin.component";
import { ExcelComponent  } from "./components/excelupload/excel.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";


const routes: Routes = [{
  path: 'admin',
  component: AdminComponent
},
{
  path:'admin/view/:id',
  component: ProductDetailComponent,
},
{
  path: '',
  component: AdminComponent
},
{
  path:'form',
  component: ExcelComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
