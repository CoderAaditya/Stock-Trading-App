import AutoComplete from "../components/AutoComplete";
import StockList from "../components/StockList";
import trading from "../images/Trading.png";
const StockOverviewPage = () => {
  return (
    <div>
      <div className="text-center">
      <img src={trading} style={{ width: "200px", height: "auto" }} />
      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
export default StockOverviewPage;
