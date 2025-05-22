import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

@Input () cta : string = '';
@Output () buttonisClicked = new EventEmitter<any>();
@Output () buttonisVisible = new EventEmitter<any>();
ngOnInit(){
  console.log("sono un bottone")
}
emitClick(){
  console.log('sto cliccando mio figlio' + this.cta)
  this.buttonisClicked.emit()
}
}
