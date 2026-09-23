function GrandChild({name}){
    return <h2>Hello {name}</h2>
}

function Child({name}){
    return <GrandChild name = {name}/>
}

function ParentData (){
    return <Child name = "anu"/>
}

export default ParentData