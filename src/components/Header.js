import React from "react";

export default class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <ul className="header--link">
                    <li>get new album</li>
                    <li>see tour dates</li>
                </ul>
            </div>
        );
    }
}