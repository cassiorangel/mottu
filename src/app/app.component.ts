import { Component } from '@angular/core';
import { AplicationService } from './server/aplication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mottu';
  selecaoBt: boolean = true;
  favoCount = 0;

  constructor(
    private aplicationService: AplicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.aplicationService.todos$.subscribe((res: any[]) => {
      this.favoCount = res.length; 
      console.log(res)
    })
  }
  
}
