import { SocketIoService } from './socket-io/socket-io.service';
import { AppService } from './app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public readlineSIO;
  public content: string[] = [];

  constructor(
    private socketIoService: SocketIoService
  ) { }

  ngOnInit() {
    this.socketIoService.listenSocket('c-readline').subscribe((line) => {
      console.log(line);
      if (this.content.length > 18) {
        this.content.shift();
      }
      this.content.push(line);
    });
  }

  public readline(status: boolean): void {
    this.socketIoService.emitSocket('s-readline', status);
  }
  ngOnDestroy() {
    // this.socketListen.unsubscribe();
  }
}
