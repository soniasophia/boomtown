import React from 'react';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
// import Gravatar from 'react-gravatar';
import './styles.css';

const Profile = () => (
    <div className="profileWrapper">
        <div className="profileInner">
            <Card>
                <CardTitle title="User Name" subtitle="User Bio" />

                <div className="userItems">
                    <CardTitle title="0" subtitle="Items shared" />
                    <CardTitle title="0" subtitle="Items borrowed" />
                </div>
                <CardHeader
                    avatar="images/jsa-128.jpg"
                />
            </Card>
        </div>
    </div>
);

export default Profile;
