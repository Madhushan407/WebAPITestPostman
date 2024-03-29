import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Customers } from '../cutomers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customers: Customers = { _id: null, Username: '', Email: '', FirstName: '', LastName: '', CreatedOn: null, IsActive: false};
  
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, 
    private api: ApiService, 
    private router: Router) { }

  ngOnInit() {
    this.getCustomerDetails(this.route.snapshot.params.id);
  }
  getCustomerDetails(id: number) {
    this.api.getCustomerById(id)
      .subscribe((data: any) => {
        this.customers = data;
        console.log(this.customers);
        this.isLoadingResults = false;
      });
  }


 // deleteCustomer(id: any) {
  deleteCustomer() {
    this.isLoadingResults = true;
    //this.api.deleteCustomers(id)
    this.api.deleteCustomers(this.route.snapshot.params.id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/customers']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  gotoEditcustomer() {
    //this.router.navigate(['/customer-details', this._id]);
    this.router.navigate(['/edit-customer', this.route.snapshot.params.id]);
  }
  

  gotoOrdersByCustomer() {
    //this.router.navigate(['/customer-details', this._id]);
    this.router.navigate(['/ordersbycustomer', this.route.snapshot.params.id]);
  }
}
