import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7-drapdrop-virtualscrolling';
  Items = [];

  DropList = [ 'First', 'Second', 'Third', 'Fourth'];

  constructor(){
    this.initializeList();
  }

  initializeList(){
    this.Items = [];
    for (let index = 0; index < 10000; index++) {
      this.Items.push(index);
    }
  }

  onDrop(event){
    console.log(event);
    moveItemInArray(this.DropList, event.previousIndex, event.currentIndex);
  }

  
}
