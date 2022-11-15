const React = require("react")

class Index extends React.Component {
    render() {
        const {fruits} = this.props
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                {
                    fruits.map((fruit, i) => {
                        return (
                            <li key = {i}> 
                                The {" "}
                                <a href={`/fruits/${i}`}>
                                {fruit.name}</a>
                                {" "}
                                is {fruit.color} <br />
                                {
                                    fruit.readyToEat
                                    ? "it is ready to eat"
                                    : "it is not ready to eat"
                                }
                                <br />
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

module.exports = Index