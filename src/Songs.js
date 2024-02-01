import { songData } from "./data";
import Card from "./Card";
function Songs() {
  return (
    <div className="songlist">
      {songData.map((card) => (
        <Card cardObj={card} key={card.no} />
      ))}
    </div>
  );
}
export default Songs;
