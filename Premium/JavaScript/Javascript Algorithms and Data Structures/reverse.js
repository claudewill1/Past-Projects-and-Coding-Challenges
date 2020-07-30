/**reverse
 * Write a recursive function called reverse which accepts a string
 * and returns a new string in reverse.
 * 
 * Examples:
 *  reverse('awesome') // 'emosewa'
    reverse('rithmschool') // 'loohcsmhtir'
 */

 const reverse = s => (!s) ? s : (reverse(s.substring(1)) + s.charAt(0));


 console.log(reverse('awesome'))
 console.log(reverse('rithmschool'))