import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

RegForm! : FormGroup;
submitted = false;


  constructor( private fg : FormBuilder, private auth : AuthService, private router: Router){}
 
ngOnInit(): void{
  this.RegForm = this.fg.group({
   LastName : ['', Validators.required],
   FirstName : ['', Validators.required],
   UserName : ['', Validators.required],
   Email : ['', Validators.required],
   Password : ['', Validators.required],
  })
}

get f() { return this.RegForm.controls; }

onRegistration(){
  if(this.RegForm.valid){
    this.auth.signUp(this.RegForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message);
        this.RegForm.reset();
        this.router.navigate(['welcome'])
      })
      ,error:(err=>{
        alert(err?.error.message)
      })      
    })


    console.log(this.RegForm.value)
  }else{
    alert("something wrong22")
    // ValidateForm.validateAllFormFields(this.RegForm)
    
  }

}

}
