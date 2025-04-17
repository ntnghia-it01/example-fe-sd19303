import {createContext, useState} from 'react';
import vi from './locale/vi.json'
import en from './locale/en.json'

const LanguageContext = createContext();

const LanguageProvider = (props)=>{
  const {children} = props;

  const [lang, setLang] = useState("vi");

  const translate = (props) => {
    if(lang == "vi"){
      return vi[props]
    }

    return en[props]
  }

  const changeLanguage = (props)=>{
    if(props == "en"){
      setLang("en")
    }else{
      setLang("vi")
    }
  }

  return (
    <LanguageContext.Provider value={{lang, translate, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export {LanguageProvider, LanguageContext}