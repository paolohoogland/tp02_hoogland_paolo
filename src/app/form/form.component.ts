import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  postalCode: string = '';
  city: string = '';
  country: string = '';
  telephone: string = '';
  email: string = '';
  gender: string = '';
  password: string = '';
  login: string = '';

  @Output() formSubmitted = new EventEmitter<any>();

  onSubmit(form: any) {
    if (form.valid) {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        postalCode: this.postalCode,
        city: this.city,
        country: this.country,
        telephone: this.telephone,
        email: this.email,
        gender: this.gender,
        password: this.password,
        login: this.login
      };

      this.formSubmitted.emit(formData);
      console.log('Form submitted', formData);
      this.resetForm(form);
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(form: any) {
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.postalCode = '';
    this.city = '';
    this.country = '';
    this.telephone = '';
    this.email = '';
    this.gender = '';
    this.password = '';
    this.login = '';
    form.resetForm();
  }
}
