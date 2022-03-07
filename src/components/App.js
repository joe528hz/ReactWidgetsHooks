import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate'
import Route from "./Route";
import Header from "./Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'you use React by creating components'
    }
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "Shade Of Blue",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    onSelectedChange={setSelected}
                    selected={selected}
                />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown
                label="Select a Color"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            /> */}
            {/* <Translate /> */}
        </div>
    )
}

export default App;