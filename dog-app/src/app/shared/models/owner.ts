export class Owner {
    id: number;
    address: string;
    email: string;
    firstName: string;
    lastName: string;
    password?: string;
    postalCode: string;

    constructor(response?: any) {
        if(response != null) {
            this.id = response.id;
            this.address = response.address;
            this.email = response.email;
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            this.postalCode = response.postalCode;
            
            this.password = response.password;
        }
    }
}