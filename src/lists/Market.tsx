import React from "react";
import Market from "../assets/Market.png";
import "./Market.css";

interface Market {
    name: string;
    id: number;
}

interface MarketsListProps {
    markets: Market[];
}

const Markets: React.FC<MarketsListProps> = ({ markets }) => {
    return (
        <div>
            {markets.length > 0 ? (
                <>
                    <h2>Markets</h2>
                    <div>{markets.length}</div>

                    <div className="HorizontalflexMarket">
                        {markets.map((market) => (
                            <>
                                <div className="Card">
                                    <div key={market.id}>{market.name}</div>
                                    <img src={Market} alt="" />
                                </div>
                            </>
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Markets;
