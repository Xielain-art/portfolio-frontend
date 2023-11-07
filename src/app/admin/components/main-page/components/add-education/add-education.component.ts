import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/admin.service';
import { IEducation } from 'src/app/core/models/education.model';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.sass'],
})
export class AddEducationComponent implements OnInit {
  public addEducationForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _adminService: AdminService,
    private _snackbar: SnackbarService
  ) {}

  private _createExperienceForm(): void {
    this.addEducationForm = this._fb.group({
      title: ['', Validators.required],
      description: '',
      where: '',
      start: '',
      end: '',
    });
  }

  ngOnInit(): void {
    this._createExperienceForm();
  }

  public resetForm(): void {
    this.addEducationForm.reset();
  }

  public onFormSubmit(): void {
    const formData: IEducation = this.addEducationForm.value;
    this._adminService.addEducation(formData).subscribe({
      next: () => {
        this.addEducationForm.reset();
        this._snackbar.showMessage(`Education: ${formData.title} added`);
      },
      error: (err) => {
        console.log(err);
        this._snackbar.showMessage(`Error: ${err.message}`);
      },
    });
  }
}
