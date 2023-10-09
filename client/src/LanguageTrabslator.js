import {React,useState} from 'react'

import { useTranslation } from 'react-i18next'

const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'ur', text: "Urdu" },
    { value: 'pa', text: "Panjabi" },
    { value: 'ps', text: "Pashto" },
    { value: 'hi', text: "Hindi" },
    { value: 'te', text: "Telugu" },
]
export default function LanguageTrabslator() {
    const { t } = useTranslation();
 
    const [lang, setLang] = useState('en');

    const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    <div>
        <h1>{t('welcome')}</h1>
        <label>{t('choose')}</label>
       <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value}
                        value={item.value}>{item.text}</option>);
                })}
            </select>
    </div>
  )
}
