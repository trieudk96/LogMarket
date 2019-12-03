import { TreeViewComponent } from '../tree-view/tree-view.component';
import { TreeItemComponent } from '../tree-item/tree-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../Login/Login.component'; 
import { TreeModule } from 'angular-tree-component';
import { TreeListComponent } from '../tree-list/tree-list.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      TreeItemComponent,
      TreeViewComponent,
      TreeListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      TreeModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
