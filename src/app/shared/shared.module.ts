import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    //dodao
    RouterModule,
    FormsModule

  ],
  //dodao ovo kako bi mogao da pozovem u app
  exports:[
    SidebarComponent,
    TopbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }