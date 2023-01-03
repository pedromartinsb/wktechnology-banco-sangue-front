import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AgeAverage } from './../../../models/age-average';
import { AgeAverageService } from './../../../services/age-average.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-age-average',
  templateUrl: './age-average.component.html',
  styleUrls: ['./age-average.component.css']
})
export class AgeAverageComponent implements OnInit {

  ELEMENT_DATA: AgeAverage[] = [];

  displayedColumns: string[] = ['tipo_sanguineo', 'media', 'acoes'];
  dataSource = new MatTableDataSource<AgeAverage>(this.ELEMENT_DATA);

  constructor(
    private service: AgeAverageService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  get() {
    return this.service.get().subscribe(response => {
      this.ELEMENT_DATA = response['tipo_sanguineo_idade_media'];
      this.dataSource = new MatTableDataSource<AgeAverage>(response['tipo_sanguineo_idade_media']);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
