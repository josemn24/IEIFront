import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrariesService } from 'src/app/services/libraries.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    loadSource:    ['all', [ Validators.required ] ],
  });

  respMsg: string = '';
  respMsgDel: string = '';

  constructor(private fb: FormBuilder,
              private libraryService: LibrariesService) { }

  ngOnInit(): void {
  }

  submitForm() {

    console.log('Biliotecas');
    this.miFormulario.markAllAsTouched();

    //If all is correct
    if(!this.miFormulario.invalid) {

      // Cargar bibliotecas
      console.log(this.miFormulario.get('loadSource')?.value);
      this.showAlertSpinner();
      this.loadLibraries(this.miFormulario.get('loadSource')?.value);

    }
    
  }

  loadLibraries(source: string) {

    switch(source) {

      case 'all': this.libraryService.loadAllLibraries()
                    .subscribe( resp => {
                      this.respMsg = resp.msg;
                      this.hideAlertSpinner();
                      this.showAlertMsg();
                  });
      break;

      case 'cat': this.libraryService.loadCatLibraries()
                    .subscribe( resp => {
                      this.respMsg = resp.msg;
                      this.hideAlertSpinner();
                      this.showAlertMsg();
                  });
      break;

      case 'cov': this.libraryService.loadCovLibraries()
                    .subscribe( resp => {
                      this.respMsg = resp.msg;
                      this.hideAlertSpinner();
                      this.showAlertMsg();
                  });
      break;

      case 'eus': this.libraryService.loadEusLibraries()
                    .subscribe( resp => {
                      this.respMsg = resp.msg;
                      this.hideAlertSpinner();
                      this.showAlertMsg();
                  });
      break;

    }

  }

  deleteLibraries() {

    this.libraryService.deleteLibraries()
                .subscribe( resp => {
                  this.respMsgDel = resp.msg;
                  this.showAlertMsgDel();
              });

  }

  showAlertSpinner() {
    var alert = document.querySelector("#alertSpinner");

    alert!.classList.remove('hideAlert');
    alert!.classList.add('showAlert');

  }

  hideAlertSpinner() {
    var alert = document.querySelector("#alertSpinner");

    alert!.classList.remove('showAlert');
    alert!.classList.add('hideAlert');

  }

  showAlertMsg() {
    var alert = document.querySelector("#alertMsg");

    alert!.classList.remove('hideAlert');
    alert!.classList.add('showAlert');
    setTimeout(() => {
      alert!.classList.remove('showAlert');
      alert!.classList.add('hideAlert');
    }, 5000);

  }

  showAlertMsgDel() {
    var alert = document.querySelector("#alertDelete");

    alert!.classList.remove('hideAlert');
    alert!.classList.add('showAlert');
    setTimeout(() => {
      alert!.classList.remove('showAlert');
      alert!.classList.add('hideAlert');
    }, 5000);

  }

}
