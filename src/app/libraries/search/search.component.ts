import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Biblioteca } from 'src/app/models/Biblioteca';
import { LibrariesService } from 'src/app/services/libraries.service';
import 'mapbox-gl/dist/mapbox-gl.css';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  markers! : Array<Mapboxgl.Marker>;
  map! : Mapboxgl.Map;

  miFormulario: FormGroup = this.fb.group({
    localidad:    ['', [  ] ],
    codigoPostal:    ['', [  ] ],
    provincia:    ['', [  ] ],
    tipo:    ['Publica', [ Validators.required ] ],
  });

  libraries: Biblioteca[] = [];

  constructor(private fb: FormBuilder,
              private libraryService: LibrariesService) {
                this.markers = new Array<Mapboxgl.Marker>();
               }

  ngOnInit(): void {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'map', // container ID
      style: 'mapbox://styles/realfoodiefriends/ckufjvqun7s6q17mwf07oiv2c', // style URL
      center: [-0.3773900, 39.4697500], // starting position
      zoom: 12 // starting zoom
    });
    // Add zoom and other controls to the map.
    let geocoder = new MapboxGeocoder({
      accessToken: environment.mapboxKey,
      placeholder: "Buscar"
    })
  }

  submitForm() {
    this.miFormulario.markAllAsTouched();

    //If all is correct
    if(!this.miFormulario.invalid) {
      this.searchLibraries();
    }

  }

  searchLibraries() {

    const { localidad, codigoPostal, provincia, tipo } = this.miFormulario.value;

    this.libraryService.getLibraries(localidad, codigoPostal, provincia, tipo)
      .subscribe( resp => {
        this.libraries = resp.BibliotecasDevolver;
        this.pushMarkers();
    });


  }

  pushMarkers() {
    if(this.markers){
      this.markers.forEach(mar =>
        mar.remove()
      );
    }

    this.libraries.forEach(library => {
      let colorTag = "#FF8A33";
      let marker;

      marker = new Mapboxgl.Marker({
        "color": colorTag,
        "scale": 1.6,
        "offset": [0, -50/2],
      });
      marker.setLngLat([parseFloat("" + library.longitud), parseFloat("" + library.latitud)])
      .addTo(this.map);

      console.log(library.longitud);
      console.log(library.latitud);
      this.markers.push(marker);
    })
  }

}
