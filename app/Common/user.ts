class Address {
    street: string;
    suite: string;               
    city: string;
    zipcode: string
}

export class User {
    id: number;
    name: string;
    email: string;
    address: Address;

    constructor() {
        this.id = null;
        this.name = null;
        this.email = null;
        this.address = new Address();
    }
}