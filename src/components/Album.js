import React from "react";

export default class Album extends React.Component {
    render() {
        return (
            <section className="album">
                <div className="album--info">
                    <div className="album--text">
                        <h1 className="album--title"> ALL THINGS NEW</h1>
                        <h2 className="album--subtitle"> NEW ALBUM OUT NOW </h2>
                        <button className="album--orderButton">ORDER</button>
                    </div>
                    <div className="album--cover"></div>
                </div>
                <div className="album--apps">
                    <div>                    <img src="https://static.spacecrafted.com/ceafa6a2cbfe493db86b6ed6b8eff4c2/i/a5c25fdf98514bafb79586da6e895017/1/HeFQid7LQXgcb94xBSfJJxsBygVH59VdcibtG/deezer-web.png"/>
                    </div>
                    <div>                    <img src="https://static.spacecrafted.com/ceafa6a2cbfe493db86b6ed6b8eff4c2/i/c21d804663c3446caefecf771d90fd1f/1/HeFQid7LQXgcb94xBSfJJxsBygVH59VdcibtG/spotify_de284d1a85bead047e51045fdd3f6aea.png"/>
                    </div>
                    <div>                    <img src="https://static.spacecrafted.com/ceafa6a2cbfe493db86b6ed6b8eff4c2/i/d9272a830644447bb40ea569a6822ca7/1/HeFQid7LQXgcb94xBSfJJxsBygVH59VdcibtG/US-UK_Apple_Music_Pre_Badge_RGB_20copy_df949b4f22c6990a322b762c805dc14d.png"/>
                    </div>
                    <div>                    <img src="https://static.spacecrafted.com/ceafa6a2cbfe493db86b6ed6b8eff4c2/i/b56d21ef1b3b4b7bbce2971e5d935e39/1/HeFQid7LQXgcb94xBSfJJxsBygVH59VdcibtG/amazon_a83340cb51011ae7a39f71859bc70e9a.png"/>
                    </div>
                </div>
            </section>

        );
    }
}