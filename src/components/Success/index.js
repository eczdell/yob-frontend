
import './index.css';


function Success() {
	return (
		<>
			<div class="text-center">
				{/* <!-- Button HTML (to Trigger Modal) --> */}
				<a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Open Success Modal</a>
			</div>

			{/* <!-- Modal HTML --> */}
			<div id="myModal" class="modal fade">
				<div class="modal-dialog modal-confirm">
					<div class="modal-content">
						<div class="modal-header">
							<div class="icon-box">
								<i class="material-icons">&#xE876;</i>
							</div>
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
						<div class="modal-body text-center">
							<h4>Great!</h4>
							<p>Your account has been created successfully.</p>
							<button class="btn btn-success" data-dismiss="modal"><span>Start Exploring</span> <i class="material-icons">&#xE5C8;</i></button>
						</div>
					</div>
				</div>
			</div>

		</>
	)

};

export default Success;