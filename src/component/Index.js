import React from "react";
import { increaseValue, decreaseValue } from "../redux/action-creator";
import { useSelector, useDispatch } from "react-redux";

function Index () {

    const myState = useSelector (state => state.ourState.count)

    const disPatch = useDispatch()

    console.log ("myState:", myState)


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", 
            fontSize: "18px",
            background: "img/fondo.webp"
        }}>

            <br />
            <br />
            <h1 >Mi Primer Contador</h1>
            <br/>
            <br />

            <button onClick = {() => disPatch (increaseValue())}>Aumentar</button>

            <p>{myState}</p>

            <button onClick = {() => disPatch (decreaseValue())}>Disminuir</button>

        </div>
    )
}

export default Index