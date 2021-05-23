import React from 'react'

import {
    StyledBlogCard,
    CardDate,
    CardTitle,
    CardDescription,
    ReadMore,
} from './style'

import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'
import TimeAgo from 'timeago-react'

export const Time = ({ date }) => (
    <TimeAgo datetime={date} locale={'en-GB'} live={true} />
)

export const BlogCard = ({ post }) => {
    return (
        <StyledBlogCard>
            <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}>
                <a>
                    <div>
                        <CardDate>
                            {new Date(post.published_at).toLocaleDateString(
                                'en-GB',
                                {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                }
                            )}{' '}
                            (<Time date={post.published_at} />)
                        </CardDate>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                        <ReadMore>
                            <FeatherIcon icon={'corner-down-right'} size={20} />
                            <span>READ MORE</span>
                        </ReadMore>
                    </div>
                </a>
            </Link>
        </StyledBlogCard>
    )
}
