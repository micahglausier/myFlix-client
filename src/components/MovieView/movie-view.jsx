import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', borderRadius: '5px', width: "300", height: "450" }}>
          <img src={movie.image} width="400" height="550" />
        </div>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: 'whitesmoke', fontSize: '40px' }}>
          <span>{movie.title}</span>
        </div>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: 'whitesmoke' }}>
          <span>Director:&nbsp; </span>
          <span>{movie.director}</span>
        </div>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: 'whitesmoke' }}>
          <span>Genre:&nbsp; </span>
          <span>{movie.genre}</span>
        </div>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: 'whitesmoke' }}>
          <span>Description:&nbsp; </span>
          <span>{movie.description}</span>
        </div>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <button onClick={onBackClick} className="back-button" style={{ cursor: "pointer" }}>Back</button>
        </div>
      </div>
    );
  };