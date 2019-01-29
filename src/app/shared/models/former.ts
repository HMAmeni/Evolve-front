export class Former {
    formerName: string;
    formerEmail: string;
    formerLinkedIn: string;
    formerPhoneNumber: string;
    formerSpecialty: string;
    fromerDescription: string;
    formerPassword: string;

    toString(former: Former): string {
        let formerDetails: string = "\n--------------------------------------------"+
                                    "\nName: " + former.formerName +
                                    "\nEmail: " + former.formerEmail +
                                    "\nLinkedIn: " + former.formerLinkedIn +
                                    "\nPhoneNumber: " + former.formerPhoneNumber +
                                    "\nSpeciality: " + former.formerSpecialty +
                                    "\nDescription: " + former.fromerDescription
                                    "\nPassword: " + former.formerPassword;

        return formerDetails;
    }

}