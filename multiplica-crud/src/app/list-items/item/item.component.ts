import { Input, Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public item: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onDelete($key) {
    if (confirm('Esta seguro de eliminar este registro?')) {
      this.customerService.delete($key);
    }
  }

}
