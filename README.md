# StoryTime

StoryTime is a multilingual storybook application. It presents a collection of classic children's stories in English and Spanish. A visitor can browse the story collection, switch between languages, and read any story in full.

The application reads every story from a Supabase database. Each language has its own version of each story. The same story appears in both English and Spanish, and a visitor can switch between the two versions at any time.

## React Features

The application demonstrates the following React capabilities:

- **Function components** with a declarative, component based structure.
- **React Router** for navigation. The router connects the browser address to three pages: the story list, the story detail, and the not found page.
- **Context API** for language management. A provider holds the current language, and a custom hook named `useLanguage` gives every component access to the language state and a translation helper.
- **State and effect hooks** for data fetching. The `useState` and `useEffect` hooks load stories from the database and track the loading state.
- **Conditional rendering** for loading screens and for pages that have no matching content.
- **Environment variables** through Vite for storing the Supabase URL and the public key outside of source control.

## Technology Stack

- **React 19** as the user interface framework.
- **Vite** as the build and development tool.
- **React Router** for client side routing between pages.
- **Supabase** as the backend. The Supabase JavaScript client fetches stories from a database table.
- **Tailwind CSS** for styling. Utility classes shape the layout and appearance, a custom animation fades in the story cards, and the typography plugin styles the prose of each story.
- **Lucide React** for icons such as the book, the user, and the globe.
- **Oxlint** for lint checks during development.

## How the Application Is Put Together

The application follows a straightforward page flow. The entry file mounts the root component onto the DOM and enables React Strict Mode.

The root component wraps the application in two providers. The language provider supplies the language state and the translation helper to the whole tree. The router provider reads the browser address and renders the correct page. The router defines three routes: the home path renders the story list, the story path renders a single story using the story's slug, and any other path renders the not found page.

The header appears at the top of every page. It holds the site title and the language toggle. The toggle calls the language setter from the context, and all interface text updates immediately through the translation helper. The footer sits at the bottom and carries the closing message and the current year.

The home page fetches stories for the current language and displays each one as a card. Each card shows the title, the author, a short preview, and a read button. When the language changes, the page fetches the story list again for the new language.

Selecting a story opens the detail page. This page fetches a single story using both the slug from the address and the current language. It presents the title, the author, and the full text of the story in a styled reading layout.