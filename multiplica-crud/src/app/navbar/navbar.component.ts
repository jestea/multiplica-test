import { CustomerService } from '../shared/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}
