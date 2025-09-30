import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class CheckupPackageService {
  private apiUrl = `${environment.apiUrl}checkuppackages/`;

  constructor(private http: HttpClient) {}

  getCheckupPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createCheckupPackage(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteCheckupPackage(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
