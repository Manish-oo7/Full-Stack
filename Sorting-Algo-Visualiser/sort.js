
var lines = document.querySelector("#container");

var values = [];

//Function to push new random values to array

function pushRandomValues()
{
    for(var i=0; i<48; i++)
    {
        values.push(randomIntFromInterval(10,350));
    }
}

//Function to generate bar-graph

function generateNewGraph()
{
    for(var i=0; i<values.length; i++)
    {
        var line = document.createElement('div');
        line.classList.add("lines");
        line.style.height=values[i]+"px";
        line.innerText=values[i];
        lines.appendChild(line);
        // lines[i].style.height=values[i]+"px";
    }
}

//Function to generate random values in a given range
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min) + min);
}

//Function for getting random rgb values
function randomRGB()
{
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    var randomColor = "rgb("+r+", "+g+", "+b+")";
    return randomColor;
}

//Function for Selection Sort
function selectionSort()
{
    //alert("sorting");
    var div = document.querySelectorAll(".lines");
    var k=0;
        setInterval(function(){
            if(k<=values.length-1)
            {
                // div[k].style.background="red";
                var randomCol = randomRGB();
            for(var j=k+1; j<values.length; j++)
            {
                if(values[k]>values[j])
                {
                    var temp = values[k];
                    values[k] = values[j];
                    values[j] = temp;
                    div[k].style.height=values[k]+"px";
                    div[k].innerText=values[k];
                    // div[k].style.background="green";
                    div[j].style.height=values[j]+"px";
                    // div[j].classList.add("selected");
                    // var flag=true;
                    // setTimeout(blink(j,flag),200)
                    div[j].style.background=randomCol;
                    div[j].innerText=values[j];
                }
            }

            div[k].style.height=values[k]+"px";
            div[k].style.background="lightblue";
            k++;
            console.log(values[k]);
            }
            else
            {
                clearInterval();
            }
        },100);
}

//Function For Bubble Sort 

function bubbleSort()
{
    var div = document.querySelectorAll(".lines");
    var k=0;
        setInterval(function(){
            if(k<values.length)
            {
                var randomCol = randomRGB();
                for(var j=0; j<values.length-k-1; j++)
                {
                    if(values[j]>values[j+1])
                    {
                        var temp = values[j];
                        values[j] = values[j+1];
                        values[j+1] = temp;
                        div[j].style.height=values[j]+"px";
                        div[j].innerText=values[j];
                        div[j+1].style.height=values[j+1]+"px";
                        div[j+1].style.background=randomCol;
                        div[j+1].innerText=values[j+1];
                    }
                }
                //styling the last element, since bubbleSort
                div[values.length-k-1].style.height=values[values.length-k-1]+"px";
                div[values.length-k-1].style.background="lightblue";
                k++;
                // console.log(values[k]);
            }
            else
            {
                clearInterval();
            }
        },100);
}

//Function For Merge Sort
// function merge(){
//     let left=0;
//     let right=values.length-1; 
//     mergeSort(values,left,right);
// }

// function mergeSort(values,left,right){

//     if(left<right)
//     {
//         var mid = (left+right)/2;
//         mid = parseInt(mid);
//         mergeSort(values,left,mid);
//         mergeSort(values,mid+1,right);
//         values = mergeElements(values,left,mid,right);
//     }
// }

// var merged = [];

// function mergeElements(arr,l,mid,r){
//     // console.log(l+" "+mid+" "+r);
//     var div = document.getElementsByClassName("lines");
//     // div[0].style.background="red";

//     let n1 = (mid-l)+1;
//     let n2 = (r-mid);

//     var L=[],R=[];

//     for(var i=0; i<n1; i++)
//     {
//         L.push(values[l+i]);
//     }
    
//     for(var i=0; i<n2; i++)
//     {
//         R.push(values[mid+i+1]);
//     }
//     var j=0,k=0,m=l;
//     // console.log(L+" "+R);

