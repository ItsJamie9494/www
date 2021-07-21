import React from 'react'
import Layout from '../../components/Layout'
import { Head, Landing, Subheader } from '../../components/Landing'
import Link from 'next/link'
import { Container } from '../../components/Page'
import config from '../../config'

const Legal = () => {
    return (
        <>
            <Layout title={'Privacy Policy'}>
                <Landing>
                    <Head>Privacy Policy</Head>
                    <Subheader>Last Modified 8 April, 2021</Subheader>
                </Landing>
                <Container>
                    <p>
                        The privacy of our website visitors is important to us
                        so we do not track any individual people. As a visitor
                        to the website:
                        <ul>
                            <li>No personal information is collected</li>
                            <li>
                                No information is shared with, sent to or sold
                                to third-parties
                            </li>
                            <li>
                                No information is shared with advertising
                                companies
                            </li>
                            <li>
                                No information is mined and harvested for
                                personal and behavioral trends
                            </li>
                            <li>No information is monetized</li>
                            <li>
                                Cookies are used purely for theme saving. If you
                                don't enable dark theme, no cookies are ever
                                stored.
                            </li>
                        </ul>
                        We run our own analytics script to collect some
                        anonymous usage data for statistical purposes. The goal
                        is to track overall trends in our website traffic, it is
                        not to track individual visitors. All the data is in
                        aggregate only. No personal data is collected. Data
                        collected includes websites that send us traffic, pages
                        on our site that are visited, duration of the visits,
                        information from the devices (device type, operating
                        system, country and browser) used during the visit and
                        more.
                    </p>
                    <p>
                        If you would like to opt-out of this analytics
                        collection, please visit{' '}
                        <span style={{ display: 'inline-flex' }}>
                            <Link href={'/legal/opt-out'}>
                                <a>https://{config.hostname}/legal/opt-out</a>
                            </Link>
                        </span>
                    </p>

                    <h2>Data Collection Policy</h2>
                    <p>
                        We do not track people across their devices and across
                        websites and apps that they visit. All the data is
                        isolated to a single day, single website and single
                        device only. There is no way to know whether the same
                        person visits a site from more than one device or visits
                        another website. The goal of using analytics is to track
                        overall trends in your website traffic, it is not to
                        track individual visitors. We don’t use analytics
                        cookies, and we don’t generate any persistent
                        identifiers All the site measurement is carried out
                        absolutely anonymously. We measure only the most
                        essential data points and nothing else. All the metrics
                        we do collect fit on one single page. Here is the
                        complete list of what we collect and store:
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Data Point</th>
                                <th>Example</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b>Page URL</b>
                                </td>
                                <td>https://{config.hostname}</td>
                                <td>
                                    We track the page URL of each page view on
                                    this website. We use this to show us which
                                    pages have been viewed and how many times a
                                    particular page has been viewed.
                                    <br />
                                    <br />
                                    The hostname and path are collected. Query
                                    parameters are discarded, except for these
                                    special query parameters:
                                    <code>ref=</code>, <code>source=</code>,{' '}
                                    <code>utm_source=</code>,
                                    <code>utm_medium=</code> and{' '}
                                    <code>utm_campaign=</code>.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>HTTP Referer</b>
                                </td>
                                <td>https://twitter.com</td>
                                <td>
                                    We use the referrer string to show us the
                                    number of visitors referred to this website
                                    from links on other sites.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Browser</b>
                                </td>
                                <td>Chrome 86.0</td>
                                <td>
                                    We use this to show us what browsers and
                                    browser version numbers people use when
                                    visiting this website. This is derived from
                                    the User-Agent HTTP header. The full
                                    User-Agent is discarded.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Operating System</b>
                                </td>
                                <td>GNU/Linux x64</td>
                                <td>
                                    We use this to show us what operating
                                    systems people use when visiting this
                                    website. We show the brand of the operating
                                    system and the version number, if found.
                                    This is derived from the User-Agent HTTP
                                    header. The full User-Agent is discarded.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Device Type</b>
                                </td>
                                <td>Desktop</td>
                                <td>
                                    We use this to show us what devices people
                                    use when visiting this website. This is
                                    derived from window.innerWidth. The actual
                                    width of the browser in pixels is discarded.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Visitor Country</b>
                                </td>
                                <td>United Kingdom</td>
                                <td>
                                    We look up the visitor’s country using their
                                    IP address. We do not track anything more
                                    granular than the country of origin, and the
                                    IP address of the visitor is discarded. We
                                    never store IP addresses in our database or
                                    logs.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        If you do not agree to any part of this policy, the only
                        action you can take would be to cease use of this
                        website.
                    </p>
                </Container>
            </Layout>
        </>
    )
}

export default Legal
