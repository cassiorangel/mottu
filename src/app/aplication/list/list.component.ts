import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AplicationService } from 'src/app/server/aplication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  resultado!: any;
  private destroy$ = new Subject<void>();
  personForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aplicationService: AplicationService) {}

  ngOnInit() {

    this.personForm = this.fb.group({
      user: ['', Validators.required]
    })

    this.aplicationService.getPersonagens()
      
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.resultado = res;
          console.log(res)   
        },
        error: (error) => {
          console.log('algo errado');
        }
      });
  }

  onSearch() {
    this.personForm.value
    console.log(this.personForm.value)
  }

  favorite(item: string) {
    console.log(item)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
