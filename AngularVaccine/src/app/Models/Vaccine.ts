import { Appointment } from "./Appointment";
import { PharmacyVaccine } from "./PharmacyVaccine";

export interface Vaccine{
    vacId: number,
    name: string,
    company: string,
    doses: number,
    appointments: Appointment[],
    pharmacyVaccines: PharmacyVaccine[]
}