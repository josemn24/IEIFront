import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    loadSource:    ['all', [ Validators.required ] ],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {

    console.log('Biliotecas');
    this.miFormulario.markAllAsTouched();

    //If all is correct
    if(!this.miFormulario.invalid) {

      // Cargar bibliotecas
      //this.loadLibraries(this.miFormulario.get('loadSource')?.value);
      console.log(this.miFormulario.get('loadSource')?.value);

    }
    
  }

  loadLibraries(source: string) {

    switch(source) {

      case 'all': break;

      case 'cat': break;

      case 'cov': break;

      case 'eus': break;

    }

  }

}
