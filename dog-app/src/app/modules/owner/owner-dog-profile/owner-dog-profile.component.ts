import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Owner } from '@shared/models/owner';
import { switchMap, map, filter } from 'rxjs/operators';
import { DogService } from '@core/api/dog.service';
import { Dog } from '@shared/models/dog';
import { OwnerService } from '@core/api/owner.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-owner-dog-profile',
  templateUrl: './owner-dog-profile.component.html',
  styleUrls: ['./owner-dog-profile.component.css']
})
export class OwnerDogProfileComponent implements OnInit {
  owner: Owner;
  dogs: Dog[];
  selected = 0;
  isEditing: boolean = false;
  editDog: Dog;

  constructor(private dogService: DogService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentOwner$.pipe(
      switchMap(currentOwner => {
        this.owner = currentOwner;
        return this.dogService.getDogs()
      })
    ).subscribe((dogs: Dog[]) => {
      this.dogs = dogs.filter((d: Dog) => {
        return d.ownerId.id == this.owner.id
      })
    })
  }


  onAdd() {
    const newDog = new Dog();
    newDog.id = null;
    newDog.name = "New";
    newDog.gender = "";
    newDog.breed = "";
    newDog.age = 0;
    newDog.dogSize = "";
    newDog.weight = 0;
    newDog.profileComment = "";
    newDog.imageUrl = "";
    newDog.ownerId = { ...this.owner };
    this.onEdit(newDog);
    this.dogs.push(this.editDog);
    this.selected = this.dogs.length - 1;
  }

  onEdit(dog) {
    this.isEditing = true;
    this.editDog = { ...dog };
  }

  onDelete(dog): void {
    this.dogService.removeDog(dog.id).subscribe();
    this.resetState();
    this.removeTab(dog)
  }

  onSubmit() {
    if (this.editDog.id) {
      this.dogService.updateDog(this.editDog).subscribe();
      this.dogs = [...this.dogs.filter(d => d.id !== this.editDog.id), { ...this.editDog }]
    } else if (this.editDog.id == null) {
      this.removeTab(this.editDog)
      this.dogService.createDog(this.editDog).pipe(
        switchMap(_ => this.dogService.getDogs())
      ).subscribe((dogs: Dog[]) => this.dogs = dogs.filter((d: Dog) => d.ownerId.id == this.owner.id))
    }

    this.resetState();
  }

  onCancel(dog) {
    this.resetState();
    if (dog.id == null) {
      this.removeTab(dog);
    }
  }

  private resetState() {
    this.editDog = null;
    this.isEditing = false;
  }

  private removeTab(dog) {
    this.dogs = this.dogs.filter(d => d.id !== dog.id);
    this.selected = this.dogs.length - 1;
  }
}
