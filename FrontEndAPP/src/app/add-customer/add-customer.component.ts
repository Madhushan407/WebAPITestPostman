import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})

export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;
  Username = '';
  Email = '';
  FirstName = '';
  LastName = '';
  CreatedOn = null;
  IsActive = false;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();



  constructor(private router: Router, 
    private api: ApiService, 
    private formBuilder: FormBuilder) {
     

     }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addCustomer(this.customerForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/customer-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
