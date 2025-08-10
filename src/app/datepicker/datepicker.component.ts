import { JsonPipe } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbDatepickerI18n,
  NgbDatepickerModule,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES: any = {
  es: {
    weekdays: ['LU', 'MA', 'Mi', 'JU', 'VI', 'SA', 'DO'],
    months: [
      'ENE',
      'FEB',
      'MAR',
      'ABR',
      'MAY',
      'JUN',
      'JUL',
      'AGO',
      'SEP',
      'OCT',
      'NOV',
      'DIC',
    ],
    weekLabel: 'SEM',
  },
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'es';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }

  override getWeekdayLabel(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  override getWeekLabel(): string {
    return I18N_VALUES[this._i18n.language].weekLabel;
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  standalone: true,
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
  ],
})
export class DatepickerComponent {
  model: NgbDateStruct = { year: 0, month: 0, day: 0 };
}
