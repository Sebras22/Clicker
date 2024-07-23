import React from "react";
import Bakery from "../assets/Bakery.png";
import "./Bakerie.css";
import { Badge, Card } from "@mantine/core";

interface Bakery {
    name: string;
    id: number;
}

interface BakeriesListProps {
    bakeries: Bakery[];
}

const Bakeries: React.FC<BakeriesListProps> = ({ bakeries }) => {
    return (
        <div>
            {bakeries.length > 0 ? (
                <>
                    <h2>Bakeries</h2>
                    <div>{bakeries.length}</div>
                    <div className="HorizontalFlexBakery">
                        {bakeries.map((bakery) => (
                            <>
                                <div className="Card">
                                    <div>
                                        <Badge
                                            key={bakery.id}
                                            variant="outline"
                                            color="blue"
                                            radius="md"
                                        >
                                            {bakery.name}
                                        </Badge>
                                    </div>
                                    <img className="Bakery" src={Bakery} />
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

export default Bakeries;
