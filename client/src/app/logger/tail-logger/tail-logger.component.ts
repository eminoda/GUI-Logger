import { SocketIoService } from '../../socket-io/socket-io.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tail-logger',
  templateUrl: './tail-logger.component.html',
  styleUrls: ['./tail-logger.component.scss']
})
export class TailLoggerComponent implements OnInit, OnDestroy {

  public readlineSIO;
  public content: string[] = [];
  private socketListen;

  constructor(
    private socketIoService: SocketIoService
  ) { }

  ngOnInit() {
    this.socketListen = this.socketIoService.listenSocket('c-readline').subscribe((line) => {
      console.log(line);
      if (this.content.length > 18) {
        this.content.shift();
      }
      this.content.push(line);
    });
  }

  public readline(): void {
    this.socketIoService.emitSocket('s-readline');
  }

  public stopRead(): void {
    this.socketIoService.emitSocket('s-stopRead');
  }
  ngOnDestroy() {
    this.socketListen.unsubscribe();
  }
}
