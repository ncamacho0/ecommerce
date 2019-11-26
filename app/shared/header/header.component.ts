import { Component } from '@angular/core';

interface Nav {
  link?: string;
  name: string;
  exact?: boolean;
  subMenu?: Nav[];
}


@Component({
  selector: 'app-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      name: 'Products T',
      subMenu: [
        {
          link: '/dashboard/products',
          name: 'Products',
          exact: true,
        },
        {
          link: '/dashboard/newProduct',
          name: 'New Product',
          exact: true
        }
      ]
    },
    {
      link: '/dashboard/orders',
      name: 'Orders',
      exact: true
    }
  ];

}
