export class Dog {
    id: number;
    ownerId: number;
    dogName: string;
    gender: string;
    breed: string;
    dogAge: string;
    dogSize: string;
    weight: number;
    profileComment: string;
    imageUrl: string;

    constructor(response?: any) {
        if(response != null) {
           this.id = response.id;
           this.ownerId = response.ownerId;
           this.dogName = response.dogName;
           this.gender = response.gender;
           this.breed = response.breed;
           this.dogAge = response.dogAge;
           this.dogSize = response.dogSize;
           this.weight = response.weight;
           this.profileComment = response.profileComment;
           this.imageUrl = response.imageUrl;
        }
    }
}