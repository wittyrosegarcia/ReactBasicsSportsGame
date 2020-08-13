class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shotsTaken: 0 ,
            score: 0


        }
        this.shotsTakenSound = new Audio("./assets/audio/shotSound.mp3")
        this.scoreSound = new Audio("./assets/audio/soundScore.mp3")
    }

    countHandler = () => {
        let score = this.state.score
        this.shotsTakenSound.play()

        if (Math.random() > 0.5) {
            score += 1
            
            setTimeout(() => { 
            this.scoreSound.play()
        }, 100)   
            
        }
        this.setState((state, props) => ({
            shotsTaken:state.shotsTaken + 1,
            score: score

        }))


    

    }

    render() {
        let shotPercentageDiv
        if (this.state.shotsTaken){
            const shotPercentage = Math.round((this.state.score/ this.state.shotsTaken) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %: {shotPercentage}</strong>
                </div>
            )
        }

        return (
            
            <div className="Tamaraw">
                <h2>{this.props.name}</h2>

                <div className="Blue-Eagles">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
                <div>
                    <strong>shotsTaken:</strong> {this.state.shotsTaken}
                </div>
                <div>
                    <strong>score:</strong> {this.state.score}
                </div>
                {shotPercentageDiv}

                <button onClick={this.countHandler}>Shoot</button>




            </div>

        )


    }
}



// An App component under which all other components will be added
function App(props) {
    return (
        <div className="App">
            <div className="stats">
                <Team
                    name ="Tamaraw" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd2iKnTImCQ9BeDA3RtSrr9BiI9dhpDEoO6w&usqp=CAU"></Team>
                
                <div className="versus">
                    <h1>vs</h1>
                </div>
                
                
                <Team
                    name="Blue-Eagles" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqGyEQxx9KCHOp7CA3tDdTuhgQAjWchusmCA&usqp=CAU/"></Team>

                
            </div>


        </div>
    )
}



// Render the App
ReactDOM.render(
    <App />,
    document.getElementById('root')
    )