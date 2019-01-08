import React from "react";
import ReactDOM from 'react-dom';

export default class Tour extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            day: ["27","28","30","31","2", "3", "4", "7"],
            month: ["jul","aug"],
            city: ["Oslo, NOR",  "Warsaw, PL","Praha, CZ", "Berlin, DE","Frankfurt, DE","Amsterdam, NL","Paris, FR","London, ENG"],
            place: ["Lote Arena", "Torwar", "Eden Arena", "Subrosa", "Werkstadt",  "Deera Centre","A la Flie","O2 Arena"]
        };

    }

    render() {
        return (
            <section className="tour" >
                <h1>TOUR</h1>
                <div className="wrapper">
                    <div className="concert">
                        <div className="box day">{this.state.day[0]}</div>
                        <div className="box month">{this.state.month[0]}</div>
                        <div className="box city">{this.state.city[0]}</div>
                        <div className="box place">{this.state.place[0]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>

                    <div className="concert">
                        <div className="box day">{this.state.day[1]}</div>
                        <div className="box month">{this.state.month[0]}</div>
                        <div className="box city">{this.state.city[1]}</div>
                        <div className="box place">{this.state.place[1]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                    <div className="concert">
                        <div className="box day">{this.state.day[2]}</div>
                        <div className="box month">{this.state.month[0]}</div>
                        <div className="box city">{this.state.city[2]}</div>
                        <div className="box place">{this.state.place[2]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                    <div className="concert">
                        <div className="box day">{this.state.day[3]}</div>
                        <div className="box month">{this.state.month[0]}</div>
                        <div className="box city">{this.state.city[3]}</div>
                        <div className="box place">{this.state.place[3]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                    <div className="concert">
                        <div className="box day">{this.state.day[4]}</div>
                        <div className="box month">{this.state.month[1]}</div>
                        <div className="box city">{this.state.city[4]}</div>
                        <div className="box place">{this.state.place[4]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                    <div className="concert">
                        <div className="box day">{this.state.day[5]}</div>
                        <div className="box month">{this.state.month[1]}</div>
                        <div className="box city">{this.state.city[5]}</div>
                        <div className="box place">{this.state.place[5]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                    <div className="concert">
                        <div className="box day">{this.state.day[6]}</div>
                        <div className="box month">{this.state.month[1]}</div>
                        <div className="box city">{this.state.city[6]}</div>
                        <div className="box place">{this.state.place[6]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                    <div className="concert">
                        <div className="box day">{this.state.day[7]}</div>
                        <div className="box month">{this.state.month[1]}</div>
                        <div className="box city">{this.state.city[7]}</div>
                        <div className="box place">{this.state.place[7]}</div>
                        <div className="box c">C</div>
                        <div className="box f">
                            <button className="button--tickets"> TICKETS & MORE </button>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}