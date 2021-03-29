import React from 'react'
import Layout from "../components/Layout";
import { Head, Landing } from "../components/Landing";
import { Project } from "../components/Project";
import { Container } from "../components/Page"

const Index = () => {
    return (
        <>
            <Layout title={'Work'}>
                <Landing>
                    <Head>My Work</Head>
                </Landing>
                <Container>
                    <p>This is a comprehensive list of all projects that I have worked on, as well as organizations I've worked with</p>
                    <Project
                        header={"Developer"}
                        projectName={"Dot Browser"}
                        projectDescription={"Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisements online."}
                        projectWebsite={"https://dothq.co"}
                        projectImage={"/assets/projects/dotbrowser.png"}
                        projectRepository={"https://github.com/dothq"} />
                    <Project
                        header={"Lead Developer"}
                        projectName={"keyboardnotfound.com"}
                        projectDescription={"keyboardnotfound.com is a joke website, that shows the famous \"Keyboard not found, Press F1 to continue\" message."}
                        projectWebsite={"https://keyboardnotfound.com"}
                        projectImage={"/assets/projects/keyboardnotfound.png"}
                        projectRepository={"https://github.com/trevorthalacker/keyboardnotfound"} />
                    <p>And hopefully more to come in the future!</p>
                </Container>
            </Layout>
        </>
    )
}

export default Index
