import { UserSettingComponent } from './user-setting/user-setting.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { settingRoutes } from './setting.router';
import { SettingComponent } from './setting.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SettingComponent,
    SystemSettingComponent,
    UserSettingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoutes)
  ]
})
export class SettingModule { }
