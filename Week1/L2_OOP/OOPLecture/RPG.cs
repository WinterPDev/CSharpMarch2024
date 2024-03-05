
class RPG : Game
{
    public string Type { get; set; }
    public bool CustomCharacter { get; set; }

    //Constructor
    // We use : base (params) to use the original Game Constructor with our parameters. And then we go on to use the RPG constructor for the new values.
    public RPG(string name, string genre, string platform, int releaseYear, bool multiplayer, string type, bool customCharacter) : base(name, genre, platform, releaseYear, multiplayer)
    {
        Type = type;
        CustomCharacter = customCharacter;
    }


    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"RPG Style : {Type}");
        Console.WriteLine($"Custom Character : {(CustomCharacter ? "yes" : "no")}");
    }

}