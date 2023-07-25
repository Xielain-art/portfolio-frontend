import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  sendEmailForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private _snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log();
  }

  private createForm(): void {
    this.sendEmailForm = this.fb.group({
      name: ['', Validators.required],
      senderEmail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public sendEmail(): void {
    const data = this.sendEmailForm.value;
    this.sendEmailForm.reset();
    this.http.sendEmail(data).subscribe({
      next: () => {
        this._snackBar.open('Email successfully sent', 'OK', {
          duration: 1000,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
