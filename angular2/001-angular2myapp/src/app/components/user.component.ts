import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>I'm from <strong>component.</strong></p>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}}, {{address.city}}, {{address.state}}</p>
  `,
})

export class UserComponent  { 
  name: string;
  email: string;
  address: object;

  constructor(){
    this.name = 'Pruthvi Raju';
    this.email = 'pruthvi@mail.com';
    this.address = {
    street: 'Road # 5',
    city: 'Hyderabad',
    state: 'TG'
    }
  }
}

interface address{
  street: string;
  city: string;
  state: string;
}