import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Patient } from 'src/app/Models/Patient';
import { PatientRestService } from 'src/app/Services/patient-rest.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  //Declare Variables
  patient: Patient;
  authUser: any;

  constructor( private patientService: PatientRestService, private authService: AuthService) {
    this.patient = 
    {
      patientId: 0,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      dob: new Date(),
      username: '',
      password: '',
      appointments: []
    }
   }

  ngOnInit(): void {
    this.authService.user$.subscribe(
      au => 
      {
        this.authUser = au;
        this.patientService.GetPatientByUsername(au.email).subscribe(
          foundUser => {
            this.patient = foundUser;
          }
        )
      }
    )
  }

}
