import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoComponent } from './core/components/user-info/user-info.component';
import { WalletInfoComponent } from './core/components/wallet-info/wallet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInfoComponent,
    WalletInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgbCollapseModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
