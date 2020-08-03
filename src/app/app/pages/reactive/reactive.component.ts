import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  formulario: FormGroup;
  lista: any[] = [];

  constructor(private formBuilder: FormBuilder, private paises: PaisesService) {
    this.paises.getPaises().subscribe((paises) => {
      this.lista = paises;
    });

    this.crearFormulario();
    this.cargarDatosPorDefecto();
  }

  ngOnInit(): void {}

  crearFormulario() {
    //formBuilder es un objeto y dentro se va a definir todos los campos del formulario

    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]], //si se coloca algo dentro de las '' +formControlName="nombre" del html va a salir en el formulario
      apellido: ['', [Validators.required, Validators.minLength(5)]], //array de validaciones
      contrasenia1: ['', Validators.required],
      contrasenia2: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
    });
  }

  //puedo cargar los datos por defecto aqui nombre: ['',
  //o a travees de esta funcion, pero hay q poner un valor a cada una de las propiedades
  cargarDatosPorDefecto() {
    this.formulario.setValue({
      nombre: 'Victor H',
      apellido: 'Ospina Giraldo',
      email: 'victorm@gmail.com',
      contrasenia1: '',
      contrasenia2: '',
      direccion: { calle: 'Calle de europa', ciudad: 'Madrid' },
    });
  }

  get passNoValid1() {
    return (
      this.formulario.get('contrasenia1').invalid &&
      this.formulario.get('contrasenia1').touched
    );
  }
  get comprobarContrasenias() {
    //recogo los dos valores del formulario y hago la comparacion
    const contrasenia1 = this.formulario.get('contrasenia1').value;
    const contrasenia2 = this.formulario.get('contrasenia2').value;
    return contrasenia1 === contrasenia2 ? false : true;
  }

  get nombreNoValido() {
    return (
      this.formulario.get('nombre').invalid &&
      this.formulario.get('nombre').touched
    );
  }

  get apellidoNoValido() {
    return (
      this.formulario.get('apellido').invalid &&
      this.formulario.get('apellido').touched
    );
  }

  get emailNoValido() {
    return (
      this.formulario.get('email').invalid &&
      this.formulario.get('email').touched
    );
  }

  get ciudadNoValida() {
    return (
      this.formulario.get('direccion.ciudad').invalid &&
      this.formulario.get('direccion.ciudad').touched
    );
  }

  get dirNoValida() {
    return (
      this.formulario.get('direccion.calle').invalid &&
      this.formulario.get('direccion.calle').touched
    );
  }

  guardar() {
    if (this.formulario.invalid) {
      return Object.values(this.formulario.controls).forEach((control) => {
        control.markAsTouched();
      });
    } else {
      this.formulario.reset();
    }
  }
}
