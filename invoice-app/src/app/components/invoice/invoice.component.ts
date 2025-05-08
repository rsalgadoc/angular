import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemsComponent, TotalComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService) { }
  
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
  
  removeItem(id: number) {
    this.invoice = this.service.remove(id);
  }
}
