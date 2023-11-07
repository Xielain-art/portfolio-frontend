import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  public showMessage(message: string): void {
    this._snackBar.open(message, 'OK', { duration: 1000 });
  }
}
