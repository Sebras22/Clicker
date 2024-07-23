import React from "react";
import file from "../assets/file.png";
import "./Houses.css";
import { Badge } from "@mantine/core";

interface House {
    name: string;
    id: number;
}

interface HousesListProps {
    houses: House[];
}

const Houses: React.FC<HousesListProps> = ({ houses }) => {
    return (
        <div>
            {houses.length > 0 ? (
                <>
                    <h2>Houses</h2>
                    <div>{houses.length}</div>
                    <div className="HorizontalflexHouse">
                        {houses.map((house) => (
                            <>
                                <div className="Card">
                                    <div>
                                        <Badge
                                            key={house.id}
                                            variant="outline"
                                            color="blue"
                                            radius="md"
                                        >
                                            {house.name}
                                        </Badge>
                                    </div>
                                    <img src={file} />
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

export default Houses;
