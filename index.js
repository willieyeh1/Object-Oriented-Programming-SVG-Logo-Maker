const fs = require('fs')
const inquirer = require('inquirer')
const {Circle,Square, Triangle} = require('./lib/shape');

inquirer
    .prompt([
        {
            type: "input",
            message: "What text you want on the image (up to three characters)",
            name: "text",
        },
        {
            type: "input",
            message: "What is the text color you want",
            name: "textColor",
        },
        {
            type: "list",
            message: "What is the shape you want",
            choices: ['Circle', 'Triangle', 'Square' ],
            name: "shape",
        },
        {
            type: "input",
            message: "What is the shape color you want",
            name: "shapeColor",
        },
    ])
    .then((data) => {
        let myShape
        if (data.shape==='Circle'){
            myShape = new Circle(data.shape,data.textColor,data.shapeColor,data.text)
        }else if (data.shape==='Triangle'){
            myShape = new Triangle(data.shape,data.textColor,data.shapeColor,data.text)
        }else if (data.shape==='Square'){
            myShape = new Square(data.shape,data.textColor,data.shapeColor,data.text)
        }
        const svg= 
        `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${myShape.render()}
        ${myShape.renderText()}
        </svg>
        `
        fs.writeFile(__dirname+'/examples/samplelogo.svg', svg, (err) => {
            err ? console.error(err) : console.log('LogoGenerated)');
        });
        
    });


