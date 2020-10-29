using System;

namespace DatingProfile
{ 
  class Profile{
    private string name;
    private int age;
    private string city;
    private string country;
    private string pronouns;
    private string[] hobbies;

    public Profile(string name, int age, string city, string country, string pronouns = "they/them"){
      this.name = name;
      this.age = age;
      this.city = city;
      this.country = country;
      this.pronouns = pronouns;
      this.hobbies = new string[0];
    }
    // Method to view users profile
    public string ViewProfile(){
      string bio = $"Name: {name}\nAge: {age}\nCity: {city}\nCountry: {country}\nPronouns: {pronouns}";
      bio += "\nHobbies:\n";
      // concatenate hoobies to bio using foreach loop
      foreach(string hobby in hobbies){
        bio += $"- {hobby}\n";
      }
      return bio;
    }
    // set user hobbies
    public void SetHobbies(string[] hobbies){
      this.hobbies = hobbies;
    }
  }
}
