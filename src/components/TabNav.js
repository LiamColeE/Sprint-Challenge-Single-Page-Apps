import React from "react";
import { Tab, Menu, Icon, Divider } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const tabs = [
    { menuItem: 'Home Page', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Menu.Item>
                <NavLink to="/">Home Page</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/locations">Locations</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/characters">Characters</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/episodes">Episodes</NavLink>
            </Menu.Item>
        </div>
    )
};
