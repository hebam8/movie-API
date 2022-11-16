
 let movieItem= document.getElementById('rowdata')
// let movieList=[];
// console.log(movieItem);
// let myHttp= new XMLHttpRequest;
// myHttp.open('GET',"https://api.themoviedb.org/3/trending/all/day?api_key=3cd8b56ef542810e4ef2740a0a5dd4df");
// myHttp.send();
// myHttp.addEventListener('readystatechange',function(){
//     if (myHttp.readyState == 4 && myHttp.status == 200){
//         movieList=JSON.parse(myHttp.response).results;
//         console.log(movieList);
//         displayItems();
//     }
// })
// function displayItems(){
//     let cartoona=``;
//     // console.log(movieList);
//     for (let i=0; i< movieList.length; i++){
//         cartoona += `
//         <div class="col">
//         <div class="movie">
//             <img src="./portfolio-3.jpg" alt="" class="w-100">
//             <h2>hiii</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum.</p>
//         </div> 
    
//     </div>`;
//     }
//     console.log(movieList);
//     movieItem.innerHTML=cartoona;

// }


// let test = `<h1> hiii </h1>`;
// movieItem.innerHTML= test;




// ------------------fetch , async , await ----------------------
let movieList=[];
async function getMovie(category ){
let response= await fetch(`https://api.themoviedb.org/3/${category}/all/day?api_key=3cd8b56ef542810e4ef2740a0a5dd4df`);
let finalResult=await response.json();
 movieList=finalResult.results;
console.log( category ,movieList);
 displayItem()
}
function displayItem(){
    let cartoona=``;
    for (let i=0; i< movieList.length; i++){
        cartoona += `<div class="col">
                <div class="h-100 movie">
                    <img   class="w-100 mb-3" src="https://image.tmdb.org/t/p/w500${movieList[i].poster_path}">
                    <h2 class="text-white ">${movieList[i].title??movieList[i].name}</h2>
                    <p class="small p-3">${movieList[i].overview }</p>
               </div> 
            </div>`
    }
    movieItem.innerHTML=cartoona;
}
( function (){
    getMovie('trending');
})();
 
