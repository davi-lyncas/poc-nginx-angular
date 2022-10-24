import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Serializer extends DefaultUrlSerializer {

  override parse(url: string): UrlTree {
    const path = url.toLowerCase();
    return super.parse(path);
  }
}
