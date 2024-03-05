
class Game
{

    private string _Name;
    public string Name
    {
        get { return Name; }
        set { _Name = value; }
    }

    private string _Genre;
    public string Genre { get { return _Genre; } set { _Genre = value; } }

    private string _Platform;
    public string Platform { get { return _Platform; } set { _Platform = value; } }

    private int _ReleaseYear;
    public int ReleaseYear { get; set; } = 2024;

    private bool _Multiplayer;
    public bool Multiplayer { get; set; } = false;

    public List<string> Platforms { get; set; } = new List<string>();

    public Game(string name, string genre, string platform, int releaseYear, bool multiplayer)
    {
        Name = name;
        Genre = genre;
        Platform = platform;
        ReleaseYear = releaseYear;
        Multiplayer = multiplayer;
    }


    // To allow us to override this method, we need to update this method with the virtual keyword.
    public virtual void ShowInfo()
    {
        Console.WriteLine("--------------");
        Console.WriteLine($"Name : {Name}\nPlatform : {Platform}\nRelease Year : {ReleaseYear}\n{(Multiplayer ? "yes" : "no")}");
    }

    // Method "overloading" where we can have multiple versions of the same function, and based on the parameters we provide it wil execute the specific function.
    public virtual void ShowInfo(int times)
    {
        for (int i = 0; i < times; i++)
        {
            this.ShowInfo();
        }
    }

}