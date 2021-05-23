import React from 'react'
import Layout from "../../components/Layout"
import { BlogHero } from "../../components/Blog/BlogHero"
import {GetStaticProps, GetStaticPaths, GetServerSideProps} from "next"
import { getPosts, getSinglePost } from "../../lib/blog"
import { Time } from "../../components/Blog/BlogCard"
import Link from 'next/link'
import { PostContainer, PostContent, PostImage, PostMetadata } from "../../components/Post"
import { Comments } from '../../components/Comments'
import { Head, Landing, Subheader } from '../../components/Landing'
import { BlogError } from '../../components/Blog/BlogError'

const BlogPost = (props) => {
    React.useEffect(() => {
        if (document && window && !props.notFound) {
            // @ts-ignore
            initComments({
                node: document.getElementById("comments-section"),
                defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
                serverName: "cactus.chat",
                siteName: "TREVORTHALACKER",
                commentSectionId: props.post.id,
            })
        }
    })

    if (props.notFound) {
        return (
            <BlogError />
        )
    }
    return (
        <>
            <Layout title={`${props.post.title} | Blog`} isBlogPost postID={props.post.id}>
                <div style={{ marginTop: 100 }}/>
                <BlogHero />
                <PostContainer>
                    <PostMetadata style={{ marginBottom: props.post.feature_image ? '' : '2rem' }}>
                        <h1>{props.post.title}</h1>
                        <div style={{ display: 'grid', gridAutoFlow: 'column' }}>
                            <p>{new Date(props.post.published_at).toLocaleDateString('en-GB', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })} (<Time date={props.post.published_at} />)</p>
                            {props.post.tags.primary_tag && (<span style={{ display: 'inline-block', marginLeft: 10 }}>
                                <Link href={`/blog/tags/[slug]`} as={`/blog/tags/${props.post.primary_tag.slug}`}>
                                    <a style={{ display: 'inline-block' }}>
                                        <p style={{ color: '#0070f3' }}>{props.post.primary_tag.name}</p>
                                    </a>
                                </Link>
                            </span>)}
                        </div>

                    </PostMetadata>
                    {props.post.feature_image ? (
                        <PostImage src={props.post.feature_image} />
                    ) : null}

                    <PostContent dangerouslySetInnerHTML={{ __html: props.post.html }} />
                    <Comments id={"comments-section"} />
                </PostContainer>
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const post = await getSinglePost(context.params.slug)

    if (!post) {
        return {
            props: {
                notFound: true
            }
        }
    }

    return {
        props: { post }
    }
}

export default BlogPost
