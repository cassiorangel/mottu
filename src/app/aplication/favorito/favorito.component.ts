import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Result } from 'src/app/interfaces/users';
import { AplicationService } from 'src/app/server/aplication.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss'],
})
export class FavoritoComponent {
  controlVisao: boolean = false;
  data: Result[] = [];
  private destroy$ = new Subject<void>();

  constructor(private aplicationService: AplicationService) {}

  ngOnInit() {
    this.aplicationService.todos$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Result[]) => {
        this.data = res;
        if (res.length === 0) {
          this.controlVisao = true;
        }
        console.log(res, 'papa');
      });
  }

  favorite(item: any) {
    if (item.favorite) {
      this.aplicationService.remove(item.id);
      return (item.favorite = false);
    }

    this.aplicationService.create(item);
    return (item.favorite = true);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
