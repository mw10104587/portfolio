// other projects are the ones done in NTUEE

var OtherProjects = React.createClass({
	render: function(){
		// an array of projects
		var otherProjects = this.props.otherProjects;
 		var projectRows = [];

 		for (var i = 0; i < otherProjects.length; i++) {
 			projectRows.push(<ProjectRow projectInfo={otherProjects[i]} />)
 		};

 		return (
 			<div>{projectRows}</div>
 		);

	}
});

var ProjectRow = React.createClass({
	render: function(){
		// a project dictionary
		var project_info = this.props.projectInfo;

		var prize = project_info["project_prize"];
		var project_event = project_info["project_event"]; 
		var trophyClass = (prize!="")? "glyphicon glyphicon-flag flag-icon": "nothing";
		prize = (prize!="")? prize + " - " + project_event: project_event

		return (
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-9">
					<div className="project-name"><h4>{project_info["project_name"]}</h4></div>
					<div className="project-award-info">
						<span className={trophyClass}></span>
						<span className="project-award-and-event">{prize}</span>
					</div>
					<div className="project-info">
						{project_info["project_intro"]}
					</div>
				</div>
			</div>
		);
	}
});


d3.csv("../data/school_projects.csv", function(schoolProjects){

	ReactDOM.render(<OtherProjects otherProjects={schoolProjects} />,
		document.getElementById("ntuee-prj-wrap")
	);

});