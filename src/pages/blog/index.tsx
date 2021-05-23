import React from 'react'
import Layout from "../../components/Layout";
import {GetServerSideProps, GetStaticProps} from "next";
import { getPosts } from "../../lib/blog";
import { BlogEnding } from "../../components/Blog/BlogEnding"
import { BlogCard } from '../../components/Blog/BlogCard'
import { BlogHero } from "../../components/Blog/BlogHero"
import { useGlobalState } from "../../globals"
import { Head, Landing, Subheader } from '../../components/Landing';
import { BlogError } from '../../components/Blog/BlogError';

const Blog = (props) => {
    const [postsArray, setPostsArray] = useGlobalState('blogPostArray')
    const [posts, setPosts] = React.useState([])
    const [isSearch, useSearch] = useGlobalState('isSearch')
    const [isResults, useResults] = useGlobalState('isResults')

    React.useEffect(() => {
        if (postsArray[0]) { // make sure the posts exist
            if (postsArray[0].obj != undefined) { // make sure they aren't undefined
                setPosts(postsArray)
                useSearch(true)
            } else {
                setPosts(props.posts)
            }
        } else {
            setPosts(props.posts)
        }
    })
    
    if (props.notFound) {
        return (
            <BlogError />
        )
    }
    return (
        <>
            <Layout title={'Blog'}>
                <div style={{ marginTop: 100 }}/>
                <BlogHero posts={props.posts} isListing />
                {isResults && posts.map((post) => (
                    <BlogCard post={isSearch ? post.obj : post} key={isSearch ? post.obj.id : post.id} />
                ))}
                {!isResults && (
                    <p>No Results Found</p>
                )}
                <BlogEnding />
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await getPosts()

    if (!posts) {
        return {
            props: {
                notFound: true
            }
        }
    }

    return {
        props: { posts }
    }
}

export default Blog
