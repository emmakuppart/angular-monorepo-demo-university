import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'demo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() rows: any[];
  @Input() columns: string[];
  @Input() rowTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {}
}
