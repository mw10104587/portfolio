var Footer = React.createClass({

	render: function(){


		var footerIconStyle = {
			width: "100%"
		};

		var footerLeftStyle = {
			height: 400,
			color: "white"
		};

		var footerRightStyle = {
			height: 400
		};

		var footerImgWrapStyle = {
			position: "absolute",
			bottom: 0,
			right: 0
		};


		var contactStyle = {
			fontSize: 20,
			marginTop: 50,
			marginBottom: 12
		};

		var copyrightStyle = {
			position: "absolute",
			bottom: 20
		};

		var iconWrapStyle = {
			display: "inline-table",
			width: 20,
			marginRight: 10
		};

		var contactRowStyle = {
			marginBottom: 6
		};

		return(

		<div className="container">

			<div className="col-md-7" style={footerLeftStyle}>
				<div style={contactStyle}>Contact</div>
				
				<div style={contactRowStyle}>
					<div style={iconWrapStyle}><img src="../img/footer-icon/email.png" style={footerIconStyle}/></div>
					<span>mw10104587@gmail.com</span>
				</div>
				
				<div style={contactRowStyle}>
					<div style={iconWrapStyle}><img src="../img/footer-icon/twitter.png" style={footerIconStyle} /></div>
					<span>@WangChiAn</span>
				</div>
				<div style={contactRowStyle}>
					<div style={iconWrapStyle}><img src="../img/footer-icon/facebook.png" style={footerIconStyle} /></div>
					<span>mw10104587</span>
				</div>

				<div style={copyrightStyle}>© 2015 | Chi-An Wang</div>

			</div>

			<div className="col-md-5" style={footerRightStyle}>
				<div style={footerImgWrapStyle}><img src="../img/footer-img.png" /></div>
			</div>

		</div>

		);

	}

});

ReactDOM.render(<Footer />, document.getElementById("footer"));