function Card(props) {
  return (
    <div className="card">
      <h1>{props.cardObj.no}</h1>
      <hr></hr>
      <span className="name">{props.cardObj.songName}</span>
      <br></br>
      <span className="art">{props.cardObj.artist}</span>
      <img
        src={props.cardObj.songImage}
        className="img"
        alt={props.cardObj.imgtxt}
      ></img>
      <div className="icons">
        <img src="icons/download.png" className="icon" alt="download"></img>
        <img src="icons/heart.png" className="icon" alt="heart"></img>
        <img src="icons/share.png" className="icon" alt="share"></img>
        <img src="icons/dots.png" className="icon" alt="dots"></img>
      </div>
    </div>
  );
}

export default Card;
