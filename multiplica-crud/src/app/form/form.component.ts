import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private customerService: CustomerService) { }

  submitted = false;
  formControls = this.customerService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      if (this.customerService.form.get('$key').value === null) {
        this.customerService.insert(this.customerService.form.value);
      } else {
        this.customerService.update(this.customerService.form.value);
      }
      this.customerService.form.reset();
      this.submitted = false;
    }
  }
  onCancel() {
    this.customerService.form.reset();
  }

}
