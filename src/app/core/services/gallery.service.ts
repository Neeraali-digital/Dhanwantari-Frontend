import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = `${environment.apiUrl}galleryimages/`;

  constructor(private http: HttpClient) {}

  getGalleryImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getGalleryImage(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  createGalleryImage(image: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, image);
  }

  updateGalleryImage(id: number, image: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, image);
  }

  deleteGalleryImage(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
