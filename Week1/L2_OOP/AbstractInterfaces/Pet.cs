

// Abstract Classes allow us to define some base requirements for inherited classes.
// This class can NOT be directly used to create instances, and prevents bad objects.
public abstract class Pet
{
    public string Name;

    public Pet(string name)
    {
        Name = name;
    }
}