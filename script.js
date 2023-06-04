let wordInput=document.querySelector('.wordinput');
let searchButton=document.querySelector('.searchButton');
let form=document.querySelector('.message');
let details=document.querySelector('.userInformation');
searchButton.addEventListener('click', (e)=>
{
    e.preventDefault();
    let input=wordinput.value;
    console.log(input);
    fetchData(input);
});

async function fetchData(input)
{
    try {

        let response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${input}`);
        let data = await response.json();
        console.log(data);
    //     let paragraph=document.createElement('p');
    //     details.innerHTML="";
    //     paragraph.innerHTML=`name:${data[0].input} </br> `;
    //     //paragraph.innerHTML=`type:${data[0].}`;
    //     details.appendChild(paragraph);
    //     let list=document.createElement('ul');
    //     list.style.listStyleType='none';
    //     let informations=data[0].informations;
    //     for(let information of informations)
    //     {
    //         let listItem=document.createElement('li');
    //         listItem.innerHTML=`${informations.name}</br>`;
    //         //listItem.innerHTML=`${informations.brewery_type}`;
    //     }
    //         list.appendChild(list);
    //         details.appendChild(list);
    //    // console.log(user);}
         let postsResponse = await fetch(`https://api.openbrewerydb.org/v1/breweries/`);
        let posts = await postsResponse.json();
console.log(posts);
        // let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
        // let comments = await commentsResponse.json();

        //console.log(comments[0]);

    } 
    catch(error){
        console.log('error fetching the data');
    }
}
