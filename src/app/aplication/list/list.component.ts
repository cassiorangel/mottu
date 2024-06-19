import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Result, Users } from 'src/app/interfaces/users';
import { AplicationService } from 'src/app/server/aplication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  resultado!: any;
  controlVisao: boolean = true;

  msg: string = 'Nada foi encontrado';
  texto: string = 'Tente realizar uma nova busca.';

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
        next: (res: Result[]) => {
          res.map((obj: Result) => (obj.favorite = false));
          this.resultado = res;
          console.log(res, 'data');
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
        next: (res: Result[]) => {
          this.controlVisao = true;
          this.resultado = res;
          console.log(res);
        },
        error: (error) => {
          this.controlVisao = false;
          console.log('algo errado busca');
        },
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
