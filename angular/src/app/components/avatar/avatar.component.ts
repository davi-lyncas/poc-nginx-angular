import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http/http-helper.service';
import { UserService } from 'src/app/services/user/user.service';

const EMPTY = '../../../assets/profile_200x200.png';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less'],
  imports: [CommonModule],
  standalone: true,
})
export class AvatarComponent implements OnInit {

  avatarSouce = EMPTY;

  constructor(private http: HttpHelperService, private user: UserService) { }

  ngOnInit() {
    this.avatarSouce = localStorage.getItem('ebox.avatar') ?? '';
    if (!this.avatarSouce) return;

    this.getAvatarUri()
      .then(avatar => this.avatarSouce = avatar)
      .catch(e => console.error(e));
  }

  async getAvatarUri(): Promise<string> {
    const usuarioId = this.user.userId;
    const avatar = await this.http.get<string>('getAvatarUri', { params: { usuarioId } });
    return avatar ? avatar : EMPTY;
  }
}
