import { createGlobalState } from "react-hooks-global-state"
import { lightTheme, darkTheme } from "./theme";
const initialState = {
    isDarkTheme: false,
    blogPostArray: [],
    isSearch: false,
    isResults: true }
const { useGlobalState } = createGlobalState(initialState)

export { lightTheme, darkTheme, useGlobalState }
