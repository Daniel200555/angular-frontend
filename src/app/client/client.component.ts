import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAll();
  }

  logout() {
    this.router.navigate(['login']);
  }

  delete(id: number) {
    console.log(id);
    this.clientService.deleteClient(id).subscribe( data => {
      console.log(data);
      this.getAll();
    })
  }

  getAll() {
    this.clientService.getClientList().subscribe(data => {
      console.log(data);
      this.clients = data;
    })
  }

}
