import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss']
})
export class MsgErrorComponent {

  @Input() title: string = 'Parece que você ainda não tem favoritos';
  @Input() subtitle: string = 'Volte à página inicial e escolha os melhores para você';
  @Input() visao: boolean = false;

}
