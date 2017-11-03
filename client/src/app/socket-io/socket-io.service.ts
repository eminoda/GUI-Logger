import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { staticConst } from '../appGlobal/staticConst';

@Injectable()
export class SocketIoService {

  private sio;

  constructor() {
    this.sio = io(staticConst.SYSTEM.SOCKETIO_URL);
  }

  listenSocket(socketName: string): Observable<any> {
    return Observable.create((observer) => {
      this.sio.on(socketName, socketMessage => {
        observer.next(socketMessage);
      });
      return () => console.log('over');
    });
  }

  emitSocket(socketName: string) {
    this.sio.emit(socketName);
  }

}
