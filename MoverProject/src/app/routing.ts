import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //import home components
import { CustomerEntryFormComponent } from './customer-entry-form/customer-entry-form.component';
import { BillEntryFormComponent } from './bill-entry-form/bill-entry-form.component';
import { OrderEntryFormComponent } from './order-entry-form/order-entry-form.component';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'orderentry', 
    component: OrderEntryFormComponent 
  },
  { 
    path: 'billentry', 
    component: BillEntryFormComponent
  } ,
  { 
    path: 'customerentry', 
    component: CustomerEntryFormComponent
  },
  {
    path: '', 
    redirectTo: '/home', pathMatch: 'full'
  }
];

export const routing= RouterModule.forRoot(appRoutes);