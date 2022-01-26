import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./services/products.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from './components/admin/admin.component';
import { ExcelComponent } from './components/excelupload/excel.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/nav/navbar.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ExcelComponent,
    ProductDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
