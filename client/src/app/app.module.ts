import { SharedModule } from './appGlobal/shared.module';
import { SocketIoService } from './socket-io/socket-io.service';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgZorroAntdModule.forRoot()
  ],
  providers: [AppService, SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
