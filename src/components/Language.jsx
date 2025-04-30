
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store/languageReducer';

const ARG_FLAG = "/src/assets/images/bandera-arg.png";
const GB_FLAG = "/src/assets/images/en-flag.png";

const Langugage = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLanguageChange = (lang) => {
        // location.reload();
        localStorage.setItem('appLanguage', lang);
        toggleDropdown();
        dispatch(setLanguage(lang));
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="language_container">
            <div className="language_selected" onClick={toggleDropdown}>
                {language === "es" ? (
                    <>
                        <img src={ARG_FLAG} alt="Argentina" className="flag" />
                        <span>ES</span>
                    </>
                ) : (
                    <>
                        <img src={GB_FLAG} alt="Great Britain" className="flag" />
                        <span>EN</span>
                    </>
                )}
            </div>
            {dropdownOpen && (
                <div className="language_dropdown">
                    {language === "es" ? (
                        <div
                            className="language_item"
                            onClick={() => handleLanguageChange("en")}
                        >
                            <img src={GB_FLAG} alt="Great Britain" className="flag" />
                            <span>EN</span>
                        </div>
                    ) : (
                        <div
                            className="language_item"
                            onClick={() => handleLanguageChange("es")}
                        >
                            <img src={ARG_FLAG} alt="Argentina" className="flag" />
                            <span>ES</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Langugage;