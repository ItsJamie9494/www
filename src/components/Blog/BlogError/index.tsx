import React from 'react'

import { Head, Landing, Subheader } from '../../Landing'
import Layout from '../../Layout'

export const BlogError = () => {
    return (
        <>
            <Layout title={`Blog`}>
                <Landing>
                    <Head>Uh, oh!</Head>
                    <Subheader>The blog could not be loaded</Subheader>
                </Landing>
            </Layout>
        </>
    )
}