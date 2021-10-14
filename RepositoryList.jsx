import { RepositoryItem } from "./repositoryItem";

import '../styles/repositories.scss';

const repositoryName ='uniform';

export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              <RepositoryItem
                repository={}
                description="Forms in React"
              />
              <RepositoryItem/>
              <RepositoryItem/>
              <RepositoryItem/>
            </ul>
        </section>
    );
}