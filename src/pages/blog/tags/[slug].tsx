import React from 'react'
import Layout from "../../../components/Layout"
import { Landing } from "../../../components/Landing"
import { GetStaticProps, GetStaticPaths } from "next"
import { getTags, getSingleTag, getTagPosts } from "../../../lib/blog"
import { BlogHero } from "../../../components/Blog/BlogHero"
import { BlogCard } from "../../../components/Blog/BlogCard"
import { BlogEnding } from "../../../components/Blog/BlogEnding"

const BlogTag = (props) => {
    // TODO support tag searching
    return (
        <>
            <Layout title={'Blog'}>
                <div style={{ marginTop: 100 }}/>
                <BlogHero subTitle={props.tag.name} link={'/blog/tags'}/>
                {props.posts.map((post) => (
                    <BlogCard post={post} key={post.id} />
                ))}
                <BlogEnding />
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const tags = await getTags()

    const paths = tags.map((tag) => ({
        params: {
            slug: tag.slug
        }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const tag = await getSingleTag(context.params.slug)
    const posts = await getTagPosts(context.params.slug)

    if (!tag) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            tag,
            posts
        }
    }
}

export default BlogTag
