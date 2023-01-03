import { FindCandidatesService } from './../../../services/find-candidates.service';
import { Candidate } from './../../../models/candidate';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-find-candidates',
  templateUrl: './find-candidates.component.html',
  styleUrls: ['./find-candidates.component.css']
})
export class FindCandidatesComponent implements OnInit {

  ELEMENT_DATA: Candidate[] = [];

  displayedColumns: string[] = ['estado', 'numero', 'acoes'];
  dataSource = new MatTableDataSource<Candidate>(this.ELEMENT_DATA);

  constructor(
    private service: FindCandidatesService
  ) { }

  ngOnInit(): void {
    this.find();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  find() {
    return this.service.find().subscribe(response => {
      console.log(response);

      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Candidate>(response);
      this.dataSource.paginator = this.paginator;
    });
  }

}
