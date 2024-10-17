import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, HeaderComponent, FooterComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02_hoogland_paolo';

  //store form data and pass it to ResultsComponent
  submittedData: any = {};

  // receive the emitted form data
  onFormSubmit(formData: any) {
    this.submittedData = formData;
  }
}
