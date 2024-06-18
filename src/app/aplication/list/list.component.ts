import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AplicationService } from 'src/app/server/aplication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  resultado!: any;

  private destroy$ = new Subject<void>();
  personForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aplicationService: AplicationService
  ) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.aplicationService
      .getPersonagens()

      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any[]) => {
          res.map((obj: any) => obj.favorite=false);
          this.resultado = res;
          console.log(res, 'data')
        },
        error: (error) => {
          console.log('algo errado');
        },
      });
  }

  onSearch() {
    this.aplicationService
      .getPersonagens(this.personForm.value?.name)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.resultado = res;
          console.log(res);
        },
        error: (error) => {
          console.log('algo errado');
        },
      });
  }

  favorite(item: any) {
   
    if(item.favorite) {
      this.aplicationService.remove(item.id)
      return item.favorite = false;
    }

    //this.aplicationService.setState(item);
    this.aplicationService.create(item);
    return item.favorite = true;

    

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
