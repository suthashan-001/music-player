# Mastery

    The big difference between props, states and refs in react

    - props are immutable meaning the value can not change are passed from the parent component to the child components. Props are used to pass data and event handlers down to child components.    For example, passing a clickHandler from a parent component to a button component.

    - states are mutable meaning that the value is expected to change over time. This is done through the function setState(). Everytime a state changes it triggers the DOM to rerender

    - Refs provide a way to access DOM nodes or React elements created in the render method

        * the main usecase of refs in this project is to access a DOM element directly without re-rendering. For example when we click the pause button on the player component we want the audio ref to stop playing the music. However we don't want the app to rerender each time the pause button is clicked.

_Memory leaks in react_

    memory leaks occur when a component that initiated an asynchronous operation (like an API call) is unmounted before the operation completes.


    If the async operation tries to update the state of a component that has already unmounted, it leads to a memory leak. React can't update the state of a component that's no longer in the DOM, and this discrepancy can cause issues in your application.

     For example, the songQueue state  might become undefined due to such a memory leak. This could happen if an API call was supposed to update songQueue, but the component unmounted before the call completed, leading to erratic behavior or errors when the late response tries to update the state of an unmounted component.


    This is fixed with a clean up function in the useEffect. The cleanup function is returned from the useEffect and is called by React before the component unmounts or before the useEffect runs again.

        useEffect(() => {

             let isMounted = true;

             asyncFunctionCall().then(data => {
                if (isMounted) {
                // Update state or perform actions only if the component is still mounted
                }
            });

            return () => {
                isMounted = false; // Set the flag to false when the component unmounts
            };
    }, []);
