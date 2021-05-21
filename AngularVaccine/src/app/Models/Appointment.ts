import { Patient } from "./Patient";
import { Pharmacy } from "./Pharmacy";
import { Vaccine } from "./Vaccine";

export interface Appointment{
    appId: number,
    date: Date,
    pharmId: number,
    patientId: number,
    vacId: number,
    pharmacy: Pharmacy,
    patient: Patient,
    vaccine: Vaccine
}