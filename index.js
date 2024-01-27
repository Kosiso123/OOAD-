console.log('hello welcome to lovekay store')

//let create and instance property using this.

class Shop{
    constructor( name, location, item){
        this.name = 'Lovekay';
        this.location = 'Mandilas island';
        this.item= 'Hood';
        this.invetory = 'jeans,shirt,short,wristwatch,baggyjeans'

    }
    // lets create a statics propert
    static greet = 'we are happy that you visited our store'


    static fareWell = 'thanks for patronising'
    

    // method
    
    addItem(){
        
         console.log(`${this.item} has been added to ${this.name} store list item.`);
    }
    displayItem(){
        console.log(this.invetory);
    }


    // let create static method
    static(){
        console.log(fareWell)

    }

   
}

const shop = new Shop

// let access our property by updating them
shop.item = 'hoodie'


shop.addItem() 
shop.displayItem()
console.log(shop, Shop)
