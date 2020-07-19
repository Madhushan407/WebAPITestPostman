import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  _id='';
  customerForm: FormGroup;
  Username = '';
  Email = '';
  FirstName = '';
  LastName = '';
  CreatedOn = null;
  IsActive = false;
 isLoadingResults = false;
 matcher = new MyErrorStateMatcher();



  constructor(private router: Router, private route: ActivatedRoute, 
    private api: ApiService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.getCustomerById(this.route.snapshot.params.id);
   this.customerForm = this.formBuilder.group({
    Username : [null, Validators.required],
    Email : [null, Validators.required],
    FirstName : [null, Validators.required],
    LastName : [null, Validators.required],
    CreatedOn : [null, Validators.required],
    IsActive : [null, Validators.required]
   
  });
  }

  getCustomerById(id: any) {
    this.api.getCustomerById(id).subscribe((data: any) => {
     // this._id = data.UserId;
     this._id = this._id;
      this.customerForm.setValue({
        Username: data.UserName,
        Email: data.Email,
        FirstName: data.FirstName,
        LastName: data.LastName,
        CreatedOn: data.CreatedOn,
        IsActive: data.IsActive
   
      });
    });
  }


  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateCustomers(this._id, this.customerForm.value)
    //this.api.updateCustomers(this.route.snapshot.params.id, this.customerForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          //const id = this.route.snapshot.params.id;
          this.isLoadingResults = false;
          this.router.navigate(['/customer-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  


  customersDetails() {
    //this.router.navigate(['/customer-details', this._id]);
    this.router.navigate(['/customer-details', this.route.snapshot.params.id]);
  }

  
}
