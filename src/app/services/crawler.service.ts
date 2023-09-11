import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CrawledData } from '../types/crawlData.interface';

@Injectable({
  providedIn: 'root'
})
export class CrawlerService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  // Method to crawl a URL with a specified depth
  crawlUrl(url: string, depth: number): Observable<any> {
    const requestData = { url, depth };
    return this.http.post<any>(`${this.baseUrl}`, requestData);
  }

  // Method to get all seed URLs
  getAllSeedUrls(): Observable<any[]> {
    return this.http.get<string[]>(`${this.baseUrl}/seed-urls`);
  }

  // Method to get all results of a seed URL
  getAllResultsOfSeedUrl(seedUrl: string): Observable<CrawledData[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fetch-by-parent?url=${seedUrl}`);
  }

  // Method to update a seed URL
  updateSeedUrl(seedUrl: string, updatedUrl: string): Observable<any> {
    const requestData = { url: updatedUrl };
    return this.http.put<any>(`${this.baseUrl}/seed-urls/${seedUrl}`, requestData);
  }
}
