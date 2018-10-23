import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  itemList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  getAllItems() {
    this.itemList = this.firebase.list('services');
    return this.itemList.snapshotChanges();
  }
  getSaludItems() {
    console.log(this.itemList);
  }
  insert(newItem) {
    this.itemList.push({
      type: 'hogar',
      name: newItem.name,
      description: newItem.description
    });
  }
  update(currentItem) {
    this.itemList.update(currentItem.$key, {
      name: currentItem.name,
      description: currentItem.description
    });
  }
  delete($key) {
    this.itemList.remove($key);
  }
  populateForm(currentItem) {
    this.form.setValue({
      $key: currentItem.$key,
      name: currentItem.name,
      description: currentItem.description
    });
  }
}
