function Parentcomp(){
    return <h2>parent component</h2>
}

function Childcomp(){
    return <h2>child nested comp</h2>
}


export default function MainFunction(){
    return<>
     <h2>parent fun</h2>
     <Childcomp/>
     <Parentcomp/>
     </>
}