def arrayChange(inputArray)
    total = 0
    inputArray.each_with_index do |v, i|
        if i > 0
            if v <= inputArray[i-1]
                new = inputArray[i-1] + 1
                total += new - v
                inputArray[i] = new
            end
        end
    end
    return total
end
