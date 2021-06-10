const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

let categories = [["Make", "All"], 
                  ["Model", "All"],
                  ["Price", "Any"],
                  ["Year", "Any"]];
let menus = [];
categories.forEach(category => {
  let menu = {};
  menu["category"] = category[0];
  menu["options"] = [{ option: category[1] }];
  let menu_items = [];
  cars.forEach(car => {
    if (!menu_items.includes(car[category[0].toLowerCase()])) {
      menu["options"].push({ option: car[category[0].toLowerCase()] });
      menu_items.push(car[category[0].toLowerCase()]);
    }
  })
  menus.push(menu);
});

document.addEventListener('DOMContentLoaded', () => {
  let menusTmpl = document.querySelector("#menus");
  let menusScript = Handlebars.compile(menusTmpl.innerHTML);
  let optionTmpl = document.querySelector("#menu_option");
  Handlebars.registerPartial("menu_option", optionTmpl.innerHTML);
  let menusHTML = menusScript({ menus: menus });
  let elementDL = document.createElement("DL");
  let filterButton = document.querySelector("fieldset > input");
  document.querySelector("fieldset").insertBefore(elementDL, filterButton);
  elementDL.innerHTML = menusHTML;
  
  let carsTmpl = document.querySelector("#car_listing");
  let carsScript = Handlebars.compile(carsTmpl.innerHTML);
  let carsHTML = carsScript({ cars: cars });
  document.querySelector('main').innerHTML = carsHTML;

  let form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let filteredCars = [];
    cars.forEach(car => {
      isKeeper = true;
      categories.forEach(category => {
        if (document.querySelector(`#${category[0]}`).value !== String(car[category[0].toLowerCase()]) &&
            document.querySelector(`#${category[0]}`).value !== category[1]) {
          isKeeper = false; 
        }
      })
      if (isKeeper) {
        filteredCars.push(car);
      }
    })
    let carsHTML = carsScript({ cars: filteredCars });
    document.querySelector('main').innerHTML = carsHTML;
  })


});