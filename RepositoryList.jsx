import { useState } from 'react';
import { RepositoryItem } from "./repositoryItem";

import '../styles/repositories.scss';
import { useState } from "react";

const repositoryName ='uniform';

export function RepositoryList() {
  const [] = useState([]);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              <RepositoryItem
                repository={}
                description="Forms in React"
              />
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}