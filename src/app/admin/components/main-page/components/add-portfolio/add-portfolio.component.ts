import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';
import { IPortfolio } from 'src/app/core/models/portfolio.model';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.sass'],
})
export class AddPortfolioComponent implements OnInit {
  addPortfolioForm!: FormGroup;
  private portfolioList: IPortfolio[] = [];
  constructor(
    private _fb: FormBuilder,
    private _adminService: AdminService,
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _matDialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {
    this._createAddPortfolioForm();
  }

  private _createAddPortfolioForm(): void {
    this.addPortfolioForm = this._fb.group({
      title: ['', Validators.required],
      description: '',
      date: '',
      stack: ['', Validators.required],
      file: ['', Validators.required],
    });
  }

  public onFileChange(event: Event): void {
    const currentInput = event.currentTarget as HTMLInputElement;
    if (currentInput.files?.length) {
      const file = currentInput.files[0];
      this.addPortfolioForm.patchValue({
        file,
      });
    }
  }

  public onFormSubmit(): void {
    const formData: IPortfolio = this.addPortfolioForm.value;
    console.log(formData);
    this._adminService.addPortfolio(formData).subscribe({
      next: () => {
        this._snackbarService.showMessage(`Portfolio: ${formData.title} added`);
        this.addPortfolioForm.reset();
      },
      error: (err) => {
        console.log(err);
        this._snackbarService.showMessage(`${err}`);
      },
    });
  }

  public redirectToPortfolioItemsList(): void {
    this._router.navigateByUrl('admin/portfolio-list');
  }

  public resetForm(): void {}
}
