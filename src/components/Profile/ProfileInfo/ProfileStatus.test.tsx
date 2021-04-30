import React from "react";
import {ProfileStatus} from "./ProfileStatus"
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    const mockCallback = jest.fn();
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>);
        const instance = (component as any).getInstance();
        expect(instance.state.status).toBe('status');
    })
    test("After creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>);
        const root = (component as any).root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    })
    test("After creation <input > shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>);
        const root = (component as any).root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })

    test("Input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>);
        const root = (component as any).root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.value).toBe('status')
    })
    test("callback should be called", () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>);
        const instance = (component as any).getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    })
});