export default async function detailsId ({params})  {
    const postId=params.postId;
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`,{
next: {
    revalidate: 120 ,},

    });
    const posts =await response.json();
return(
<div><h1>{posts.title}</h1></div>
);  
}