import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cyfrowe-dopelnienie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cyfrowe-dopelnienie.component.html',
  styleUrl: './cyfrowe-dopelnienie.component.css'
})
export class CyfroweDopelnienieComponent {
  liczba:number = 0;
  cyfry:string = "";

  cyfroweDopelnienie(liczba:number):void{
    this.cyfry = "";
    let dlugosc = liczba.toString().length;
    let liczbaString = liczba.toString();

    for(let i = 0; i<dlugosc;i++){
      this.cyfry += (this.wartoscBezwzgledna(parseInt(liczbaString.charAt(i)) - 9)).toString();
    }
  }

  wartoscBezwzgledna(x:number){
    if(x<0){
      x*=-1;
    }
    return x;
  }
}