//     //setInterval(function(){
//         while(j<n1 && k<n2)
//         {
//             if(L[j]<R[k])
//             {
//             values[m]=L[j];
//             j++;
//             div[m].style.background="red";
//             div[m].style.height=values[m]+"px";
//             div[m].innerText=values[m];
//             }
//             else
//             {
//                 values[m]=R[k];
//                 k++;
//                 div[m].style.background="green";
//                 div[m].style.height=values[m]+"px";
//                 div[m].innerText=values[m];
//             }
//             m++;
//             // console.log("hello world");
//         }
//         // else
//         // {
//         //     clearInterval();
//         // }
//     //},10);
//         while(j<n1)
//         {
//             values[m]=L[j];
//             j++;
//             m++;
//             // div[m].style.background="red";
//             // div[m].style.height=values[m]+"px";
//         }
//         while(k<n2)
//         {
//             values[m]=R[k];
//             k++;
//             m++;
//             // div[m].style.background="green";
//             // div[m].style.height=values[m]+"px";
//         }
//         // console.log(values);
//     return values;
// }

//Adding event listners to buttons

var btnSelectionSort = document.getElementById("selectionSort");

btnSelectionSort.addEventListener("click",function(){
    document.getElementById("about").style.display="block";
    document.getElementById("selectionContainer").style.display="block";
    document.getElementById("bubbleContainer").style.display="none";
    document.getElementById("instruction").style.display="none";
    document.getElementById("mergeContainer").style.display="none";
    // document.getElementById("selectionContainer").style.transition="all 2s linear";

    selectionSort();
    // document.querySelector("#about").classList.toggle("remove");
});

document.getElementById("bubbleSort").addEventListener("click",function(){
    document.getElementById("about").style.display="block";
    document.getElementById("selectionContainer").style.display="none";
    document.getElementById("instruction").style.display="none";
    document.getElementById("bubbleContainer").style.display="block";
    document.getElementById("mergeContainer").style.display="none";
    bubbleSort();
});

// document.getElementById("mergeSort").addEventListener("click",function(){
//     document.getElementById("about").style.display="block";
//     document.getElementById("selectionContainer").style.display="none";
//     document.getElementById("bubbleContainer").style.display="none";
//     document.getElementById("instruction").style.display="none";
//     document.getElementById("mergeContainer").style.display="block";
//     merge();
//     // document.querySelector("#about").classList.toggle("remove");
// });

document.getElementById("newArray").addEventListener("click",function(){
    values = [];
    pushRandomValues();
    var ran = randomRGB();

    var div = document.getElementsByClassName("lines");
    for(var i=0; i<values.length; i++)
    {
        div[i].style.height=values[i]+"px";
        div[i].innerText=values[i];
        div[i].style.background=ran;
    }

});


pushRandomValues();
generateNewGraph();




// function selectionSort()
// {
//     //alert("sorting");
//     var div = document.querySelectorAll(".lines");
//     var k=0,j=0;
//         setInterval(function(){
//             if(k<=values.length-1)
//             {
//                 j=k+1;
//                 setInterval(function(){
//                     if(j<values.length)
//                     {
//                         if(values[k]>values[j])
//                         {
//                             var temp = values[k];
//                             values[k] = values[j];
//                             values[j] = temp;
//                             div[k].style.height=values[k]+"px";
//                             div[k].innerText=values[k];
//                             div[k].style.background="green";
//                             div[j].style.height=values[j]+"px";
//                             div[j].classList.add("selected");
//                             div[j].innerText=values[j];
//                         }
//                         j++;
//                     }
//                     else
//                     {
//                         clearInterval();
//                     }
//                 },1000);
//             div[k].style.height=values[k]+"px";
//             div[k].style.background="lightblue";
//             k++;
//             console.log(values[k]);
//             }
//             else
//             {
//                 clearInterval();
//             }
//         },1500);
// }
