import { Appointment } from "./Appointment";

export interface Patient {
    patientId: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    dob: Date,
    username: string,
    password: string,
    appointments: Appointment[]

}