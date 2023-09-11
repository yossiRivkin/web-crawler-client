import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrawlerService } from 'src/app/services/crawler.service';

@Component({
  selector: 'app-seed-urls-list',
  templateUrl: './seed-urls-list.component.html',
  styleUrls: ['./seed-urls-list.component.scss']
})
export class SeedUrlsListComponent implements OnInit {
  constructor(private crawlerService: CrawlerService, private router: Router) { }
  // Define the table column headings with their keys and display names
  headings = [
    {
      'key': 'url',
      'value': 'URL'
    },
    {
      'key': 'host',
      'value': 'host'
    },
    {
      'key': 'actions',
      'value': 'Actions'
    },
  ];

  // Initialize an empty array to store seed URLs
  seedUrls: string[] = [];

  ngOnInit(): void {
    // Fetch all seed URLs from the CrawlerService when the component initializes
    this.crawlerService.getAllSeedUrls().subscribe(result => {
      this.seedUrls = result;
    });
  }


  selectAllCheckbox(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
    }
  }


  getRowDetail(url: string) {

        // Redirect to the 'url-results/:urlParam' path with the selected URL as a parameter
        this.router.navigate(['url-results', encodeURIComponent(url)]);

  }
}
