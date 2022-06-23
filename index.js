// Write your code here
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.#dessert = dessert;
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
    }
}

let breakfast = new Breakfast("eggs","juice");
let lunch = new Lunch("side salad","broccoli cheddar soup","iced tea");
let dinner = new Dinner("balsamic salad","consomme","filet mignon","cheesecake");