import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/ui/table/table.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CommonModule } from '@angular/common';
import { CurriculumTableComponent } from './curriculum-table/curriculum-table.component';
import { InstitutePipe } from './shared/util/institute.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegisterButtonComponent } from './course-table/register-button/register-button.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CourseTableComponent,
    CurriculumTableComponent,
    InstitutePipe,
    RegisterButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [InstitutePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
