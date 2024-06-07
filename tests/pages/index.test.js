import Index from "../../src/pages/index";
import { screen, render } from "@testing-library/react";

describe('testing my index page for application', () => {
    test( 'unit test text validation', () => {
        render(<Index/>)
    })
})