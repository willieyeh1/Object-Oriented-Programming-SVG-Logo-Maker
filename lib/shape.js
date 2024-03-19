class Shape{
    constructor(shape,textColor,shapeColor, text){
        this.shape=shape
        this.textColor=textColor
        this.shapeColor-shapeColor
        this.text=text

    }
}
class Circle extends Shape{
    constructor(shape,textColor,shapeColor, text){
    super(shape,textColor,shapeColor, text)
    }
    render(){
        return `<circle cx="25" cy="75" r="20" Fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape{
    constructor(shape,textColor,shapeColor, text){
    super(shape,textColor,shapeColor, text)
    }
    render(){
        return `<circle cx="25" cy="75" r="20" Fill="${this.shapeColor}"/>`
    }
    renderText(){
        return `TEXT`
    }
}

class Triangle extends Shape{
    constructor(shape,textColor,shapeColor, text){
    super(shape,textColor,shapeColor, text)
    }
    render(){
        return `<circle cx="25" cy="75" r="20" Fill="${this.shapeColor}"/>`
    }
}

// const myCircle = new Circle(shape,textColor,shapeColor,text)

module.exports = {Circle,Square, Triangle}