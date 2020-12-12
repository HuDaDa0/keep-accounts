import React from 'react';
import IonIcons from 'react-ionicons';

import { LIST_VIEW, CHART_VIEW } from '../utility';


const generateLinkClass = (current, view) => {
    return (current === view) ? 'nav-link active': 'nav-link';
}


function ViewTab(props) {
    let { activeTab, onTabChange } = props;
    return (
        <ul className="nav nav-tabs nav-fill my-4">
            <li className="nav-item">
                <a
                    className={generateLinkClass(activeTab, LIST_VIEW)}
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        onTabChange(LIST_VIEW);
                    }}
                >
                    <IonIcons 
                        className="rouned-circle mr-2"
                        fontSize="25px"
                        color={"#007bff"}
                        icon="ios-paper"
                    />
                    列表模式
                </a>
            </li>
            <li className="nav-item">
                <a
                    className={generateLinkClass(activeTab, CHART_VIEW)}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onTabChange(CHART_VIEW);
                    }}
                >
                    <IonIcons 
                        className="rounded-circle mr-2"
                        fontSize="25px"
                        color={"#007bff"}
                        icon="ios-pie"
                    />
                    图标模式
                </a>
            </li> 
        </ul>
    )
}


export default ViewTab;
