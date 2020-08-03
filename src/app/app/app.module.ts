import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//rutas
import { ROUTES } from './app-router';
import { RouterModule } from '@angular/router';

//componentes
import { AppComponent } from './app.component';
//import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

//servicios
import { PaisesService } from '../app/services/paises.service';

@NgModule({
  declarations: [
    AppComponent,
    //TemplateComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //MatDialogModule,
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
