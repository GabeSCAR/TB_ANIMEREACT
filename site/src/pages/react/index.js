import { Link } from "react-router-dom"

export default function Index() {
    return(
        <main className="F1">
            <h1>Projeto</h1>
            <ul>
                <li>  <Link to='/Anime'> anime </Link>  </li>
            </ul>
        </main>
    )
}