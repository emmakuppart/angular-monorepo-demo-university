import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MockTranslatePipe } from './mock-translate.pipe';
import { FakeTranslateLoader } from './mock-translate.loader';
import { MockTranslateService } from './mock-translate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [MockTranslatePipe],
  imports: [
    HttpClientTestingModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: FakeTranslateLoader }
    })
  ],
  exports: [MockTranslatePipe, TranslateModule],
  providers: [
    { provide: TranslateService, useClass: MockTranslateService },
    { provide: TranslatePipe, useClass: MockTranslatePipe }
  ],
})
export class TranslateTestingModule {
}