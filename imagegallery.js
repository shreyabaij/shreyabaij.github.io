const imageUrls= [
    "pexels-gosia-k-19682307.jpg",
    "pexels-ellie-burgin-17617625.jpg",
    "pexels-gosia-k-19682307.jpg",
];
let selectedIndex = 0;
let img=document.getElementById("current-image");
img.src= imageUrls[selectedIndex];
function next()
{
    if(selectedIndex<imageUrls.length-1)
    {
        selectedIndex += 1;
        img.src=imageUrls[selectedIndex];

    }
}
function previous()
{
    if(selectedIndex>0)
    {
        selectedIndex -= 1;
        img.src=imageUrls[selectedIndex];
    }
}