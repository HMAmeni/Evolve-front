export class Investor {
    investorName: string;
    investorEmail: string;
    investorLinkedIn: string;
    investorPhoneNumber: string;
    investorDomain: string;
    investorPassword: string;

    toString(investor: Investor): string {
        let investorDetails: string = "\n--------------------------------------------"+
                                    "\nName: " + investor.investorName +
                                    "\nEmail: " + investor.investorEmail +
                                    "\nLinkedIn: " + investor.investorLinkedIn +
                                    "\nPhoneNumber: " + investor.investorPhoneNumber +
                                    "\nDomain: " + investor.investorDomain +
                                    "\nPassword: " + investor.investorPassword;

        return investorDetails;
    }

}