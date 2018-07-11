def addBorder(picture)
    height = picture.length
    width = picture[0].length
    # for each line prepend and append an astrix
    picture.map!{ |line| line.prepend('*'); line += '*'; }
    # line above an below width = width + 2
    new_width = width + 2
    frame = "*" * new_width
    picture.insert(0,frame)
    picture.insert(-1,frame)
    return picture
end
