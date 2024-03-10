export default async function PostPage ()  {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts",{
next: {
    revalidate: 120 ,},

    });
    const posts =await response.json();
    const postsJSX =posts.map((post)=>{

        return ( <div><h1>{post.title}</h1></div> );
})
    
    
}
 