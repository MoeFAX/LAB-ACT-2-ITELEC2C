import { songData } from "./data";
import Card from "./Card";

const Songs = () => {
  const MonthofSong = "February";
  return (
    <div className="songlist">
      {songData.map((card) =>
        card.month === MonthofSong ? (
          <Card cardObj={card} key={card.id} />
        ) : null
      )}
    </div>
  );
};
export default Songs;
