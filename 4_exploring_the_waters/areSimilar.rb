def areSimilar(a, b)
    return true unless a != b
    return false unless a.sort == b.sort
    issues = {}
    issues['count'] = 0
    issues['locations'] = []
    i = 0
    while i < a.length
        if a[i] != b[i]
            issues['count'] += 1
            issues['locations'].push(i)
        end
        return false unless issues['count'] <= 2
        i += 1
    end
    if issues['count'] == 2
        one = a[issues['locations'][0]]
        two = a[issues['locations'][1]]
        a[issues['locations'][0]] = two
        a[issues['locations'][1]] = one
        if a == b
            return true
        else
            return false
        end
    else
        return false
    end
end
