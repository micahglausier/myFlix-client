import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "90px",
          fontFamily: "exo-soft, san-serif",
          color: "#CC6F57",
          textShadow: ".05em .05em 0 hsl(200 50% 30%)",
          border: "4px solid #33364D",
          borderRadius: "2em",
          marginBottom: "25px",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          padding: "10px",
        }}
      >
        myFlix
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#33364D",
          fontSize: "60px",
          marginTop: "10px",
          fontWeight: "600",
          textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
        }}
      >
        <span>{movie.title}</span>
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
          style={{ boxShadow: "5px 5px 5px 5px black", marginBottom: "20px" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#33364D",
          borderRadius: "2em",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "whitesmoke",
            marginTop: "10px",
          }}
        >
          <span style={{ textShadow: " 1px 1px black", marginTop: "10px" }}>
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
              backgroundColor: "#e5dac6",
              color: "#33364D",
              border: "2px solid #CC6F57",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
              marginBottom: "25px",
              fontWeight: "600",
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
