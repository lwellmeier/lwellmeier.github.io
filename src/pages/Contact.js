import React from 'react';
import { useState, useReducer } from 'react';

const ACTIONS = {
    EDIT_TAG: 'edit-tag',
    EDIT_MSG: 'edit-msg'
}

function reducer(msg, action) {
    switch (action.type) {
        case ACTIONS.EDIT_TAG:
            return {...msg, tag: action.payload.tag}
        case ACTIONS.EDIT_MSG:
            return {...msg, msg: action.payload.msg}
        case ACTIONS.EDIT_SENDER:
            return {...msg, sender: action.payload.sender}
        default:
            return
    }
}
const Contact = () => {

    const [msg, disposer] = useReducer(reducer, {
        tag: '',
        message: '',
        sender: '',
        time: Date.now()
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(msg);
        alert("message has been send!");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => disposer({ type: ACTIONS.EDIT_TAG, payload: { tag: e.target.value}})} placeholder="Tag"/>
            <input type="text" onChange={(e) => disposer({ type: ACTIONS.EDIT_MSG, payload: { msg: e.target.value}})} placeholder="Enter message..."/>
            <input type="text" onChange={(e) => disposer({ type: ACTIONS.EDIT_SENDER, payload: { sender: e.target.value}})} placeholder="Enter email..."/>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact