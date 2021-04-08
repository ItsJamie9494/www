import React from 'react'
import Layout from "../../components/Layout";
import { Head, Landing, Subheader } from "../../components/Landing";
import Link from 'next/link'
import { Container } from '../../components/Page'
import { Button } from '../../components/Button';

const LegalOptOut = () => {
    const [isOptedOut, setIsOptedOut] = React.useState(false)

    React.useEffect(() => {
        let exclusionState = window.localStorage.plausible_ignore == "true"

        if (exclusionState) {
            setIsOptedOut(true)
        } else {
            setIsOptedOut(false)
        }
    })

    const toggleAnalytics = () => {
        let exclusionState = window.localStorage.plausible_ignore == "true"

        if (exclusionState) {
            delete window.localStorage.plausible_ignore
            setIsOptedOut(false)
        } else {
            window.localStorage.plausible_ignore = 'true'
            setIsOptedOut(true)
        }
    }
    return (
        <>
            <Layout title={'Privacy Policy'}>
                <Landing>
                    <Head>Opt-Out of Analytics Collection</Head>
                    <Subheader>You currently {isOptedOut ? 'are opted out of' : 'are opted into'} analytic collection</Subheader>
                </Landing>
                <Container>
                    <p>The privacy of our website visitors is important to us. However, sometimes, you might want to go the extra mile, and completely disable
                        all data collection.</p>
                    <p>To toggle data collection, please click the below button.</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => toggleAnalytics()}>
                            Opt {isOptedOut ? 'in to' : 'out of'} analytics data collection
                        </Button>
                    </div>
                    <p>This works by setting a small flag in LocalStorage. By wiping your LocalStorage or switching browsers, you will need to opt out again. We use LocalStorage
                        to further protect your privacy.
                    </p>
                </Container>
            </Layout>
        </>
    )
}

export default LegalOptOut
