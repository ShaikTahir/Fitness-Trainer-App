// client.service.ts
// This is a sample service to manage client data (you'll need to implement data fetching/storing logic)

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: any[] = []; // Sample clients array (you'll populate this with actual data)

  constructor() {
    // Initialize clients (might fetch from API or local storage)
    this.clients = [
      {
        clientId: '1',
        firstName: 'John',
        lastName: 'Doe',
        location: 'New York',
        appointments: [
          { id: 'a1', date: '2023-12-19T11:45' },
          { id: 'a2', date: '2023-01-20T10:30' }
        ]
      },
      {
        clientId: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        location: 'Los Angeles',
        appointments: [
          { id: 'a3', date:'2023-02-05T09:00' }
        ]
      }
    ]  
  }

  getClients(): any[] {
    return this.clients;
  }

  updateClient(client: any): void {
    // Logic to update client details (if needed)
  }
  
  // Implement more methods for adding, deleting clients as needed
}
