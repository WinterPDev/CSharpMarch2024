using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVCGameLogger.Models;

namespace MVCGameLogger.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public static List<Game> GameListDB = new();

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("games/create")]
    public IActionResult CreateGame(Game newGame)
    {
        Console.WriteLine($"Title : {newGame.Title} | Platform : {newGame.Platform} | Release Year : {newGame.ReleaseYear} | Completed ? {newGame.Completed}");

        if (!ModelState.IsValid)
        {
            return View("Index");
        }

        GameListDB.Add(newGame);

        return RedirectToAction("AllGames");
    }

    [HttpGet("games")]
    public ViewResult AllGames()
    {
        return View("AllGames", GameListDB);
    }


    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
