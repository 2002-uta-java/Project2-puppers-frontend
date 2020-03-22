import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  showLoginError: boolean = false;
  loginForm: FormGroup;
  email = new FormControl('', [Validators.email, Validators.required])
  password = new FormControl('', [Validators.required])

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard'])
    }
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  onSubmit() {
    this.showLoginError = false;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
      if(data) {
        this.router.navigate(['/dashboard'])
      } else {
        this.showLoginError = true;
      }
    });
  }
}
