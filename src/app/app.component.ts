import { Component } from '@angular/core';
import { AplicationService } from './server/aplication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mottu';

  favoCount = 0;

  constructor(
    private aplicationService: AplicationService
  ) {}

  ngOnInit() {
    this.aplicationService.todos$.subscribe((res: any[]) => {
      this.favoCount = res.length; 
      console.log(res.length, 'cont')
      console.log(res)
    })
  }
}
