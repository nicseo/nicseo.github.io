import React from 'react';

class App extends React.Component {
   render() {
      return (
      	<div>
	      	<Header title="WORKOUTS" style={{}} />
	      	<WorkoutContent />
	    </div>
      );
   }
}

class WorkoutContent extends React.Component {
	render() {
		return (
			<div className="workout-content">
				<WorkoutMonth month="MONTH 10" active={true} />
				<WorkoutMonth month="MONTH 9" active={true} />
				<WorkoutMonth month="MONTH 8" active={true} />
				<WorkoutMonth month="MONTH 7" active={true} />
				<WorkoutMonth month="MONTH 6" active={true} />
				<WorkoutMonth month="MONTH 5" active={true} />
				<WorkoutMonth month="MONTH 4" active={true} />
			</div>
		);
	}
}

class WorkoutWeek extends React.Component {
	render() {
		return (
			<div className="workout-week">
				<div className="week-content">
					<div className="week-label"><h2 className="v-center">{this.props.weekID}</h2></div>
					<Circle day="Su" month={this.props.month} weekID={this.props.weekID}/>
					<Circle day="Mo" month={this.props.month} weekID={this.props.weekID}/>
					<Circle day="Tu" month={this.props.month} weekID={this.props.weekID}/>
					<Circle day="We" month={this.props.month} weekID={this.props.weekID}/>
					<Circle day="Th" month={this.props.month} weekID={this.props.weekID}/>
					<Circle day="Fr" month={this.props.month} weekID={this.props.weekID}/>
					<Circle day="Sa" month={this.props.month} weekID={this.props.weekID}/>
				</div>
			</div>
		);
	}
}

class WorkoutMonth extends React.Component {
	render() {
		return (
			<div style={this.props.active ? {} : {opacity:0.5}} className="workout-month">
				<div className="month-title"><h1 style={{textTransform:'uppercase',fontSize:1.5+'em',paddingTop:5,paddingBottom:5}}>{this.props.month}</h1></div>
				<div className="four-weeks">
					<WorkoutWeek weekID='1' month={this.props.month}/>
					<WorkoutWeek weekID='2' month={this.props.month}/>
					<WorkoutWeek weekID='3' month={this.props.month}/>
					<WorkoutWeek weekID='4' month={this.props.month}/>
				</div>
			</div>
		);
	}
}

class Circle extends React.Component {
	constructor(props) {
	    super(props);
	    var today = (this.props.month == "MONTH 10" && this.props.day == "Th" && this.props.weekID == '4');
	    this.state = {today:today, checked:false};
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
	    this.setState({checked:!this.state.checked});
	}

	render() {
		var style = this.state.today ? {border:'1px solid #403F3C'} : {};
		style = this.state.checked ? {background:'white'} : style;
		style = (this.state.checked && this.state.today) ? {background:'white',border:'1px solid #403F3C'} : style;
		return (
			<div className="circle" style={style} onClick={this.handleClick}>
				<p style={this.state.checked ? {color:'#CED3DD'} : {}}>{this.props.day}</p>
			</div>
		);
	}
}

class Header extends React.Component {	
	render() {
		return (
			<div className="header" style={this.props.style}>
				<h1 className="v-center" style={{float:'left'}}>{this.props.title}</h1>
				<h2 className="v-center" style={{float:'right',paddingRight:20}}>?</h2>
			</div>
		);
	}
}

class Rotater extends React.Component {
	render() {
		return (
			<div id={this.props.type} className="rotater">
				<p> > </p>
			</div>
		);
	}
}



export default App;