import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router) {}

  createUser() {
    this.clientService.createClient(this.client).subscribe( data => {
      console.log(data);
      this.goToClients();
    }, error => console.log(error));
  }

  goToClients() {
    this.router.navigate(['client']);
  }

  register() {
    this.createUser();
  }

}
