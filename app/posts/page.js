export default async function PostPage ()  {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts",{
next: {
    revalidate: 120 ,},

    });
    const posts =await response.json();
    //console.log(posts);
    const postsJSX =posts.map((post)=>{

        return ( <div><h1>{post.body}</h1></div> );
})
    
    return(<div>{postsJSX}</div>)
}

 