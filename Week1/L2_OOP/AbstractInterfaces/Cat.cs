
public class Cat : Pet, IRun
{
    // Add runspeed 
    public int RunSpeed { get; set; } = 20;
    public Cat(string name) : base(name) { }

    public void Run()
    {
        Console.WriteLine($"{Name} runs away at {RunSpeed} mph!");
    }
}