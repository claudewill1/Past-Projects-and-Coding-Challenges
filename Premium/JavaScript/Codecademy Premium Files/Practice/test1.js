const animal = 'cat';

for(let i = 0; i < animal.length; i++){
    console.log(animal[i]);
    for(let j = 1; j < 4; j++){
        console.log(j);
    }
}

let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
	console.log(socialMedia[socialMediaIndex]);
}

let tempObj = {
    _num: 22,
    get num() {
        return this._num;
    }
};

const car = {
    numDoors: 4,
    isDirty: true,
    color: 'red'
  }
  
  for (let key in car) {
    console.log(key)
  }