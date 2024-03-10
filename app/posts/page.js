import Link from "next/link";

export default async function PostPage ()  {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts",{
next: {
    revalidate: 120 ,},

    });
    const posts =await response.json();
    //console.log(posts);
    const postsJSX =posts.map((post)=>{

        return ( <div style={{width :"70%",
    backgroundColor:"white",
    borderRadius:"10px",
marginTop:"20px"}}><Link href={`/posts/${post.id}`} > <h1>{post.body}</h1></Link></div> );
})
    
    return(<div style={{
        display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"

}}>{postsJSX}</div>)
}

 