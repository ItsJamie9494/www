import { NextApiRequest, NextApiResponse } from "next"

export default function index(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/javascript')
    res.send(`
    initComments({
                node: document.getElementById('comment-section'),
                defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
                serverName: "cactus.chat",
                siteName: "TREVORTHALACKER",
                commentSectionId: "section1"
            })
    `)
}
