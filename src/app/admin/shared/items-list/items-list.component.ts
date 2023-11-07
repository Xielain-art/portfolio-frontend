import { Component, OnInit } from '@angular/core';
import { map, merge, mergeAll, toArray, zip } from 'rxjs';
import { HttpService } from 'src/app/portfolio/core/services/http.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.sass'],
})
export class ItemsListComponent implements OnInit {
  constructor(private _adminService: AdminService) {}

  ngOnInit(): void {}
}
