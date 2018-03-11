import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  subscriber: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit () {
    this.subscriber = this._formBuilder.group({
      name: ['', Validators.required],
      password: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z]+$')
          ])
      ],
      password_verify: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z]+$')
          ])
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  getPasswordErrorMessage(target) {
    try {
      if (target.hasError('required')) {
        throw new Error('You must enter a value');
      }
      if (target.hasError('pattern')) {
        throw new Error('Password must only be UpperCase, LowerCase and no Number.');
      }
      if (target.hasError('minlength')) {
        throw new Error('min 5 Chars');
      }
    } catch (error) {
      return error.message;
    }
  }

  getEmailErrorMessage(target) {
    try {
      if (target.hasError('required')) {
        throw new Error('You must enter a value');
      }
      if (target.hasError('email')) {
        throw new Error('Not a valid email.');
      }
    } catch (error) {
      return error.message;
    }
  }

  submitForm ({ value, valid }: { value: { name: string; password: string }, valid: boolean }) {
    console.log(value, valid);
    this.reset();
  }

  reset () {
    this.subscriber.reset({
      name: '',
      password: '',
      password_verify: '',
      email: ''
    });
  }

}
