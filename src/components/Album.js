import React from "react";

export default class Album extends React.Component {
    render() {
        return (
            <div className="album">
                <h1 className="album--title"> ALL THINGS NEW</h1>
                <h2 className="album--info"> NEW ALBUM OUT NOW </h2>
                <div className="album--cover"></div>
                <button className="album--orderButton">ORDER</button>
                <div className="album--apps">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}