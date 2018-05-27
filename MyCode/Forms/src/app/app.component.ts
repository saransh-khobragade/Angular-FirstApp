import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  myForm:FormGroup;
  items:FormArray;
  genders=['male','female'];

  constructor(private formbuilder:FormBuilder){
    /*this.myForm=new FormGroup({
      'username': new FormControl('Saransh',Validators.required),
      'userdata': new FormGroup({
        'pass': new FormControl('',Validators.required),
        'email': new FormControl('',Validators.required)
        }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
          new FormControl('cooking',Validators.required)
      ])
      
    });
    */

    this.myForm=formbuilder.group({
      'username': ['Saransh',[Validators.required]],
      'userdata': formbuilder.group({
        'pass': ['',[Validators.required,this.CustomValidation]],
        'email': ['',Validators.required,this.asyncValidator.bind(this)]
        }),
      'gender': ['male'],
      'hobbies': formbuilder.array([
          ['cooking',[Validators.required]]
      ])
    })
  }

  onSubmit(){
    console.log(this.myForm);
    //this.myForm.reset();
  }
  onAddHobby(){
    this.items = this.myForm.get('hobbies') as FormArray;
    this.items.push(new FormControl('',Validators.required))
  }

  CustomValidation(component:FormControl){
   
    if(component.value==="Example")
    {return "anything";}

    else return null;

  }

  asyncValidator(control:FormControl):Promise<any> | Observable<any>   {
     
    const promise= new Promise<any>(
      (resolve,reject)=>{
        setTimeout(()=>{
            if(control.value==='Example'){
              console.log('hi');
              resolve({'invalid':true});
            }
            else{
              resolve(null);
            }
          },1500);
      }
    );
    return promise;
  }
}
