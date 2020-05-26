
var no_of_grids = 6
var colors = getRandomColors(no_of_grids);

var grids = document.querySelectorAll(".gridStyle");
var pickedColor = pickColor();
var message = document.getElementById("message");
var newColors = document.getElementById("newColors");
var rgb = document.getElementById("colorDisplay");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

easyButton.addEventListener("click",function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    no_of_grids = 3;
    colors = getRandomColors(no_of_grids);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    for(var j=0; j<grids.length; j++)
    {
        if(colors[j])
            grids[j].style.background = colors[j];
        else
            grids[j].style.display="none";
    }
    
});

hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    no_of_grids = 6;
    colors = getRandomColors(no_of_grids);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    for(var j=0; j<grids.length; j++)
    {
        grids[j].style.background = colors[j];
        grids[j].style.display="block";
    }
});


rgb.textContent = pickedColor;

newColors.addEventListener("click",function(){
    colors = getRandomColors(no_of_grids);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    message.textContent="";
    for(var j=0; j<grids.length; j++)
    {
        grids[j].style.background = colors[j];
    }
    document.getElementById("gameName").style.background = "rgb(218, 186, 105)";
});

for(var i=0; i<grids.length; i++)
{
    grids[i].style.background = colors[i];
    grids[i].addEventListener("click",function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor)
        {
            message.textContent = "Great, You got it right!"
            newColors.textContent = "Play Again";
            document.querySelector("#gameName").style.background = pickedColor;
            for(var j=0; j<grids.length; j++)
            {
                grids[j].style.background = pickedColor;
            }
        }
        else
        {
            this.style.background = "#232323";
            message.textContent = "Please Try Again";
        }
    });
}

function pickColor(){
    var index = Math.floor(Math.random()*colors.length);
    return colors[index];
}

function getRandomColors(length)
{
    var arr=[];

    for(var j=0; j<length; j++)
    {
        value = randomColors();
        arr.push(value);
    }

    return arr;
}

function randomColors()
{
    var r = randomIndex();
    var g = randomIndex();
    var b = randomIndex();

    var value = "rgb(" + r + ", " + g + ", " + b + ")";
    return value;
}

function randomIndex()
{
    return Math.floor(Math.random()*256);
}
