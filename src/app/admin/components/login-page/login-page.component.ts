import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/core/models/login-response.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _adminService: AdminService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public submitForm(): void {
    const formData: ILoginResponse = this.loginForm.value;
    this._adminService.login(formData).subscribe({
      next: () => {},
      error: (err) => {
        console.log(err);
      },
    });
  }

  public redirectToMainPage(): void {
    this._router.navigate(['']);
  }
}
