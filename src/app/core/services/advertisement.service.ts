import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private apiUrl = `${environment.apiUrl}advertisements/`;

  constructor(private http: HttpClient) {}

  getAdvertisements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAdvertisement(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  createAdvertisement(advertisement: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, advertisement);
  }

  updateAdvertisement(id: number, advertisement: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, advertisement);
  }

  deleteAdvertisement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
