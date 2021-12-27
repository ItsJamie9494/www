/* pages/index.tsx
 *
 * Copyright 2021 Jamie Thalacker
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Layout from '../components/Layout'
import AboutLayout from '../components/Layouts/about'
import MainLayout from '../components/Layouts/main'
import WorkLayout from '../components/Layouts/work'
import { Repository } from '../interfaces/Repository'

const Home: NextPage = ({ repositories }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <MainLayout />
      <WorkLayout repositories={repositories} />
      <AboutLayout />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let reposList = Array<Repository>();

  await fetch(`https://api.github.com/users/ItsJamie9494/repos?per_page=100`)
    .then(async (data) => {
      let response = await data.json()
      let repos = new Array<Repository>();

      // TODO create Interface
      (response as unknown as Array<Repository>).map((repo) => {
        if (!repo.fork) {
          repos.push({
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            created_at: repo.created_at,
            pushed_at: repo.pushed_at,
            language: repo.language,
            description: repo.description,
            fork: repo.fork,
            stargazers_count: repo.stargazers_count,
            archived: repo.archived
          })
        }
      })

      repos.sort((firstEl, secondEl) => {
        if (firstEl.stargazers_count < secondEl.stargazers_count) {
          return 1
        }

        if (firstEl.stargazers_count > secondEl.stargazers_count) {
          return -1
        }

        // After stargazers are handled, sort by pushed at date
        return (new Date(secondEl.pushed_at).getTime() - new Date(firstEl.pushed_at).getTime())
      })

      return reposList = repos
    })
    .catch(error => {
      console.log(error)
    })

  return {
    props: {
      repositories: reposList
    }
  }
}

export default Home
