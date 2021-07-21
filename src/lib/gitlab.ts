import axios from 'axios'
import config from '../config'
import { Repository as IRepository } from '../interfaces/IRepository'

export class gitlab {
    constructor() {}

    public async profiles(archived: boolean): Promise<any> {
        return await axios
            .get(
                `https://gitlab.com/api/v4/users/${config.gitlab_account_id}/projects?archived=${archived}`
            )
            .then((data) => {
                let response = data.data
                let repos = []

                ;(response as Array<IRepository>).map((repo) => {
                    let strippedRepo = {
                        id: repo.id,
                        name: repo.name,
                        web_url: repo.web_url,
                        description: repo.description,
                        star_count: repo.star_count,
                        archived: archived,
                    }
                    repos.push(strippedRepo)
                })

                return repos
            })
    }
}
