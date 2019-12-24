import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}}, {{address.city}}, {{address.pincode}}</p>
  
  <button (click)="toggleFamilyMembers()">{{!showFamilyMembers ? "Show" : "Hide"}} Family Members</button>
  <div *ngIf="showFamilyMembers">
  <p><strong>Family Members:</strong></p>
    <ul>
      <li *ngFor="let familyMember of familyMembers">
        {{familyMember}}
      </li>
    </ul>
  </div>
  `,
})

export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  familyMembers: string[];
  showFamilyMembers: boolean;

  constructor(){
    this.name = 'Pruthvi Raju';
    this.email = 'pruthvi@mail.com';
    this.address = {
    street: 'Road # 5',
    city: 'Hyderabad',
    pincode: 500049
    };
    this.familyMembers = ['Amma', 'Amulya', 'Avinash'];
    this.showFamilyMembers = false;
  }

  toggleFamilyMembers()
  {
    this.showFamilyMembers = this.showFamilyMembers ? false : true;
  }
}

interface address{
  street: string;
  city: string;
  pincode: number;
}