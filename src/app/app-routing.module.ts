import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule)
  },
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }