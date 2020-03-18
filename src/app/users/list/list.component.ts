import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { map } from 'rxjs/operators';
import { IUsersDataResponse } from 'src/app/interfaces/iusers-data-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  users$;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers().pipe(map((user: IUsersDataResponse) => user.data));
  }

}
