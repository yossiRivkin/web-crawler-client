import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrawlerService } from 'src/app/services/crawler.service';
import { CrawledData } from 'src/app/types/crawlData.interface';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private crawlerService: CrawlerService) { }
  crawledUrls: CrawledData[] = [];
  seedUrl = '';
  ngOnInit() {
    this
    this.route.params.subscribe(params => {
      const urlParam = params['urlParam'];
      if (urlParam) {
        this.seedUrl = decodeURIComponent(urlParam);

        this.crawlerService.getAllResultsOfSeedUrl(this.seedUrl).subscribe(result => {
          console.log(result);
          
          this.crawledUrls = result})
      }
    });
  }
  
}
