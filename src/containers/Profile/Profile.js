import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
// import Gravatar from 'react-gravatar';
import './styles.css';

const Profile = () => (
    <div className="profileWrapper">

        <Card>
            <div className="userInfo">
                <CardTitle title="User Profile" className="userName" />
                <CardText className="userBio">
                    User bio
                </CardText>
            </div>

            <div className="userItems">
                <CardTitle title="0" subtitle="Items shared" />
                <CardTitle title="0" subtitle="Items borrowed" />
            </div>
            <CardHeader
                avatar="images/jsa-128.jpg"
            />
        </Card>

    </div>
);

export default Profile;
