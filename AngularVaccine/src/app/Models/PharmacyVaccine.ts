import { Pharmacy } from "./Pharmacy";
import { Vaccine } from "./Vaccine";

export interface PharmacyVaccine{
    pharmId: number,
    vacId: number,
    quantity: number,
    pharmacy: Pharmacy,
    vaccine: Vaccine
}