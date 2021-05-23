import React from 'react'
import Head from 'next/head'
import config from '../config'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    padding: 5px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    user-select: none;
`

const Wrapper = styled.div`
    background-color: #fff;
    padding-top: 50px;
    padding-bottom: 50px;
    font: 14px/1.5 Helvetica, Arial, sans-serif;
    color: #727272;
    font-weight: 400;
    width: 860px;
    margin: 0 auto;

    .highlight table td {
        padding: 5px;
    }

    .highlight table pre {
        margin: 0;
    }

    .highlight .cm {
        color: #999988;
        font-style: italic;
    }

    .highlight .cp {
        color: #999999;
        font-weight: bold;
    }

    .highlight .c1 {
        color: #999988;
        font-style: italic;
    }

    .highlight .cs {
        color: #999999;
        font-weight: bold;
        font-style: italic;
    }

    .highlight .c,
    .highlight .cd {
        color: #999988;
        font-style: italic;
    }

    .highlight .err {
        color: #a61717;
        background-color: #e3d2d2;
    }

    .highlight .gd {
        color: #000000;
        background-color: #ffdddd;
    }

    .highlight .ge {
        color: #000000;
        font-style: italic;
    }

    .highlight .gr {
        color: #aa0000;
    }

    .highlight .gh {
        color: #999999;
    }

    .highlight .gi {
        color: #000000;
        background-color: #ddffdd;
    }

    .highlight .go {
        color: #888888;
    }

    .highlight .gp {
        color: #555555;
    }

    .highlight .gs {
        font-weight: bold;
    }

    .highlight .gu {
        color: #aaaaaa;
    }

    .highlight .gt {
        color: #aa0000;
    }

    .highlight .kc {
        color: #000000;
        font-weight: bold;
    }

    .highlight .kd {
        color: #000000;
        font-weight: bold;
    }

    .highlight .kn {
        color: #000000;
        font-weight: bold;
    }

    .highlight .kp {
        color: #000000;
        font-weight: bold;
    }

    .highlight .kr {
        color: #000000;
        font-weight: bold;
    }

    .highlight .kt {
        color: #445588;
        font-weight: bold;
    }

    .highlight .k,
    .highlight .kv {
        color: #000000;
        font-weight: bold;
    }

    .highlight .mf {
        color: #009999;
    }

    .highlight .mh {
        color: #009999;
    }

    .highlight .il {
        color: #009999;
    }

    .highlight .mi {
        color: #009999;
    }

    .highlight .mo {
        color: #009999;
    }

    .highlight .m,
    .highlight .mb,
    .highlight .mx {
        color: #009999;
    }

    .highlight .sb {
        color: #d14;
    }

    .highlight .sc {
        color: #d14;
    }

    .highlight .sd {
        color: #d14;
    }

    .highlight .s2 {
        color: #d14;
    }

    .highlight .se {
        color: #d14;
    }

    .highlight .sh {
        color: #d14;
    }

    .highlight .si {
        color: #d14;
    }

    .highlight .sx {
        color: #d14;
    }

    .highlight .sr {
        color: #009926;
    }

    .highlight .s1 {
        color: #d14;
    }

    .highlight .ss {
        color: #990073;
    }

    .highlight .s {
        color: #d14;
    }

    .highlight .na {
        color: #008080;
    }

    .highlight .bp {
        color: #999999;
    }

    .highlight .nb {
        color: #0086b3;
    }

    .highlight .nc {
        color: #445588;
        font-weight: bold;
    }

    .highlight .no {
        color: #008080;
    }

    .highlight .nd {
        color: #3c5d5d;
        font-weight: bold;
    }

    .highlight .ni {
        color: #800080;
    }

    .highlight .ne {
        color: #990000;
        font-weight: bold;
    }

    .highlight .nf {
        color: #990000;
        font-weight: bold;
    }

    .highlight .nl {
        color: #990000;
        font-weight: bold;
    }

    .highlight .nn {
        color: #555555;
    }

    .highlight .nt {
        color: #000080;
    }

    .highlight .vc {
        color: #008080;
    }

    .highlight .vg {
        color: #008080;
    }

    .highlight .vi {
        color: #008080;
    }

    .highlight .nv {
        color: #008080;
    }

    .highlight .ow {
        color: #000000;
        font-weight: bold;
    }

    .highlight .o {
        color: #000000;
        font-weight: bold;
    }

    .highlight .w {
        color: #bbbbbb;
    }

    .highlight {
        background-color: #f8f8f8;
    }

    body {
        background-color: #fff;
        padding: 50px;
        font: 14px/1.5 'Noto Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
        color: #727272;
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #222;
        margin: 0 0 20px;
    }

    p,
    ul,
    ol,
    table,
    pre,
    dl {
        margin: 0 0 20px;
    }

    h1,
    h2,
    h3 {
        line-height: 1.1;
    }

    h1 {
        font-size: 28px;
    }

    h2 {
        color: #393939;
    }

    h3,
    h4,
    h5,
    h6 {
        color: #494949;
    }

    a {
        color: #267cb9;
        text-decoration: none;
    }

    a:hover,
    a:focus {
        color: #069;
        font-weight: bold;
    }

    a small {
        font-size: 11px;
        color: #777;
        margin-top: -0.3em;
        display: block;
    }

    a:hover small {
        color: #777;
    }

    .wrapper {
        width: 860px;
        margin: 0 auto;
    }

    blockquote {
        border-left: 1px solid #e5e5e5;
        margin: 0;
        padding: 0 0 0 20px;
        font-style: italic;
    }

    code,
    pre {
        font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal,
            Consolas, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;
        color: #333;
    }

    pre {
        padding: 8px 15px;
        background: #f8f8f8;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        text-align: left;
        padding: 5px 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    dt {
        color: #444;
        font-weight: 700;
    }

    th {
        color: #444;
    }

    img {
        max-width: 100%;
    }

    header {
        width: 270px;
        float: left;
        position: fixed;
        -webkit-font-smoothing: subpixel-antialiased;
    }

    header ul {
        list-style: none;
        height: 40px;
        padding: 0;
        background: #f4f4f4;
        border-radius: 5px;
        border: 1px solid #e0e0e0;
        width: 270px;
    }

    header li {
        width: 89px;
        float: left;
        border-right: 1px solid #e0e0e0;
        height: 40px;
    }

    header li:first-child a {
        border-radius: 5px 0 0 5px;
    }

    header li:last-child a {
        border-radius: 0 5px 5px 0;
    }

    header ul a {
        line-height: 1;
        font-size: 11px;
        color: #676767;
        display: block;
        text-align: center;
        padding-top: 6px;
        height: 34px;
    }

    header ul a:hover,
    header ul a:focus {
        color: #675c5c;
        font-weight: bold;
    }

    header ul a:active {
        background-color: #f0f0f0;
    }

    strong {
        color: #222;
        font-weight: 700;
    }

    header ul li + li + li {
        border-right: none;
        width: 89px;
    }

    header ul a strong {
        font-size: 14px;
        display: block;
        color: #222;
    }

    section {
        width: 500px;
        float: right;
        padding-bottom: 50px;
    }

    small {
        font-size: 11px;
    }

    hr {
        border: 0;
        background: #e5e5e5;
        height: 1px;
        margin: 0 0 20px;
    }

    footer {
        width: 270px;
        float: left;
        position: fixed;
        bottom: 50px;
        -webkit-font-smoothing: subpixel-antialiased;
    }

    @media print, screen and (max-width: 960px) {
        div.wrapper {
            width: auto;
            margin: 0;
        }
        header,
        section,
        footer {
            float: none;
            position: static;
            width: auto;
        }
        header {
            padding-right: 320px;
        }
        section {
            border: 1px solid #e5e5e5;
            border-width: 1px 0;
            padding: 20px 0;
            margin: 0 0 20px;
        }
        header a small {
            display: inline;
        }
        header ul {
            position: absolute;
            right: 50px;
            top: 52px;
        }
    }
    @media print, screen and (max-width: 720px) {
        body {
            word-wrap: break-word;
        }
        header {
            padding: 0;
        }
        header ul,
        header p.view {
            position: static;
        }
        pre,
        code {
            word-wrap: normal;
        }
    }
    @media print, screen and (max-width: 480px) {
        body {
            padding: 15px;
        }
        header ul {
            width: 99%;
        }
        header li,
        header ul li + li + li {
            width: 33%;
        }
    }
    @media print {
        body {
            padding: 0.4in;
            font-size: 12pt;
            color: #444;
        }
    }
`

const Index = () => {
    const [page, setPage] = React.useState('homepage')
    const [externalPage, setExternalPage] = React.useState('')
    const router = useRouter()

    return (
        <>
            <Head>
                <title>The Archive | Trevor Thalacker</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name={'description'} content={config.description} />
            </Head>
            <Overlay onClick={() => router.push('/')}>
                This is a fully-working archive of my original website. This is
                purely for historical purposes. Most of these pages were last
                updated in 2018, for example. Congratulations on finding this!
            </Overlay>
            <Wrapper>
                <header>
                    <a
                        href={'#'}
                        onClick={() => {
                            setPage('external')
                            setExternalPage('https://awesometech10.github.io')
                        }}
                    >
                        <h1>AwesomeTech10</h1>
                    </a>
                    <p>My little place on the world wide web</p>

                    <p className={'view'}>
                        <a
                            href={'#'}
                            onClick={() => {
                                setPage('external')
                                setExternalPage(
                                    'https://github.com/AwesomeTech10/AwesomeTech10.github.io'
                                )
                            }}
                        >
                            View the Project on GitHub <small></small>
                        </a>
                    </p>

                    <p className="view">
                        <a
                            href={'#'}
                            onClick={() => {
                                setPage('external')
                                setExternalPage(
                                    'https://github.com/AwesomeTech10/AwesomeTech10.github.io'
                                )
                            }}
                        >
                            View this website's source on GitHub <small></small>
                        </a>
                    </p>
                    <p className="view">All the pages on this site</p>
                    <ul>
                        <li>
                            <p className="view">
                                <a href="#" onClick={() => setPage('homepage')}>
                                    Homepage
                                </a>
                            </p>
                        </li>
                        <li>
                            <p className="view">
                                <a href="#" onClick={() => setPage('projects')}>
                                    My Cool Projects
                                </a>
                            </p>
                        </li>
                        <li>
                            <p className="view">
                                <a href="#" onClick={() => setPage('markdown')}>
                                    Markdown Guide
                                </a>
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p className="view">
                                <a href="#" onClick={() => setPage('blog')}>
                                    The AwesomeTech10 Blog
                                </a>
                            </p>
                        </li>
                        <li>
                            <p className="view">
                                <a href="#" onClick={() => setPage('games')}>
                                    Games
                                </a>
                            </p>
                        </li>
                        <li>
                            <p className="view">
                                <a href="#">Very Soon!</a>
                            </p>
                        </li>
                    </ul>
                </header>
                {page === 'external' && (
                    <section>
                        <h2>External Page!</h2>

                        <p>External pages don't work in this archive. Sorry!</p>

                        <p>
                            If you were wondering, that link would have taken
                            you to {externalPage}
                        </p>

                        <p>-Trevor</p>
                    </section>
                )}

                {page === 'homepage' && (
                    <section>
                        <h2 id="welcome-to-awesometech10s-personal-webpage">
                            Welcome to AwesomeTech10’s Personal Webpage
                        </h2>

                        <p>
                            This is my little place on the World Wide Web, where
                            I can do almost anything I want.
                        </p>

                        <h3 id="my-little-blog">My Little Blog</h3>

                        <p>I post things here that I want to put.</p>

                        <p>
                            Check it out{' '}
                            <a href="#" onClick={() => setPage('blog')}>
                                here
                            </a>
                        </p>

                        <h3 id="projects">Projects</h3>
                        <p>
                            Check it out - I have cool little projects you can
                            check out!
                        </p>

                        <p>
                            See them{' '}
                            <a href="#" onClick={() => setPage('projects')}>
                                here
                            </a>
                        </p>

                        <h3 id="games">Games</h3>
                        <p>
                            I make games as well. If you want to get them, check
                            me out on{' '}
                            <a
                                href={'#'}
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://awesometech10.itch.io'
                                    )
                                }}
                            >
                                Itch.io
                            </a>{' '}
                            or{' '}
                            <a
                                href={'#'}
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://gamejolt.com/@AwesomeTech10'
                                    )
                                }}
                            >
                                GameJolt
                            </a>
                            . If you want to play a game in your web browser,
                            check those games out{' '}
                            <a href="#" onClick={() => setPage('games')}>
                                here
                            </a>
                            .
                        </p>

                        <h3 id="support-or-contact">Support or Contact</h3>

                        <p>
                            Need help on something I work on? Well, good luck
                            with that, because I work on so many things, and 99%
                            of them will never get finished. But, look at my{' '}
                            <a
                                href={'#'}
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://github.com/AwesomeTech10/'
                                    )
                                }}
                            >
                                Github Page
                            </a>{' '}
                            and see if you can find the project.
                        </p>

                        <p>
                            If it’s this website, use the{' '}
                            <a
                                href={'#'}
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://github.com/AwesomeTech10/AwesomeTech10.github.io/issues'
                                    )
                                }}
                            >
                                issue tracker on Github
                            </a>
                        </p>

                        <p>
                            Other than that, find me on Discord as AwesomeTech10
                            (@AwesomeTech10#0447).
                        </p>
                    </section>
                )}

                {page === 'projects' && (
                    <section>
                        <h1 id="my-cool-projects">My Cool Projects</h1>

                        <ul>
                            <li>
                                Markdown Guide{' '}
                                <a href="#" onClick={() => setPage('markdown')}>
                                    Check it out!
                                </a>
                            </li>
                            <li>
                                Startbox{' '}
                                <a href="#" onClick={() => setPage('startbox')}>
                                    Check it out!
                                </a>
                            </li>
                            <li>
                                BrowserDetect{' '}
                                <a
                                    href={'#'}
                                    onClick={() => {
                                        setPage('external')
                                        setExternalPage(
                                            'https://gist.github.com/AwesomeTech10/f907cd5a3d2c06996298c51acd1f76ae'
                                        )
                                    }}
                                >
                                    Check it out!
                                </a>
                            </li>
                        </ul>
                    </section>
                )}

                {page === 'markdown' && (
                    <section>
                        <h2 id="the-awesometech10-markdown-guide-for-github-flavored-markdown-super-basic-guide">
                            The AwesomeTech10 Markdown Guide for GitHub Flavored
                            Markdown (Super Basic Guide)
                        </h2>

                        <p>
                            Enjoy this Github Flavored Markdown guide I put
                            together!
                        </p>

                        <h3 id="markdown">Markdown</h3>

                        <p>
                            Markdown is a lightweight and easy-to-use syntax for
                            styling your writing. It includes conventions for
                        </p>

                        <div className="language-markdown highlighter-rouge">
                            <div className="highlight">
                                <pre className="highlight">
                                    <code>
                                        Syntax highlighted code block with{' '}
                                        <span className="sb">```</span>
                                        yourlanguage
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <h1 id="header-1">Header 1</h1>
                        <h2 id="header-2">Header 2</h2>
                        <h3 id="header-3">Header 3</h3>

                        <ul>
                            <li>Bulleted</li>
                            <li>List</li>
                        </ul>

                        <ol>
                            <li>Numbered</li>
                            <li>List</li>
                        </ol>

                        <p>
                            <strong>Bold</strong> and <em>Italic</em> and{' '}
                            <code className="language-plaintext highlighter-rouge">
                                Code
                            </code>{' '}
                            text
                        </p>

                        <p>
                            <a href="#">Link</a> and{' '}
                            <img src="src" alt="Image" />
                        </p>

                        <h3 id="jekyll-themes-for-github-pages">
                            Jekyll Themes for Github Pages
                        </h3>

                        <p>
                            Your Pages site will use the layout and styles from
                            the Jekyll theme you have selected in your
                            repository settings. The name of this theme is saved
                            in the Jekyll{' '}
                            <code className="language-plaintext highlighter-rouge">
                                _config.yml
                            </code>{' '}
                            configuration file.
                        </p>

                        <p>
                            Another thing is, GitHub Pages will run{' '}
                            <a
                                href="#"
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage('https://jekyllrb.com')
                                }}
                            >
                                Jekyll
                            </a>{' '}
                            to rebuild the pages in your site, from the content
                            in your Markdown files.
                        </p>

                        <h3 id="support-or-contact">Support or Contact</h3>

                        <p>
                            Having trouble with Markdown? Check out the Markdown{' '}
                            <a
                                href="#"
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://daringfireball.net/projects/markdown/'
                                    )
                                }}
                            >
                                website
                            </a>{' '}
                            for more info.
                        </p>

                        <p>
                            For more details on GFMD see{' '}
                            <a
                                href="#"
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://guides.github.com/features/mastering-markdown/'
                                    )
                                }}
                            >
                                GitHub Flavored Markdown
                            </a>
                            .
                        </p>
                    </section>
                )}

                {page === 'games' && (
                    <section>
                        <h1 id="my-cool-games">My Cool Games</h1>

                        <table>
                            <tbody>
                                <tr>
                                    <td>The Savior: Planet of Magistera</td>
                                    <td>
                                        <a
                                            href={'#'}
                                            onClick={() => {
                                                setPage('external')
                                                setExternalPage(
                                                    'https://gamejolt.com/games/thesaviorpom/303354'
                                                )
                                            }}
                                        >
                                            GameJolt
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={'#'}
                                            onClick={() => {
                                                setPage('external')
                                                setExternalPage(
                                                    'https://awesometech10.itch.io/thesaviorpom'
                                                )
                                            }}
                                        >
                                            Itch.io
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href="#"
                                            onClick={() =>
                                                setPage('thesaviorpom')
                                            }
                                        >
                                            Online
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                )}

                {page === 'blog' && (
                    <section>
                        <h2 id="hey-there">Hey There!</h2>
                        <h3 id="welcome-to-the-awesometech10-blog">
                            Welcome to The AwesomeTech10 Blog
                        </h3>

                        <p>Here is my posts I’ve made.</p>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setPage('blog-mcworld')}
                                >
                                    Introducing the Minecraft World Backup
                                    Assistant
                                </a>
                                <p>
                                    My latest script - the Minecraft World
                                    Backup Assistant! Will back up your
                                    Minecraft worlds to the folder of your
                                    choosing!
                                </p>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setPage('blog-welcome')}
                                >
                                    Welcome to the AwesomeTech10 Blog
                                </a>
                                <p>Hey There! Welcome to my blog!</p>
                            </li>
                        </ul>

                        <h3 id="series-i-have">Series I Have</h3>

                        <p>
                            <strong>__Not Ready Yet!__</strong>
                        </p>
                    </section>
                )}

                {page === 'blog-mcworld' && (
                    <section>
                        <h1> The AwesomeTech10 Blog </h1>
                        <h3>
                            Introducing the Minecraft World Backup Assistant
                        </h3>
                        <div id="wrapper">
                            <div id="a"></div>
                            <div id="b"></div>
                        </div>
                        <p>
                            My latest script - the Minecraft World Backup
                            Assistant! Will back up your Minecraft worlds to the
                            folder of your choosing!
                        </p>

                        <h1 id="minecraft-world-backup-assistant">
                            Minecraft World Backup Assistant
                        </h1>

                        <p>
                            This little tool is a cmd script for Windows which
                            will back up your Minecraft worlds to a certain
                            location. It is free, and awesome!
                        </p>

                        <p>
                            All you have to do is download the tool (mwba.cmd)
                            and run it. It even will ask you where to put the
                            worlds!
                        </p>

                        <p>
                            Enjoy!
                            <br />
                            <br />
                        </p>

                        <p>
                            <strong>
                                DOWNLOAD THE TOOL AND SEE THE SOURCE CODE HERE
                            </strong>{' '}
                            <br />
                            <a
                                href={'#'}
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://gist.github.com/AwesomeTech10/bac3320f564143691376ae065bfbbb62'
                                    )
                                }}
                            >
                                Tool Source and Download
                            </a>
                        </p>
                    </section>
                )}

                {page === 'blog-welcome' && (
                    <section>
                        <h1> The AwesomeTech10 Blog </h1>
                        <h3>Welcome to the AwesomeTech10 Blog</h3>
                        <div id="wrapper">
                            <div id="a"></div>
                            <div id="b"></div>
                        </div>
                        <p>Hey There! Welcome to my blog!</p>

                        <h2 id="the-awesometech10-blog">
                            The AwesomeTech10 Blog
                        </h2>

                        <p>
                            I will write whatever I feel like here. Hope you
                            like it!
                        </p>
                    </section>
                )}

                {page === 'thesaviorpom' && (
                    <section>
                        <h3>That page isn't archived!</h3>
                        <p>
                            I'm sorry, but i'm not gonna bother trying to put
                            the entire video game here in this archive. Not
                            today.
                        </p>
                    </section>
                )}

                {page === 'startbox' && (
                    <section>
                        <h3>That page isn't archived!</h3>
                        <p>
                            I'm sorry, but i'm not gonna bother trying to put
                            the start page here in this archive. Not today.
                        </p>
                    </section>
                )}

                <footer>
                    <p>
                        This project is maintained by{' '}
                        <a
                            href={'#'}
                            onClick={() => {
                                setPage('external')
                                setExternalPage(
                                    'https://github.com/AwesomeTech10/'
                                )
                            }}
                        >
                            AwesomeTech10
                        </a>
                    </p>

                    <p>
                        <small>
                            Hosted on GitHub Pages &mdash; Theme by{' '}
                            <a
                                href={'#'}
                                onClick={() => {
                                    setPage('external')
                                    setExternalPage(
                                        'https://github.com/orderedlist'
                                    )
                                }}
                            >
                                orderedlist
                            </a>
                        </small>
                    </p>
                </footer>
            </Wrapper>
        </>
    )
}

export default Index
