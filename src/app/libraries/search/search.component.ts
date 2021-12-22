import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    localidad:    ['', [ Validators.required ] ],
    codigoPostal:    ['', [ Validators.required ] ],
    provincia:    ['', [ Validators.required ] ],
    tipo:    ['Publica', [ Validators.required ] ],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {

    console.log('Buscar');
    this.miFormulario.markAllAsTouched();

    //If all is correct
    if(!this.miFormulario.invalid) {

      console.log(this.miFormulario.get('localidad')?.value);
      console.log(this.miFormulario.get('codigoPostal')?.value);
      console.log(this.miFormulario.get('provincia')?.value);
      console.log(this.miFormulario.get('tipo')?.value);

    }
    
  }


}
