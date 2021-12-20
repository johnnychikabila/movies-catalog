function Movie(props) {
    const {Title, Poster, Type, Year, imdbID} = props;

    // {Title: title, 
    //     Poster: poster, 
    //     Type: type, 
    //     Year: year, 
    //     imdbID: id,
    // } = props;

    return (  <div id={imdbID} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      {
      Poster === 'N/A' ? 
      (<img className="activator" src={`https://via.placeholder.com/300x400.png?text=${Title}`} />) : 
      (<img className="activator" src={Poster} />)}
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}</span>
      <p><a href="#">{Type}</a><span className='right' href="#">{Year}</span></p>
    </div>
    {/* {<div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>} */}
  </div>
    )
}
export {Movie}