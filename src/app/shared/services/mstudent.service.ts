import { Injectable } from '@angular/core';
import { BaseHttp } from './baseHttp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MstudentService extends BaseHttp {

  constructor(public http: HttpClient) {
    super(http, 'mstudents');
   }
}
