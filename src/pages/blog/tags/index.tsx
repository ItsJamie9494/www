import React from 'react'
import Layout from "../../../components/Layout"
import { Landing } from "../../../components/Landing"
import {GetServerSideProps, GetStaticProps} from "next"
import { getTags } from "../../../lib/blog"
import { BlogHero } from "../../../components/Blog/BlogHero"
import { TagCard } from "../../../components/Blog/TagCard"
import { BlogEnding } from "../../../components/Blog/BlogEnding"

const BlogTags = (props) => {
    // TODO support tag searching
    return (
        <>
            <Layout title={'Blog'}>
                <div style={{ marginTop: 100 }}/>
                <BlogHero subTitle={"Tags"} link={'/blog/tags'} />
                {props.tags.map((tag) => (
                    <TagCard tag={tag} key={tag.id} />
                ))}
                <BlogEnding />
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const tags = await getTags()

    if (!tags) {
        return {
            notFound: true,
        }
    }

    return {
        props: { tags }
    }
}

export default BlogTags
