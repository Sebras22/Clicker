import React from "react";
import Market from "../assets/Market.png";
import "./Market.css";
import { Badge } from "@mantine/core";

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
                                    <div>
                                        <Badge
                                            key={market.id}
                                            variant="outline"
                                            color="blue"
                                            radius="md"
                                        >
                                            {market.name}
                                        </Badge>
                                    </div>
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
