import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private router: Router ) { }

  changeOption(event: MouseEvent) {

    let elementActive;
    const elementSelected = (event.target as HTMLElement);
    //console.log(elementSelected);

    if (!elementSelected.classList.contains('option-active')) {

      if (elementSelected.textContent === 'BUSCAR') {

        // cambiar active
        elementActive = document.querySelector('#btnCargar');
        elementActive?.classList.remove('option-active');
        elementSelected.classList.add('option-active');

        // Rederigir al search
        this.router.navigateByUrl('/library/search')
        .then( () => {
          window.location.reload();
        });

      }
      else {
        // cambiar active
        elementActive = document.querySelector('#btnBuscar');
        elementActive?.classList.remove('option-active');
        elementSelected.classList.add('option-active');

        // Rederigir al load
        this.router.navigateByUrl('/library/load')
        .then( () => {
          window.location.reload();
        });
      }

    }

  }


}
