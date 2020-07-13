import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const countDown = this.state.secondsLeft > 0 ? <span>{this.state.secondsLeft} seconds left before I go boom!</span> : <span>Boom!</span>
        return (
            <div>
                {countDown}
            </div>
        )
    }
}
