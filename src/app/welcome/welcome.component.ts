import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../_models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

LgForm!: FormGroup;
submitted = false;
loading = false;
isLoginError : boolean = false;
UserName: any;
Password: any;
user= new User();

constructor( private fg : FormBuilder, private auth : AuthService, private router: Router){}
 
ngOnInit(): void{
  this.LgForm = this.fg.group({
   
    UserName: ['', Validators.required],
    Password: ['', Validators.required],
    
  });

}

get f() { return this.LgForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.LgForm.invalid) {
      return;
    }else{

    this.loading = true;
    


    this.auth.login(this.LgForm.value).subscribe((token : string) => {
      localStorage.setItem('authToken', token);
      alert("Successfully Logged In");
      console.log(this.LgForm.value);
      this.router.navigate(['/list']);
      
    },
      err=>{
        alert("Wrong UserName or Password");
      });

    }

  }



 

 



}
