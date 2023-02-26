export interface CompanyBasicData {
    id: string;
    name: string;
    status: applicationStatus;
}

export enum applicationStatus {
    Send = "Wysłano",
    Waiting = "Oczekuje na odpowiedź",
    Appointment = "Zaplanowano spotkanie",
    Accepted = "Zaakceptowane",
    Refused = "Odrzucone",
}
