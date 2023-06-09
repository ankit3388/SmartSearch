const acessKey="TZEA6o0NNiC9ekl0I1ieYYIHS33R1UosVIGDWYeEahU"

const formE1=document.querySelector("form")
const inputE1=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore=document.getElementById("more-button")
console.log(showMore);

let inputData="";
let page=1;
async function searchImages()
{
    inputData=inputE1.value;
    //const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&clint_id=${acessKey}`;
    const url=`https://api.unsplash.com/search/photos?query=${inputData}&client_id=TZEA6o0NNiC9ekl0I1ieYYIHS33R1UosVIGDWYeEahU`

    const response=await fetch(url)
    const data=await response.json()

    const results=data.results
    console.log(results);

    if(page===1)
    {
        searchResults.innerHTML=""
    }
    results.map((result)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement('a');
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });
    page++
    if(page>1)
    {
        showMore.style.display="block";
    }
}
formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
});
showMore.addEventListener("click",()=>{
    searchImages();
});