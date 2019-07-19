import React, { useContext, useEffect } from "react";
import { notification } from "antd";
import { css } from "emotion";

const openNotificationWithIcon = type => {
    notification[type]({
        message: "Ant Design is working"
    });
};

interface IProps {

}

export const Page: React.FC<IProps> = () => {

    useEffect(() => {
        openNotificationWithIcon("info");
    }, [])

    return (
        <div className={css(`padding: 12rem`)}>
            <div className={"bg-blue-600 text-white p-4 mt-4"}>
                <p>
                    Hello world.
                </p>
            </div>
        </div >
    );
}
