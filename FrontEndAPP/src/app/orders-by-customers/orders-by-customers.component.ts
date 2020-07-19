import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Customers} from '../cutomers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders-by-customers',
  templateUrl: './orders-by-customers.component.html',
  styleUrls: ['./orders-by-customers.component.scss']
})
export class OrdersByCustomersComponent implements OnInit {



  displayedColumns: string[] = ['Username', 'ProductName', 'UnitPrice', 'SupplierName','OrderStatus','OrderTyoe','OrderedOn','ShippedOn'];
  data: Customers[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getOrdersByCustomers(this.route.snapshot.params.id)
    //this.api.getOrdersByCustomers('1')
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
