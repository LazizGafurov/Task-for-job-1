import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Doston Nodirov',
      email: 'dosya@mail.com',
      message: 'Hello world-Dostonтп '
    });
    this.insert({
      name: 'John Stones',
      email: 'john@mail.com',
      message: 'Hello world - John'
    });
    this.insert({
      name: 'Gray Sanchez',
      email: 'gray@mail.com',
      message: 'Hello world - Mr_Gray'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
