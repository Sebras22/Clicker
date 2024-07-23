import React from "react";
import Burger from "../assets/Restaurant.png";
import "./Fastfoods.css";
import { Badge } from "@mantine/core";

interface Fastfood {
    name: string;
    id: number;
}

interface FastFoodsListProps {
    fastfoods: Fastfood[];
}

const Fastfoods: React.FC<FastFoodsListProps> = ({ fastfoods }) => {
    return (
        <div>
            {fastfoods.length > 0 ? (
                <>
                    <div>
                        <h2>FastFoods</h2>
                        <div>{fastfoods.length}</div>
                    </div>
                    <div className="HorizontalflexFastfood">
                        {fastfoods.map((fastfood) => (
                            <>
                                <div className="Card">
                                    <div>
                                        <Badge
                                            key={fastfood.id}
                                            variant="outline"
                                            color="blue"
                                            radius="md"
                                        >
                                            {fastfood.name}
                                        </Badge>
                                    </div>
                                    <img src={Burger} />
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

export default Fastfoods;
