function Header() {
    return (   <nav className='light-blue accent-3'>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">React Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/johnnychikabila/movies-project.git">Repo</a></li>
          </ul>
        </div>
      </nav>

    )
}

export {Header}