import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }

  getDetails()
  {
    return this.http.get<any>(`${environment.baseUrl}/Datas`)
  }
 
}
