import { Component, OnInit } from '@angular/core';
import { CurriculumService } from './curriculum.service';

@Component({
  selector: 'demo-curriculum-table',
  templateUrl: './curriculum-table.component.html',
  styleUrls: ['./curriculum-table.component.css']
})
export class CurriculumTableComponent implements OnInit {
  readonly columns = ['id', 'name', 'duration', 'institute'];

  curriculums = this.service.getCurriculums();

  constructor(private service: CurriculumService) { }

  ngOnInit(): void {}
}
