import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

loginForm!: FormGroup;
submitted = false;

constructor( private fg : FormBuilder, private auth : AuthService, private router: Router){}
 
ngOnInit(): void{
  this.loginForm = this.fg.group({
   UserName : ['', Validators.required],
   Password : ['', Validators.required],
  })
}

get f() { return this.loginForm.controls; }

  onLogin() {

    if(this.loginForm.valid){
      console.log(this.loginForm.value)

      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res) =>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['list'])
        },
        error:(err) => {
          alert(err?.error.message)
        }
      })

    }

  }


}
