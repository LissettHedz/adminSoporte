import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArbolQaComponent } from './pages/arbol-qa/arbol-qa.component';
import { DropdownSucursalesComponent } from './pages/arbol-qa/dropdown-sucursales/dropdown-sucursales.component';
import { FormArbolQaComponent } from './pages/arbol-qa/form-arbol-qa/form-arbol-qa.component';
import { ListArbolQaComponent } from './pages/arbol-qa/list-arbol-qa/list-arbol-qa.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideBarComponent,
    HeaderComponent,
    DashboardComponent,
    ArbolQaComponent,
    DropdownSucursalesComponent,
    FormArbolQaComponent,
    ListArbolQaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
