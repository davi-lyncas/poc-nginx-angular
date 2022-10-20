import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { HttpHelperService } from 'src/app/services/http/http-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: true
})
export class InicioComponent implements OnInit {

  user = { nome: '' }
  posts: Array<{
    authorName: string,
    authorAvatarUrl: string,
    title: string,
    slug: string,
    storageImageUrl: string,
    categoryName: string
  }> = []

  constructor(private http: HttpHelperService, private auth: AuthenticationService) { }

  ngOnInit(): void { }

  testeApi() {
    this.auth.signInAnotherCustomer('dev@eboxdigital.com.br', 0)
      .then(r => console.log(r))
        .catch(e => console.log(e))

    this.http.get("ping")
      .then(r => console.log(r))
        .catch(e => console.log(e))
  }

}
