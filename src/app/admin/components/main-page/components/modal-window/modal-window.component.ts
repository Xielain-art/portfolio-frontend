import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.sass'],
})
export class ModalWindowComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<ModalWindowComponent>) {}

  ngOnInit(): void {}
}
