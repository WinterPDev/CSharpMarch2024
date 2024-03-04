// See https://aka.ms/new-console-template for more information

// If you have a Dotnet 6 installed, we can specify which version when using dotnet with: dotnet new console -f net6.0

// dotnet tool install --global dotnet-ef
// You can install this now, or later when we get to Full Stack. But it's a one time install, so feel free to get it out of the way now.


// Goals:
/*
    Create our first console program: dotnet new console -o AppName
    Then cd into the folder and enter code .

    Open individual projects for the best experience, rather than the big github root folder. 
    When you first open a C# project, vsCode will ask to install required assets to build/debug. 
    This will install some files to let you use vsCode's built in debugger with your code.

    your .csproj file is just our dependencies


    If we want to compile/build our code without running we can use:
    dotnet build

    To run our program we can use:
    dotnet run
    dotnet watch run
*/


// Semicolons are required to terminate any code lines!

// C# is a COMPILED language, so we will receive real time feedback from our editor as we make changes. No need to run to see if it breaks! It breaks right away!


Console.WriteLine("Hello, World!");

// The entry point for our program.
// Program.cs is an instance of the class Main()


string name = "Winter";

int number = 7;

double decimalVal = 9.1;

bool isOldEnough = false;


// Console.WriteLine("Hello, " + name + "!");

// Console.WriteLine($"Hello, {name}!");

// Console.WriteLine("Hello, {0}", name);


// for (int i = 0; i <= 10; i++)
// {
//     Console.WriteLine(i);
// }

// Random rand = new Random();

// for (int i = 1; i <= 10; i++)
// {
//     Console.WriteLine(rand.Next(2, 8));
// }


// Arrays Store 1 Data Type. Arrays are constructed, since they are objects. We can either dfine the values or define just the length.

int[] numArray = new int[5];

int[] numArray2 = { 1, 2, 3, 4, 5, 6 };

// Console.WriteLine(numArray2[2]);

// foreach (int num in numArray2)
// {
//     Console.WriteLine($"Looking at number: {num}");
// }


List<string> FavFoods = new List<string>();


// FavFoods.Add("Pizza");
// FavFoods.Add("Steak");
// FavFoods.Add("Pancakes");
// FavFoods.Add("Burger");
// FavFoods.Add("Udon Noodles");

// foreach (string food in FavFoods)
// {
//     Console.WriteLine(food);
// }

// FavFoods.Insert(0, "Pinnaple Pizza");

// foreach (string food in FavFoods)
// {
//     Console.WriteLine(food);
// }

// FavFoods.Remove("Pinnaple Pizza");
// FavFoods.RemoveAt(0);
// foreach (string food in FavFoods)
// {
//     Console.WriteLine(food);
// }


Dictionary<string, int> PetAges = new();

PetAges.Add("Minerva", 6);

Console.WriteLine(PetAges["Minerva"]);

foreach (KeyValuePair<string, int> pet in PetAges)
{
    Console.WriteLine($"Key : {pet.Key} - Value : {pet.Value}");
}