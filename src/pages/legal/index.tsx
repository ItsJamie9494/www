import React from 'react'
import Layout from "../../components/Layout";
import { Head, Landing, Subheader } from "../../components/Landing";
import Link from 'next/link'

const Legal = () => {
    return (
        <>
            <Layout title={'Legal Notices'}>
                <Landing>
                    <Head>Legal Notices</Head>
                    <Subheader>
                        <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block' }}>
                                <Link href={"/legal/privacy"}>Privacy</Link>
                            </span>
                        </div>
                    </Subheader>
                </Landing>
            </Layout>
        </>
    )
}

export default Legal
