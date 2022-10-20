import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less'],
  imports: [CommonModule],
  standalone: true,
})
export class AvatarComponent implements OnInit {

  avatarSouce!: string;

  constructor() { }

  ngOnInit(): void {
    //load avatar here!
    this.avatarSouce = '../../../assets/profile_200x200.png';
  }

}
