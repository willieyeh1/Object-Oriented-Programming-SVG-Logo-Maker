class Shape{
    constructor(shape,textColor,shapeColor, text){
        this.shape=shape
        this.textColor=textColor
        this.shapeColor=shapeColor
        this.text=text

    }
}
class Circle extends Shape{
    constructor(shape,textColor,shapeColor, text){
    super(shape,textColor,shapeColor, text)
    }
    render(){
        return `<circle cx="50%" cy="50%" r="100" Fill="${this.shapeColor}"/>`
    }
    renderText(){
        return `<text x="46%" y="48%" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape{
    constructor(shape,textColor,shapeColor, text){
    super(shape,textColor,shapeColor, text)
    }
    render(){
        return `<rect x="0" height="100" width="100" fill="${this.shapeColor}" />`
    }
    renderText(){
        return `<text x="38" y="55" fill="${this.textColor}">${this.text}</text>`
    }
}


class Triangle extends Shape{
    constructor(shape,textColor,shapeColor, text){
    super(shape,textColor,shapeColor, text)
    }
    render(){
        return `<polygon points="50, 0 0, 100 100, 100" fill="${this.shapeColor}" />`
    }
    renderText(){
        return `<text x="38" y="60" fill="${this.textColor}">${this.text}</text>`
    }
}

// const myCircle = new Circle(shape,textColor,shapeColor,text)

module.exports = {Circle,Square, Triangle}