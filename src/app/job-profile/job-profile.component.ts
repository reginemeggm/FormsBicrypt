import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})

export class JobProfileComponent implements OnInit {

  form = this.fb.group({
    employer: ['', {
      validators: [Validators.required, Validators.minLength(6)],
    }],
    headqtrs: ['', {
      validators: [Validators.required, Validators.minLength(6)],
    }],
    registrationNumber: ['', {
      validators: [Validators.required, Validators.minLength(6)],
    }],
    jobTitle: ['', {
      validators: [Validators.required, Validators.minLength(6)],
    }],
    empNumber: ['', {
      validators: [Validators.required, Validators.minLength(6)],
    }],
    
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.controls.empNumber.value);
    console.log(this.form.controls.jobTitle.value);
    console.log(this.form.controls.employer.value);
    console.log(this.form.controls.headqtrs.value);
    console.log(this.form.controls.registrationNumber.value);
    
    
    
  }
  get empNumber() {
    return this.form.controls['empNumber'];
  }

  get jobTitle() {
    return this.form.controls['jobTitle'];
  }

  get employer() {
    return this.form.controls['employer'];
  }
  get headqtrs() {
    return this.form.controls['headqtrs'];
  }
  get registrationNumber() {
    return this.form.controls['registrationNumber'];
  }
  
 
 

  get valid() {
    return this.form.controls;
  }

  isDisplay2 = false;
  toggleDisplay2() {
    this.isDisplay2 = !this.isDisplay2;
  }

}
