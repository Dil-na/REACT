import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './CounterSlice';

const CounterRtk = () => {
    console.log('CounterRtk rendered');
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            Count: {count}
            <button onClick={() => dispatch(increment())}>
                Add
            </button>
        </div>
    );
};

export default CounterRtk ();