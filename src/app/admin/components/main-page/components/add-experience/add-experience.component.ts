import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/admin.service';
import { IExperience } from 'src/app/core/models/experience.model';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.sass'],
})
export class AddExperienceComponent implements OnInit {
  public addExperienceForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _adminService: AdminService,
    private _snackbar: SnackbarService
  ) {}

  private _createExperienceForm(): void {
    this.addExperienceForm = this._fb.group({
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
    this.addExperienceForm.reset();
  }

  public onFormSubmit(): void {
    const formData: IExperience = this.addExperienceForm.value;
    this._adminService.addExperience(formData).subscribe({
      next: () => {
        this.addExperienceForm.reset();
        this._snackbar.showMessage(`Skill: ${formData.title} added`);
      },
      error: (err) => {
        console.log(err);
        this._snackbar.showMessage(`Error: ${err.message}`);
      },
    });
  }
}
