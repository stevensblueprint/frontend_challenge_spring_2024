import React, { useEffect, useState } from 'react';
import MemberImage from './MemberImage';
import ProfileImage from './ProfileImage';
import jsonData from './assets/data/content.json'

//Reads inputted data
function ReadContent() {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(jsonData);
    }, [])

    return (
        //HTML for page
        <div class="information">
            {data && (
                <div class="grid-container">
                    <div class="grid-item class-image">
                        <MemberImage />
                    </div>
                    <div class="grid-item profile-info">
                        <ProfileImage />
                        <div class="text">
                            <h3>
                                <i>
                                    "{data.anectdote.quote}"
                                </i>
                            </h3>
                            <h2>
                                - {data.anectdote.author}
                            </h2>
                        </div>
                    </div>
                    <div class="grid-item text">
                        <h3>
                            {data.content.header}
                        </h3>
                        <p style={{ fontSize: '16px' }}>
                            {data.content.body}
                        </p>
                    </div>
                    <div class="grid-item text">
                        <MemberImage />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReadContent;
