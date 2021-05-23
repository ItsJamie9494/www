import React from 'react'
import Layout from '../../../components/Layout'
import { GetServerSideProps } from 'next'
import { getSingleTag, getTagPosts } from '../../../lib/blog'
import { BlogHero } from '../../../components/Blog/BlogHero'
import { BlogCard } from '../../../components/Blog/BlogCard'
import { BlogEnding } from '../../../components/Blog/BlogEnding'
import { BlogError } from '../../../components/Blog/BlogError'

const BlogTag = (props) => {
    // TODO support tag searching
    if (props.notFound) {
        return <BlogError />
    }
    return (
        <>
            <Layout title={'Blog'}>
                <div style={{ marginTop: 100 }} />
                <BlogHero subTitle={props.tag.name} link={'/blog/tags'} />
                {props.posts.map((post) => (
                    <BlogCard post={post} key={post.id} />
                ))}
                <BlogEnding />
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const tag = await getSingleTag(context.params.slug)
    const posts = await getTagPosts(context.params.slug)

    if (!tag) {
        return {
            props: {
                notFound: true,
            },
        }
    }

    return {
        props: {
            tag,
            posts,
        },
    }
}

export default BlogTag
