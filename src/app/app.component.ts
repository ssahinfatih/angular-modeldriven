import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template:`
    
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name"><br>
      <input type="text" placeholder="Surname" formControlName="surname"><br>
      <input type="text" placeholder="E-mail" formControlName="email"><br>
      <input type="text" placeholder="Tel" formControlName="tel"><br>
      <div formGroupName="address">
        <input type="text" placeholder="Country" formControlName="country"><br>
        <input type="text" placeholder="City" formControlName="city"><br>
        <input type="text" placeholder="Address" formControlName="city"><br>
      </div><br>
      <button>Send</button>
    </form>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  frm:FormGroup;
  constructor(private formBuilder: FormBuilder){
     this.frm = formBuilder.group({
      name:["",Validators.required],//validataor requried ile zorunluluk koyuyoruz
      surname:[""],
      email:[""],
      tel:[""],
      address:formBuilder.group({
        country:[""],
        city:[""],
        address:[""]
      })
     })
    
     this.frm.valueChanges.subscribe({//formda değişiklik oldukça çalışır
      next:data => {
        console.log(data);
      }
     })
  }
 
  onSubmit(){
    console.log(this.frm.value)
  }

  
}
