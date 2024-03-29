import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  styleUrls: ['layout.component.scss'],
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {
  constructor(private _authService: AuthService) { }
  ngOnInit() {}

  logout() {
    this._authService.logout();
  }
 
}
