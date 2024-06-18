import { Component } from '@angular/core';
import { AplicationService } from 'src/app/server/aplication.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent {

  data: any = [];

  constructor(
    private aplicationService: AplicationService
  ) {}

  ngOnInit() {
    this.aplicationService.todos$.subscribe((res: any[]) => {
      this.data = res
      console.log(res, 'pq')
    })
  }

  favorite(item: any) {
    if (item.favorite) {
      this.aplicationService.remove(item.id);
      return (item.favorite = false);
    }

    this.aplicationService.create(item);
    return (item.favorite = true);
  }
}
