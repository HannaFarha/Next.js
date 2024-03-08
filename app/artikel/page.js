import Link from "next/link";
export default function ArticlePage ()  {
    return ( <div><h1>Article Page</h1>
    <Link href="/posts">
    <button>Take me to the posts page</button>
    </Link>
    </div> );
}