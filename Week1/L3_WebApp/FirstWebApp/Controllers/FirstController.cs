using Microsoft.AspNetCore.Mvc;


namespace FirstWebApp.Controllers;

public class FirstController : Controller
{

    [HttpGet]
    [Route("")]
    public string Index()
    {
        return "Hello from the FirstController!";
    }

    [HttpGet("otherpage")]
    public string OtherPage()
    {
        return "Hello from the Other Page!";
    }

    // Parameters
    [HttpGet("user/{id}/{food}")]
    public string FavoriteFood(int id, string food)
    {
        return $"User Id: {id}'s favorite food is: {food}!";
    }

    [HttpGet("firstview")]
    public ViewResult FirstView()
    {
        // ViewBags alone use an "any" datatype, so there is no type checking.
        ViewBag.Name = "Winter";
        ViewBag.Num = 42;
        ViewBag.Foods = new List<string>() { "apple", "eggs", "sushi", "granola" };
        // Make sure this view has a corresponding view cshtml file in the view folder.

        // The folder names in our program are important! It will check for a folder that matches the controller name, then check for view files that match!
        return View("FirstView");


        // Implicit view name, this will try to fetch a view by the name of our Method.
        // return View();
    }


    [HttpGet("formview")]
    public ViewResult FormView()
    {

        return View();
    }


    //? RedirectResult - return Redirect("url_name");
    [HttpPost("submitformone")]
    public RedirectResult SubmitFormOne(string Name, string Game)
    {

        Console.WriteLine($"Submitted Data: Name : {Name} | Game : {Game}");

        return Redirect("formview");
    }


    //? RedirectToActionResult - return RedirectToAction("action_name", + additional parameter values in an anonymous object);
    [HttpPost("submitformtwo")]
    public RedirectToActionResult SubmitFormTwo(string Name, string Game)
    {

        Console.WriteLine($"Submitted Data: Name : {Name} | Game : {Game}");

        return RedirectToAction("/formresults");
    }

    //? IActionResult - return any Result/handle different return types. (Views, Actions, etc.)
    //* Typically used for validations, where we will want to redirect them to the original form if the validation fails; Or we send them to another route if it succeeds!
    [HttpPost("submitformthree")]
    public IActionResult SubmitFormThree(string Name, string Game)
    {
        // Console.WriteLine(Name, Game);
        if (Name == null && Game == null)
        {
            return Redirect("FormView");
        }

        return RedirectToAction("FormResult", new { Name = Name, Game = Game });

    }






    [HttpGet("formresults")]
    public ViewResult FormResult(string Name, string Game)
    {

        ViewBag.Name = Name;
        ViewBag.Game = Game;
        return View("FormResult");
    }


}