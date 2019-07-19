import React, { useEffect } from "react";
// import { notification } from "antd";

const openNotificationWithIcon = type => {
    // notification[type]({
    //     message: "Ant Design is working"
    // });
};

interface IProps {

}

export const Page: React.FC<IProps> = () => {

    useEffect(() => {
        openNotificationWithIcon("info");
    }, [])

    return (
        <>
            <p>
                Hello world.
            </p>
        </>
    );
}
