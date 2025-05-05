import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie'
import { dataSeries } from './dataSeries'
import { SerieListService } from './serie-list.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit 
{
  series: Array<Serie> = [];
  selectedSerie?: Serie;

  constructor(private serieService: SerieListService) { }
  
  getSerieList(): void {
    this.serieService.getSeriesList().subscribe(series => {
      this.series = series;
    });
  }

  getAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return total / this.series.length;
  }
  
  onSelected(serie: Serie): void {
    this.selectedSerie = serie;
  } 

  ngOnInit() {
    this.getSerieList();
  }
}
