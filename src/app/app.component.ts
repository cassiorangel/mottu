import { Component } from '@angular/core';
import { AplicationService } from './server/aplication.service';

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
    private aplicationService: AplicationService
  ) {}

  ngOnInit() {
    this.aplicationService.todos$.subscribe((res: any[]) => {
      this.favoCount = res.length; 
      console.log(res)
    })
  }

  activeFa(valor: boolean) {
    this.selecaoBt = valor;
    if(!valor) {
      alert('Chamou')
    }
  }

  
}
