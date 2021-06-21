import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import config from '../../config'
import { Repository } from '../../interfaces/IRepository'

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
