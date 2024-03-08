using System.ComponentModel.DataAnnotations;

#pragma warning disable CS8618


public class Game
{


    [Display(Name = "Title : ")]
    [DataType(DataType.Text)]
    [MinLength(2, ErrorMessage = "Title Must Be Longer than 1 Character!")]
    [Required]
    [NoZNames]
    public string Title { get; set; }


    [Display(Name = "Platform : ")]
    [DataType(DataType.Text)]
    [Required(ErrorMessage = "Must Include Platform")]
    [MinLength(2, ErrorMessage = "Platform Must Be Longer than 1 Character!")]
    [NoZNames]
    public string Platform { get; set; }


    [Display(Name = "Release Year : ")]
    // [Range(1980, 2025)]
    // Validation for numbers that are greater than 0!
    [Range(1, int.MaxValue)]
    [Required]
    public int ReleaseYear { get; set; }


    [Display(Name = "Completed ? : ")]
    public bool Completed { get; set; }

}

// Create a class that inherits from ValidationAttribute
public class NoZNamesAttribute : ValidationAttribute
{
    // Call upon the protected IsValid method
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        // We are expecting the value coming in to be a string
        // so we need to do a bit of type casting to our object
        // Strings work similarly to arrays under the hood 
        // so we can grab the first letter using its index   
        // If we discover that the first letter of our string is z...  
        if (value == null || ((string)value!).ToLower()[0] == 'z')
        {
            // we return an error message in ValidationResult we want to render    
            return new ValidationResult("No Game Titles that start with Z allowed!");
        }
        else
        {
            // Otherwise, we were successful and can report our success  
            return ValidationResult.Success;
        }
    }
}
