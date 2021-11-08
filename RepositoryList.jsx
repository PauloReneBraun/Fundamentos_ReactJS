import { useState, useEffect} from 'react';
import { RepositoryItem } from "./repositoryItem";

import '../styles/repositories.scss';
import { useState } from "react";

import '../styles/repositories.scss';

interface Repository {
  name: String;
  description: String;
  html : String;

}

const repositoryName ='uniform';

export function RepositoryList() {
  const [repositories , setRepotories] = useState<Repository>([]);

    useEffect(() => {
      fetch()
      .then(Response => Response.json())
      .then(data => setRepotories(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              {repositories.map(repository => {
                return <repositoryItem key={repository.name} repository={repository} />
              })}
            </ul>
        </section>
    );
}