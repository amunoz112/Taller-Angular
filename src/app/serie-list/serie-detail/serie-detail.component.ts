import { Component, Input } from '@angular/core';
import { Serie } from '../Serie';
@Component({
  selector: 'app-serie-detail',
  standalone: false,
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent {
  @Input() serieDetail!: Serie;

}
