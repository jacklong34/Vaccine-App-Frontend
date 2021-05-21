import { Appointment } from "./Appointment";
import { PharmacyVaccine } from "./PharmacyVaccine";

export interface Pharmacy{
    pharmId: number,
    name: string,
    state: string,
    city: string,
    street: string,
    zip: number,
    appointments: Appointment[],
    pharmacyVaccine: PharmacyVaccine[]
}