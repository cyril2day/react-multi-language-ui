import { createContext, useContext, useState } from "react"

const LanguageContext = createContext(undefined)

// Define translation strings for English and Spanish
const translations = {
  en: {
    siteTitle: "StoryTime",
    storyList: "Story Collection",
    backToStories: "Back to Stories",
    readStory: "Read Story",
    author: "Author",
    selectLanguage: "Select Language",
    english: "English",
    spanish: "Español",
    footerText: "Made with ❤️ for young readers everywhere",
    storyListSubtitle: "Discover timeless tales that spark imagination and teach valuable lessons",
    notFoundMessage: "Oops! This page doesn't exist.",
    returnHome: "Return to Home",
  },
  es: {
    siteTitle: "Hora del Cuento",
    storyList: "Colección de Cuentos",
    backToStories: "Volver a los Cuentos",
    readStory: "Leer Cuento",
    author: "Autor",
    selectLanguage: "Seleccionar Idioma",
    english: "English",
    spanish: "Español",
    footerText: "Hecho con ❤️ para jóvenes lectores en todas partes",
    storyListSubtitle: "Descubre cuentos atemporales que despiertan la imaginación y enseñan lecciones valiosas",
    notFoundMessage: "¡Uy! Esta página no existe.",
    returnHome: "Volver al Inicio",
  },
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  // Translation function: returns the string for the given key in current language
  const t = (key) => {
    return translations[language][key] || key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
