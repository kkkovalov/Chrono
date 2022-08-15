import { NextPage } from "next";

const Homepage : NextPage = () => {
    return(
        <div>
            <h1>Home</h1>
            <a href="/stopwatch" className=" block">Stopwatch</a>
            <a href="/planner" className=" block">Planner</a>
        </div>
    )
}

export default Homepage