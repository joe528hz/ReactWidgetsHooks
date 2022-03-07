import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = (props) => {
    const { language, text } = props;
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    //using debouncing text for minimal api request
    //for delaying onchange text
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        //cancelling the setTimeOut everytime theres an onChange event
        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translatedText);
        }
        doTranslation()
    }, [language, debouncedText])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert