/*Iterator for Combination

Design an Iterator class, which has:

    A constructor that takes a string characters of sorted distinct lowercase English 
    letters and a number combinationLength as arguments.
    A function next() that returns the next combination of length combinationLength 
    in lexicographical order.
    A function hasNext() that returns True if and only if there exists a next 
    combination.

 

Example:

CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the 
//iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false

 

Constraints:

    1 <= combinationLength <= characters.length <= 15
    There will be at most 10^4 function calls per test.
    It's guaranteed that all calls of the function next are valid.

*/
public class CombinationIterator {
    private readonly StringBuilder _sb;
    private readonly Stack<int> _idx;
    private readonly int _combinationLength;
    private readonly string _characters;
    
    public CombinationIterator(string characters, int combinationLength) {
        _sb = new StringBuilder(combinationLength);
        _idx = new Stack<int>();
        _combinationLength = combinationLength;
        _characters = characters;

        if(_combinationLength > characters.Length){
            return;
        }
        
    }
    
    
    public string Next() {
        if(comb.Count != 0){
            return comb.Peek();
        }
        return "";
    }
    
    public bool HasNext() {
        return comb.Count != 0;
    }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * CombinationIterator obj = new CombinationIterator(characters, combinationLength);
 * string param_1 = obj.Next();
 * bool param_2 = obj.HasNext();
 */