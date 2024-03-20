import React from 'react'
const HOC =(Component)=>{
    return(
        class extends React.Component{
            state ={
                auth: true
            }
            render(){
                return(
                    <div>
                        {this.state.auth ? <Component name="name"/>:<h1>please Login</h1>}
                    </div>
                )
            }
        }
    )
}
export default HOC;
