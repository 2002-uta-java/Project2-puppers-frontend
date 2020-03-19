export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;

    constructor(response?: any) {
        if(response != null) {
            this.id = response.id;
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            this.email = response.email;
            this.password = response.userPassword;
        }
    }
}