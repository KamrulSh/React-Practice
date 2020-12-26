import React from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import ReguComp from "./ReguComp";

// implementing Regular, Pure and Memo Component
class ParentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shahin",
      time: Date().toString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "shahin"
      });
    }, [2000]);
  }

  render() {
    console.log("======Parent component======");
    return (
      <div className="parentComp">
        <h1>Regular and Pure Component</h1>
        <ReguComp name={this.state.name} time={this.state.time} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComp;
