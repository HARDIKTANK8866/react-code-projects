import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-wrap -mx-2'>
                {posts.map((post) => (
                    <div key={post.$id} className=''>
                        <PostCard {...post} />
                    </div>
                ))}
                </div>
            </div>
            </Container>
    </div>
  )
}

export default AllPosts