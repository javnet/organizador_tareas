import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AccountComponent } from './components/account/account.component';
import { GeneralComponent } from './components/general/general.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ProductivityComponent } from './components/productivity/productivity.component';
import { RemembersComponent } from './components/remembers/remembers.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HelpComponent } from './components/help/help.component';
import { InformationComponent } from './components/information/information.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [PerfilComponent, AccountComponent, GeneralComponent, ThemeComponent, ProductivityComponent, RemembersComponent, NotificationsComponent, HelpComponent, InformationComponent, NewsComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
