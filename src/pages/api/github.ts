import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import config from '../../config'

interface Repository {
    id: number
    name: string
    html_url: string
    created_at: string
    pushed_at: string
    language: string
    description: string
    fork: boolean
    stargazers_count: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const userRepos = await axios
        .get(
            `https://api.github.com/users/${config.username}/repos?per_page=100`
        )
        .then((data) => {
            let response = data.data
            let repos = []

            ;(response as Array<Repository>).map((repo) => {
                if (!repo.fork) {
                    let strippedRepo = {
                        id: repo.id,
                        name: repo.name,
                        html_url: repo.html_url,
                        created_at: repo.created_at,
                        pushed_at: repo.pushed_at,
                        language: repo.language,
                        description: repo.description,
                        fork: repo.fork,
                        stargazers_count: repo.stargazers_count,
                    }
                    repos.push(strippedRepo)
                }
            })

            return res.send(repos)
        })
        .catch(() => {
            return res.json({
                error: 'apiError',
            })
        })

    return userRepos
}
