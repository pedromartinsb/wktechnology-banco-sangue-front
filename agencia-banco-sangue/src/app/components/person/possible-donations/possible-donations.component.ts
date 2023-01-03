import { MatPaginator } from '@angular/material/paginator';
import { PossibleDonationsService } from './../../../services/possible-donations.service';
import { MatTableDataSource } from '@angular/material/table';
import { PossibleDonation } from './../../../models/possible-donation';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-possible-donations',
  templateUrl: './possible-donations.component.html',
  styleUrls: ['./possible-donations.component.css']
})
export class PossibleDonationsComponent implements OnInit {

  ELEMENT_DATA: PossibleDonation[] = [];

  displayedColumns: string[] = ['tipo_sanguineo', 'quantidade', 'acoes'];
  dataSource = new MatTableDataSource<PossibleDonation>(this.ELEMENT_DATA);

  constructor(
    private service: PossibleDonationsService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  get() {
    return this.service.get().subscribe(response => {
      this.ELEMENT_DATA = response['possiveis_candidatos'];
      this.dataSource = new MatTableDataSource<PossibleDonation>(response['possiveis_candidatos']);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
