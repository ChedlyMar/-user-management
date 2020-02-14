import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable({
    providedIn :"root"
})


export class EmployeeService {
    
    getEmployee(): IEmployee[]{
        return[
            {
            "name": "Dali",
            "Role": ["admin","manager","billing"],
            "isAdmin":true,
            "isManager":true,
            "isBilling":true,
            "Email":"daly@gmail.com",
            "Status":"active",
            "imageUrl":"assets/images/dali.png"
          },
          {
            "name": "Mido",
            "Role": ["billing"],
            "isAdmin":false,
            "isManager":true,
            "isBilling":false,
            "Email":"mido@gmail.com",
            "Status":"invited",
            "imageUrl":"assets/images/mido.png"
          },
          {
            "name": "Kimo",
            "Role": ["admin","manager"],
            "isAdmin":false,
            "isManager":false,
            "isBilling":true,
            "Email":"kimo@gmail.com",
            "Status":"inactive",
            "imageUrl":"assets/images/kimo.png"
          },
          {
            "name": "Mimo",
            "Role": ["manager"],
            "isAdmin":true,
            "isManager":false,
            "isBilling":true,
            "Email":"mimo@gmail.com",
            "Status":"active",
            "imageUrl":"assets/images/mimo.png"
          }
        ];
    }
}