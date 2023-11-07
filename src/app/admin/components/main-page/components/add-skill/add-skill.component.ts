import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/admin.service';
import { FormService } from 'src/app/admin/services/form.service';
import { ISkill } from 'src/app/core/models/skill.model';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.sass'],
})
export class AddSkillComponent implements OnInit {
  skillForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _adminService: AdminService,
    private _snackBarService: SnackbarService,
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.skillForm = this._fb.group({
      title: ['', Validators.required],
      description: '',
    });
  }

  public resetForm(): void {
    this.skillForm.reset();
  }

  public onFormSubmit(): void {
    const formData: ISkill = this.skillForm.value;
    this._adminService.addSkill(formData).subscribe({
      next: () => {
        this._snackBarService.showMessage(`Skill: ${formData.title} added`);
      },
      error: (err) => {
        this._snackBarService.showMessage(`Error: ${err.message}`);
      },
    });
  }
}
