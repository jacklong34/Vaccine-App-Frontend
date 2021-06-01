import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PatientRestService } from 'src/app/Services/patient-rest.service';
import { Patient } from 'src/app/Models/Patient';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
          { title: 'Card 2', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 2, rows: 1 },
          { title: 'Card 4', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 }
      ];
    })
  );
  //Patient to load
  patient: Patient;
  //Auth0 User
  authUser: any;

  constructor(private breakpointObserver: BreakpointObserver, private patientService: PatientRestService, private authService: AuthService) {
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
