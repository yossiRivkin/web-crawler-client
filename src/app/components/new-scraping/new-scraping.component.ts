// src/app/new-screaping.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrawlerService } from 'src/app/services/crawler.service';
import { isValidUrl } from 'src/app/validators/valid-url.validator';

@Component({
  selector: 'new-scraping',
  templateUrl: './new-scraping.component.html',
  styleUrls: ['./new-scraping.component.scss']
})
export class NewScreapingComponent implements OnInit {
  crawlerForm!: FormGroup;
  crawledUrls: string[] = [];
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private crawlerService: CrawlerService,
    private router: Router
  ) {}

  ngOnInit() {
    // Initialize the reactive form with validation
    this.crawlerForm = this.formBuilder.group({
      url: ['', [Validators.required, isValidUrl]],
      depth: [1, [Validators.required, Validators.min(1)]]
    });
  }

crawlUrl() {
  console.log('this.crawlerForm.valid', this.crawlerForm.valid);
  
  if (this.crawlerForm.valid) {
    this.loading = true;
    const url = this.crawlerForm.get('url')?.value;
    const depth = this.crawlerForm.get('depth')?.value;

    // Call the service to make the server request
    this.crawlerService.crawlUrl(url, depth).subscribe({
      next: (response) => {
        // Handle the response here, e.g., update crawledUrls
        this.crawledUrls = response.urls;
        this.router.navigate(['url-results', encodeURIComponent(url)]);
      },
      error: (error) => {
        // Handle errors
        console.error('Error:', error);
      },
      complete: () => {
        this.loading = false; // Set loading to false when the request is complete
      }
    });
  }
}
}
