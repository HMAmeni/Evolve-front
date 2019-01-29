export class IdeaProvider {
    ideaProviderName: string;
    ideaProviderEmail: string;
    ideaProviderLinkedIn: string;
    ideaProviderPhoneNumber: string;
    ideaProviderPassword: string;

    toString(ideaProvider: IdeaProvider): string {
        let ideaProviderDetails: string = "\n--------------------------------------------"+
                                    "\nName: " + ideaProvider.ideaProviderName +
                                    "\nEmail: " + ideaProvider.ideaProviderEmail +
                                    "\nLinkedIn: " + ideaProvider.ideaProviderLinkedIn +
                                    "\nPhoneNumber: " + ideaProvider.ideaProviderPhoneNumber;

        return ideaProviderDetails;
    }

}