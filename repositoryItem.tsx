interface RepositoryItemProps {
    repository: {
        name: String;
        description:String;
        html_url: String
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
        <strong>unform</strong>
        <p>Forms in ReactJS</p>

        <a href={props.repository.html_url}>
            Acessar repositório
        </a>
      </li>  
    );
}