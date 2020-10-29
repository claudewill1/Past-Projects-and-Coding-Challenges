// Storm.cs
using System;

namespace MagicalInheritance
{
  class Storm
  {
    public string Essence {get; private set;}
    public bool isStrong {get; private set;}
    public string Caster {get;private set;}

    public Storm(string essence, bool strong, string caster){
      this.Essence = essence;
      this.isStrong = strong;
      this.Caster = caster;
    }

      public string Announce(){
        string spellStrength = (isStrong == true)?"strong":"weak";
        return $"{Caster} cast a {spellStrength} {Essence} storm!";
      }
  }
}