import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DatosService {

    public equipo: any[] = []

    constructor(private http: HttpClient) {
        console.log('Soy el Servicio de Datos listo para usar');
        this.cargarEquipo()
    }

    private cargarEquipo() {
        this.http.get('https://app-angular-ec892-default-rtdb.firebaseio.com/equipo.json')
        .subscribe((res: any) => {
            this.equipo = res
            console.log(res);
        })
    }

}