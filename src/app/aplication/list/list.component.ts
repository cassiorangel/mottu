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
        next: (personagens: any) => {
          console.log(personagens)   
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
