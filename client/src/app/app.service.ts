import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class AppService {

  private url = 'http://localhost:3000';
  private socket;

  constructor() { }

  emitReadLine(message) {
    this.socket.emit('s-readfile', message);
  }

  listenReadLine(): Observable<any> {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('c-readfile', (line) => {
        observer.next(line);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
