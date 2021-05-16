import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'demo-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css']
})
export class RegisterButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}
}
