
Console.WriteLine("Online!");

//! Goals: 
//TODO Build an abstract base class for Pets.
//TODO Create some inheriting classes: Cat, Bird, Fish
//TODO Create Interfaces for IRun, IFly, ISwim

/* 

Abstract classes can not be used as an instance.
Abstract classes are bluepritns for functionality for a class that is too generic to be a direct class.


Interfaces are contracts that any class using it must adhere to.
Interfaces consist of methods and properties that non-abstract classes must adhere to when used.
Interfaces can not hold fields. They can handle auto-implemented properties. {get;set;}
Interface methods are not defined in the interface, but are placed there to make sure a programmer defines that method. Keeping our objects consistent! 
*/

Cat cat1 = new("Valentina");

Bird bird1 = new("Kiwi");


List<Pet> AllPets = new() { cat1, bird1 };


foreach (Pet pet in AllPets)
{

    if (pet is IRun r)
    {
        r.Run();
    }

}

// Pet newPet = new("petName");



