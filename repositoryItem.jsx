export function RepositoryItem(props) {
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