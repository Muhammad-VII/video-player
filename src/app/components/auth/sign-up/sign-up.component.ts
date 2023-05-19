import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from  "@angular/forms"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  })


  submitForm() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    } else {
      console.log('Not Valid');
    }
  }
}
