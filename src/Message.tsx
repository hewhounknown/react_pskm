
function Message(){
    var name = "doggy rocky!";
    if(name)
        return <h1 className="text-3xl font-bold underline text-red-200">Hey bro, {name}</h1>;
    return <h2>Hello</h2>
}

export default Message;