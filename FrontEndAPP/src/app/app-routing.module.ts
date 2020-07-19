import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent} from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { OrdersByCustomersComponent } from './orders-by-customers/orders-by-customers.component';
const routes: Routes = [
  {
    path:'customers',
    component:CustomersComponent,
    data: { title: 'List of Customers'}
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailsComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent,
    data: { title: 'Add Customer' }
  },
  {
    path: 'edit-customer/:id',
    component: EditCustomerComponent,
    data: { title: 'Edit Customer' }
  },
  
  {
    path: 'ordersbycustomer/:id',
    component: OrdersByCustomersComponent,
    data: { title: 'Active Orders By Customer' }
  },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
