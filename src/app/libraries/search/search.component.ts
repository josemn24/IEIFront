import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Biblioteca } from 'src/app/models/Biblioteca';
import { LibrariesService } from 'src/app/services/libraries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    localidad:    ['', [  ] ],
    codigoPostal:    ['', [  ] ],
    provincia:    ['', [  ] ],
    tipo:    ['Publica', [ Validators.required ] ],
  });

  libraries: Biblioteca[] = [];

  constructor(private fb: FormBuilder,
              private libraryService: LibrariesService) { }

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

      this.searchLibraries();

    }
    
  }

  searchLibraries() {

    const { localidad, codigoPostal, provincia, tipo } = this.miFormulario.value;

    this.libraryService.getLibraries(localidad, codigoPostal, provincia, tipo)
      .subscribe( resp => {
        this.libraries = resp.BibliotecasDevolver;
        console.log(this.libraries);
    });

  }

}
