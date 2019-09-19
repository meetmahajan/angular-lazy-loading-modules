import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'item', loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
  },
  {
    path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
