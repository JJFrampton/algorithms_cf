def alternatingSums(a)
    odd = 0
    even = 0
    a.each_with_index do |val, i|
        if i.odd?
            odd += val
        elsif
            even += val
        end
    end
    return [even,odd]
end
