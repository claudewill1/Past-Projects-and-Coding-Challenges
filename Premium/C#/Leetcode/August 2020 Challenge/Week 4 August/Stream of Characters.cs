/* Stream of Characters

Implement the StreamChecker class as follows:

    StreamChecker(words): Constructor, init the data structure with the given words.
    query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, 
    including this letter just queried) spell one of the words in the given list.

 

Example:

StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
streamChecker.query('a');          // return false
streamChecker.query('b');          // return false
streamChecker.query('c');          // return false
streamChecker.query('d');          // return true, because 'cd' is in the wordlist
streamChecker.query('e');          // return false
streamChecker.query('f');          // return true, because 'f' is in the wordlist
streamChecker.query('g');          // return false
streamChecker.query('h');          // return false
streamChecker.query('i');          // return false
streamChecker.query('j');          // return false
streamChecker.query('k');          // return false
streamChecker.query('l');          // return true, because 'kl' is in the wordlist

 

Note:

    1 <= words.length <= 2000
    1 <= words[i].length <= 2000
    Words will only consist of lowercase English letters.
    Queries will only consist of lowercase English letters.
    The number of queries is at most 40000.

Hint: Put the words into a trie, and manage a set of pointers within that trie. */

public class StreamChecker {

    public class Trie{
        Trie[] next = new Trie[26];
        bool end;
        
    }

    public Trie root;
    public List<int> query;
    public StreamChecker(string[] words) {
        // Initialize a query list.
        root = new Trie();
        query = new List<int>();
        
        // Loop on words array
        foreach(string s in words){
            char[] c = s.ToCharArray();
            Trie t = root;
            // add the word into trie but in reverse order
            for(int i = c.Length - 1; i >= 0; i--){
                if(t.next[c[i] - 'a'] == null) t.next[c[i] - 'a'] = new Trie();

                t = t.next[c[i]-'a'];
            }
            // mark the end of word
            t.end = true;
        }
            
    }
    
    public bool Query(char letter) {
        // Add the query character into list
        query.Add(letter - 'a');
        Trie t = root;
        // position = size of list - 1
        int i = query.Count - 1;
        

        // while(position >= 0)
        while(i >= 0){
        //  update temp = temp.next[query.Contains(position)]
            t = t.next[query.IndexOf(i)];
        //  if(temp != null and temp is endOfWord)
        //     return true
            if(t != null && t.end){
                return true;
            }
        //  else if (temp = null)
        //     return false
            else if (t == null){
                return false;
            }
        //  position--;
            i--;
        }
        // return false
        return false;
    }

    

}
public class Trie{
    private readonly Node _root;

        public Trie()
        {
            _root = new Node('^', 0, null);
        }

        public Node Prefix(string s)
        {
            var currentNode = _root;
            var result = currentNode;

            foreach (var c in s)
            {
                currentNode = currentNode.FindChildNode(c);
                if (currentNode == null)
                    break;
                result = currentNode;
            }

            return result;
        }

        public bool Search(string s)
        {
            var prefix = Prefix(s);
            return prefix.Depth == s.Length && prefix.FindChildNode('$') != null;
        }

        public void InsertRange(List<string> items)
        {
            for (int i = 0; i < items.Count; i++)
                Insert(items[i]);
        }

        public void Insert(string s)
        {
            var commonPrefix = Prefix(s);
            var current = commonPrefix;

            for (var i = current.Depth; i < s.Length; i++)
            {
                var newNode = new Node(s[i], current.Depth + 1, current);
                current.Children.Add(newNode);
                current = newNode;
            }

            current.Children.Add(new Node('$', current.Depth + 1, current));
        }

        public void Delete(string s)
        {
            if (Search(s))
            {
                var node = Prefix(s).FindChildNode('$');

                while (node.IsLeaf())
                {
                    var parent = node.Parent;
                    parent.DeleteChildNode(node.Value);
                    node = parent;
                } 
            }
        }

}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * StreamChecker obj = new StreamChecker(words);
 * bool param_1 = obj.Query(letter);
 */