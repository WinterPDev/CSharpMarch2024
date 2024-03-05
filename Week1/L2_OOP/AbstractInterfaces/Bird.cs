

class Bird : Pet, IRun, IFly
{
    public int RunSpeed { get; set; } = 20;
    public int FlySpeed { get; set; } = 150;

    public Bird(string name) : base(name) { }

    public void Run()
    {
        Console.WriteLine($"{Name} runs away at {RunSpeed} mph!");
    }

    public void Fly()
    {
        Console.WriteLine($"{Name} flys away at {FlySpeed} mph!");
    }
}