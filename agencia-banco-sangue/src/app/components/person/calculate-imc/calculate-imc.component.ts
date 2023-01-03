import { MatPaginator } from '@angular/material/paginator';
import { CalculateImcService } from './../../../services/calculate-imc.service';
import { MatTableDataSource } from '@angular/material/table';
import { IMC } from './../../../models/imc';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculate-imc',
  templateUrl: './calculate-imc.component.html',
  styleUrls: ['./calculate-imc.component.css']
})
export class CalculateImcComponent implements OnInit {

  ELEMENT_DATA: IMC[] = [];

  displayedColumns: string[] = ['imc', 'menorIntervalo', 'maiorIntervalo', 'acoes'];
  dataSource = new MatTableDataSource<IMC>(this.ELEMENT_DATA);

  constructor(
    private service: CalculateImcService
  ) { }

  ngOnInit(): void {
    this.calculate();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  calculate() {
    return this.service.calculate().subscribe(response => {
      this.ELEMENT_DATA = response['imcs'];
      this.dataSource = new MatTableDataSource<IMC>(response['imcs']);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
