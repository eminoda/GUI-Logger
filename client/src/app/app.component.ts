import { AppService } from './app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  inputValue: string[] = [''];
  socketListen;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.socketListen = this.appService.listenReadLine().subscribe((line) => {
      console.log(line);
      this.inputValue.push(line);
    });
    this.appService.emitReadLine(123);
  }
  ngOnDestroy() {
    this.socketListen.unsubscribe();
  }
}
