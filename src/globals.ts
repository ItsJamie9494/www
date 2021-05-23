import { createGlobalState } from "react-hooks-global-state"
import { lightTheme, darkTheme } from "./theme";
const initialState = {
    isDarkTheme: true,
    blogPostArray: [],
    isSearch: false,
    isResults: true }
const { useGlobalState } = createGlobalState(initialState)

export { lightTheme, darkTheme, useGlobalState }
