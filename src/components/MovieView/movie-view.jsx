import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          fontSize: "40px",
          marginTop: "10px",
          textDecoration: "underline",
        }}
      >
        <span style={{ textShadow: " 3px 3px black" }}>{movie.title}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          width: "300",
          height: "450",
          marginTop: "10px",
        }}
      >
        <img
          src={movie.image}
          width="400"
          height="550"
          style={{ boxShadow: "5px 5px 5px 5px black" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          marginTop: "10px",
        }}
      >
        <span style={{ textShadow: " 1px 1px black" }}>
          <u>Director:</u>&nbsp;{" "}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
        }}
      >
        <span>{movie.director}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          marginTop: "10px",
        }}
      >
        <span style={{ textShadow: " 1px 1px black" }}>
          <u>Genre:</u>&nbsp;{" "}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
        }}
      >
        <span>{movie.genre}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          marginTop: "10px",
        }}
      >
        <span style={{ textShadow: " 1px 1px black" }}>
          <u>Description:</u>&nbsp;{" "}
        </span>
      </div>
      <div
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          textAlign: "center",
          color: "whitesmoke",
          width: "350px",
        }}
      >
        <span>{movie.description}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <button
          onClick={onBackClick}
          className="back-button"
          style={{
            cursor: "pointer",
            height: "50px",
            width: "150px",
            backgroundColor: "#FBC403",
            color: "#343F71",
            border: "1px solid black",
            boxShadow: "1px 1px 1px 1px black",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};