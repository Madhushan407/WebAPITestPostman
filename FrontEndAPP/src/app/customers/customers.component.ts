import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Customers} from '../cutomers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  displayedColumns: string[] = ['Username', 'Email', 'FirstName', 'LastName','CreatedOn','IsActive'];
  data: Customers[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCustomers()
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
