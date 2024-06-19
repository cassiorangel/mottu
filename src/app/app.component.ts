import { Component } from '@angular/core';
import { AplicationService } from './server/aplication.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mottu';
  selecaoBt: boolean = true;
  favoCount = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private aplicationService: AplicationService
  ) {}

  ngOnInit() {
    this.aplicationService.todos$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any[]) => {
        this.favoCount = res.length;
        console.log(res);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
