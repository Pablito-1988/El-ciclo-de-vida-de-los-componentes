import React, { Component } from 'react';
import Genre from './Genre';

/* let genres = [
    { genre: 'Acción' },
    { genre: 'Animación' },
    { genre: 'Aventura' },
    { genre: 'Ciencia Ficción' },
    { genre: 'Comedia' },
    { genre: 'Documental' },
    { genre: 'Drama' },
    { genre: 'Fantasia' },
    { genre: 'Infantiles' },
    { genre: 'Musical' }
] */

class GenresInDb extends Component {
    constructor() {
        super()
        this.state = {
            genreList: []
            
        }
    }

    
    componentDidMount() {
        fetch('http://localhost:3006/api/genres')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                console.log(genres)
                this.setState({ genreList: genres.data })
            })
            .catch(error => console.log(error))
    }

    change(){
        document.querySelector('.card-body').classList.toggle('bg-secondary')
    }
    return(){
        document.querySelector('.card-body').classList.remove('bg-secondary')
    }
    
    render() {

        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={this.change} onMouseOut={this.return} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {this.state.genreList.map((genre, index) => {
                                    return <Genre {...genre} key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default GenresInDb;