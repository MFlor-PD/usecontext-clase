import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
const { language, setLanguage } = useLanguage();

const handleChangeLanguage = (e) => {
    setLanguage(e.target.value)
}

return (
    <>
    <label>Select Language:</label>
    <select value={language} onChange={handleChangeLanguage} >
        <option value='en'>English</option>
        <option value='es'>Spanish</option>
        <option value='fr'>French</option>
    </select>
    </>
)
}

export default LanguageSelector;