using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace client-app.src
{
    public class BE
    {
        public static string ToCommaSeperatedList(string[] items, string quote) // Fixed typo
        { 
            StringBuilder qry = new StringBuilder(string.Format("{0}{1}{0}", quote, items[0])); 
            if (items.Length > 1) 
            { 
                for (int i = 1; i < items.Length; i++) 
                { 
                    qry.Append(string.Format(", {0}{1}{0}", quote, items[i])); 
                } 
            }
            return qry.ToString(); 
        }
    }
}