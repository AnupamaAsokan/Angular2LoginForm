import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male','female'];
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    Answer: '',
    Gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData:{
        username : suggestedName
      }
    });
  }

 /* onSubmit(form: NgForm) {
  console.log("submitted!!" + form);
  }*/

 onSubmit(){
   this.submitted =true;
   this.user.userName = this.signupForm.value.userData.username;
   this.user.email = this.signupForm.value.userData.email;
   this.user.secretQuestion = this.signupForm.value.secret;
   this.user.Answer = this.signupForm.value.QuestionAnswer;
   this.user.Gender = this.signupForm.value.gender;
   console.log(this.signupForm);
   this.signupForm.reset();
 }
}
