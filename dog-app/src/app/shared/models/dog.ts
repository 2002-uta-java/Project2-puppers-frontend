import { Owner } from '@shared/models/owner';

export class Dog {
    id: number;
    ownerId: Owner;
    name: string;
    gender: string;
    breed: string;
    age: number;
    dogSize: string;
    weight: number;
    profileComment: string;
    imageUrl: string;
    dogStatus?: string;

    constructor(response?: any) {
        if (response != null) {
            this.id = response.id;
            this.ownerId = new Owner(response.ownerId);
            this.name = response.name;
            this.gender = response.gender;
            this.breed = response.breed;
            this.age = response.age;
            this.dogSize = response.dogSize;
            this.weight = response.weight;
            this.dogStatus = response.dogStatus
            this.profileComment = response.profileComment;
            this.imageUrl = response.imageUrl;
        }
    }
}