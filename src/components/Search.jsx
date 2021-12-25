import React, {useState} from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');


const handleKeyPress = (event) => { //функція котра отримує івент
  if (event.key === 'Enter') { // метод визначення клавіші для івенту
      props.searchInputFunc(search, type); //передаємо значення інпута зі стейту в параметр функції отриманої з пропсів
  }
}

const handleChangeType = (event) => {
  setType(event.target.dataset.type);
  props.searchInputFunc(search, event.target.dataset.type);
  
}

      return ( <div className="row">
      <div className="col s12">
        
        <div className="input-field">
          <input 
          className="validate Placeholder" 
          placeholder='search' 
          type="search" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          />
          <button className='btn search-btn' onClick={()=> props.searchInputFunc(search, type)} type="submit">Search</button>
          <br />
          <form>
          <label >
          <input className='with-gap' type="radio" name="type" value="all" onChange={handleChangeType} data-type='all' checked={type === 'all'} /> <span>All</span>
          </label>
          <label >
          <input className='with-gap' type="radio" name="type" value="movie" onChange={handleChangeType} data-type='movie' checked={type === 'movie'}/> <span>Movies</span>
          </label>
          <label >
          <input className='with-gap' type="radio" name="type" value="series" onChange={handleChangeType} data-type='series' checked={type === 'series'}/> <span>Series</span>
          </label>
          </form>
        </div>
      </div>
    </div>

      )
}
export {Search}




//old version with class component

// class Search extends React.Component {
//     state = {
//         search: '',
//         type: 'all',
//     }

//   handleKeyPress = (event) => { //функція котра отримує івент
//     if (event.key === 'Enter') { // метод визначення клавіші для івенту
//         this.props.searchInputFunc(this.state.search, this.state.type); //передаємо значення інпута зі стейту в параметр функції отриманої з пропсів
//     }
//   }

//   handleChangeType = (event) => {
//     this.setState(() => ({type: event.target.dataset.type}), () => {
//       this.props.searchInputFunc(this.state.search, this.state.type);
//     })
// }

//     render() {
//           const {type} = this.state;
//         return ( <div className="row">
//         <div className="col s12">
          
//           <div className="input-field">
//             <input 
//             className="validate Placeholder" 
//             placeholder='search' 
//             type="search" 
//             value={this.state.search}
//             onChange={(e) => this.setState({search: e.target.value})}
//             onKeyDown={this.handleKeyPress}
//             />
//             <button className='btn search-btn' onClick={()=> this.props.searchInputFunc(this.state.search, this.state.type)} type="submit">Search</button>
//             <br />
//             <form>
//             <label >
//             <input className='with-gap' type="radio" name="type" value="all" onChange={this.handleChangeType} data-type='all' checked={type === 'all'} /> <span>All</span>
//             </label>
//             <label >
//             <input className='with-gap' type="radio" name="type" value="movie" onChange={this.handleChangeType} data-type='movie' checked={type === 'movie'}/> <span>Movies</span>
//             </label>
//             <label >
//             <input className='with-gap' type="radio" name="type" value="series" onChange={this.handleChangeType} data-type='series' checked={type === 'series'}/> <span>Series</span>
//             </label>
//             </form>
//           </div>
//         </div>
//       </div>

//         )
//     }
// }
// export {Search}