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

  ngOnInit(): void {
    this.getAvatarUri()
      .then(avatar => this.avatarSouce = avatar);
  }

  async getAvatarUri(): Promise<string> {
    const usuarioId = this.user.userId;
    const avatar = await this.http.get<string>('getAvatarUri', { params: { usuarioId } });
    return avatar ? avatar : EMPTY ;
  }
}
