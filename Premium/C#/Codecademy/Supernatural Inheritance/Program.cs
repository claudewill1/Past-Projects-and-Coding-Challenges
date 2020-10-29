using System;

namespace MagicalInheritance
{
  class Program
  {
    static void Main(string[] args)
    {
        
        Pupil p = new Pupil("Mezil-kree");
        Mage m = new Mage("Gul'Dan");
        Archmage am = new Archmage("Nielas Aran");
        Storm rainStorm = m.CastRainStorm();
        Storm windStorm = p.CastWindStorm();
        Storm lightningStorm = am.CastLightningStorm();
        Console.WriteLine(windStorm.Announce());
        Console.WriteLine(rainStorm.Announce());
        Console.WriteLine(lightningStorm.Announce());
    }
  }
}