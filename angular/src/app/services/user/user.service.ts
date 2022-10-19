import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/types/user-types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserInfo(): Promise<UserInfo> {
    return await (async () => ({name: 'Davi Souza', email: 'davi.s@lyncas.net'}))()
  }
}
