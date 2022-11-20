import { render, fireEvent, screen } from "@testing-library/react"

import Counter from './Counter';


describe("Check the increment & decrement", () => {
    // let count;
    
    // beforeAll(() => {
    //     render(<Counter />)
    //     count = screen.getByTestId('count');
    // })

    test('Testing intial value', () => {
        render(<Counter />)
        const count = screen.getByTestId('count');
        expect(count).toHaveTextContent(4);
    });

    test("Check the increment", () => {
        render(<Counter />)
        const count = screen.getByTestId('count');
        const incrementFunc = screen.getByTestId('increment');   
        fireEvent.click(incrementFunc);
        expect(count).toHaveTextContent(5);
    })

    test("Check the decrement", () => {
        render(<Counter />)
        const count = screen.getByTestId('count');
        const decrementFunc = screen.getByTestId('decrement');
        fireEvent.click(decrementFunc);
        expect(count).toHaveTextContent(3);
    })
})



