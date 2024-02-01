function Header() {
  return (
    <div className="header">
      <div className="dots">
        <img src="dots/reddot.png" className="dot" alt="red"></img>
        <img src="dots/yellowdot.png" className="dot" alt="yellow"></img>
        <img src="dots/greendot.png" className="dot" alt="green"></img>
      </div>
      <h1>Ranking Lists</h1>

      <div className="flexbox">
        <div class="column">
          <div className="dayno">31</div>
        </div>
        <div class="column">
          <div class="item">January</div>
          <div class="item">Wednesday</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
