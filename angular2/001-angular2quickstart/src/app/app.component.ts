import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}}, {{address.city}}, {{address.state}}</p>
  `,
})
export class AppComponent  { 
  name = 'Pruthvi Raju';
  email = 'pruthvi@mail.com';
  address = {
    street: 'Road # 5',
    city: 'Hyderabad',
    state: 'TG'
  }
}