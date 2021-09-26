import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PushNotification = (props) => {
    const sendNotification = () => {
        Notification.requestPermission().then(function (result) {
            if (result === "granted") {
                var notification = new Notification('To do list', { body: "Please do something" });
                console.log(notification);
            }
        });
    };

    return (
        <>
        <Typography paragraph>
            It works different in differrent browser:
            In Chrome Windows, you will see the notification show in the Windows Notification Bar.
            In FireFox Windows, you will see the notificaiton pop up in the right bottom corner.
        </Typography>
        <Button
            type="button"
            variant="contained"
            onClick={sendNotification}
        >
            Send Notification
        </Button>
        </>
    );
};

export default PushNotification;
