/* You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

    Each word after the identifier will consist only of lowercase letters, or;
    Each word after the identifier will consist only of digits.

We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

 

Constraints:

    0 <= logs.length <= 100
    3 <= logs[i].length <= 100
    logs[i] is guaranteed to have an identifier, and a word after the identifier.


    Create two lists that will store the Letter and Digit Lists.
    Iterate through each element in the array and check if the second element is a letter or digit and add it to their respective lists.
    Sort the Letter Lists.
    Sort the digit Lists.
    Merge two Lists.
    Return the Merged List.

*/

public class Solution {
    public string[] ReorderLogFiles(string[] logs) {
        if(logs.Length == 0){
            return new string[0];
        }

        // separate letter logs form digit logs
        var digitLog = new List<string>();
        var letterLog = new List<string>();

        for(var i = 0; i < logs.Length; i++){
            // set current log
            var log = logs[i];

            // separate log items
            var log_items = log.Split();

            // determine if it's a digit log
            var isDigit = char.IsDigit(log_items[1][0]);

            if(isDigit){
                digitLog.Add(log);
            }
            else 
            {
                // arrange parts so that the id is at the end (for ordering purposes later)
                var firstPart = string.Join(" ",log_items.Skip(1));
                var lastPart = log_items[0];

                // add modified string to array
                letterLog.Add(firstPart + " " + lastPart);
            }

            
        }
        // sort letter logs
        letterLog.Sort();

        var res = new List<string>();

        for(var i = 0; i < letterLog.Count(); i++){
            var log = letterLog[i];

            var log_items = log.Split();

            var firstPart = log_items[log_items.Length -1];
            var lastPart = string.Join(" ",log_items.Take(log_items.Length - 1));

            res.Add(firstPart + " " + lastPart);
        }

        // append digit logs
        result.AddRange(digitLog);

        return res.ToArray();
        
    }
}