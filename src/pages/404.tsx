import React from 'react'
import Layout from '../components/Layout'
import { Head, Landing, Subheader } from '../components/Landing'

const Error = () => {
    React.useEffect(() => {
        if (window) {
            // @ts-ignore Custom DOM Event
            window.plausible('404', {
                props: { path: document.location.pathname },
            })
        }
    }, [])
    return (
        <>
            <Layout title={'Page Not Found'}>
                <Landing>
                    <Head>
                        Error <b>404</b>
                    </Head>
                    <Subheader>This page could not be found</Subheader>
                </Landing>
            </Layout>
        </>
    )
}

export default Error
