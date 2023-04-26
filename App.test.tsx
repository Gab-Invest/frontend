import App from "./App"
import { render, screen } from "@testing-library/react-native"; 

describe("App.tsx", () => {
    it("should render correctly", async () => {
        render(<App />); 
        await screen.findByText("Hello World!")
    })
})