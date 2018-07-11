def sortByHeight(a)
    b = a.dup
    no_trees = a.delete_if { |x| x == -1}
    no_trees = no_trees.sort
    a = b.map{|x| x == -1 ? x : no_trees.shift}
    return a
end
