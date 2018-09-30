import React from 'react';

export default createForm = (options) => createBaseForm(options);

const createBaseForm = (options) => {
    if (typeof options !== object) {
        throw Error('createForm first params must object');
    }
    return (WrappComponent) => {
        class extends React.Component {
            render() {
                debugger
                return <WrappComponent />
            }
        }
    }
}