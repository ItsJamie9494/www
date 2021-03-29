import React from "react"
import Layout from "../components/Layout"
import { Landing, Head, Subheader } from "../components/Landing"

function Error({ statusCode }) {
    return (
        <Layout title={statusCode ? statusCode : 'Client Error'}>
            <Landing>
                <Head>{ statusCode ? statusCode : 'Client Error'}</Head>
                <Subheader>Please check back later.</Subheader>
            </Landing>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
