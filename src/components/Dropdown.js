import React, { useEffect, useState, useRef } from 'react';


const Dropdown = (props) => {
    const { label, options, selected, onSelectedChange } = props;
    const [open, setOpen] = useState();
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener("click", onBodyClick, { capture: true });

        //turning off the eventListener once the Dropdown component is gone
        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true })
        }

    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null; //null in react means dont render it
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        )
    })

    // console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            {/* <div className="ui container" style={{ color: selected.value }}>The text is {selected.value}!</div> */}
        </div >
    )
}

export default Dropdown;