import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ObesePercentageService } from './../../../services/obese-percentage.service';
import { MatTableDataSource } from '@angular/material/table';
import { ObesePercentage } from './../../../models/obese-percentage';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-obese-percentage',
  templateUrl: './obese-percentage.component.html',
  styleUrls: ['./obese-percentage.component.css']
})
export class ObesePercentageComponent implements OnInit {

  ELEMENT_DATA: ObesePercentage[] = [];

  displayedColumns: string[] = ['sexo', 'percentual', 'acoes'];
  dataSource = new MatTableDataSource<ObesePercentage>(this.ELEMENT_DATA);

  constructor(
    private service: ObesePercentageService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  get() {
    return this.service.get().subscribe(response => {
      this.ELEMENT_DATA = response['percentual_obesos'];
      this.dataSource = new MatTableDataSource<ObesePercentage>(response['percentual_obesos']);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
