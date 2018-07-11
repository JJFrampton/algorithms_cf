def palindromeRearranging(inputString)
       arr = inputString.chars.sort
       ln = arr.length
       if ln.even?
              if arr.detect{ |e| arr.count(e).odd? }
                     return false
              end
       else
              odd_val = arr.detect{ |e| arr.count(e).odd? }
              arr.delete(odd_val)
              if arr.detect{ |e| arr.count(e).odd? }
                     return false
              end
       end
       return true
end
