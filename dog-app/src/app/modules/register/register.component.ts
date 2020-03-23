import { Component, OnInit } from '@angular/core';
import { OwnerService } from '@core/api/owner.service';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id : number;
  ownerForm: FormGroup;
  firstName = "";
  lastName = "";
  email = "";
  password = "";
  address: "";
  postalCode: "";
  isLoadingResults = false;

  constructor(private ownerService: OwnerService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.ownerForm = this.formBuilder.group({
      firstName :  [null, Validators.required],
      lastName : [null, Validators.required],
      email : [null, new EmailValidator, Validators.required],
      password : [null, Validators.required],
      address : [null, Validators.required],
      postalCode : [null, Validators.required]
    });
  }

  onSubmit() {
    this.isLoadingResults = true;
    this.ownerService.createOwner(this.ownerForm.value).subscribe ((res: any) => {
      this.router.navigate(['']);
    }, (err:any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
