
import './index.css';


function Vehicle() {
    return (
        <div class="main-body">
            <div >
                <div >
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h2>Manage <b>Vehicles</b></h2>
                                </div>
                                <div class="col-xs-6">
                                    <a href="#addVehicleModal" class="btn btn-success" data-toggle="modal"><i
                                        class="material-icons">&#xE147;</i> <span>Add New Vehicle</span></a>
                                    <a href="#deleteVehicleModal" class="btn btn-danger" data-toggle="modal"><i
                                        class="material-icons">&#xE15C;</i> <span>Delete</span></a>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Name</th>
                                    <th>Owner</th>
                                    <th>Registered Date</th>
                                    <th>Type</th>
                                    <th>Counter</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="Vehicle" name="options[]" value="1" />
                                            <label for="checkbox1"></label>
                                        </span>
                                    </td>
                                    <td>Vehicle </td>
                                    <td>Owner </td>
                                    <td>Registered_date </td>
                                    <td>Vehicle_type </td>
                                    <td>Counter </td>
                                    <td>Status </td>
                                    <td>
                                        <a href="#editVehicleModal" class="edit" data-toggle="modal"><i class="material-icons"
                                            data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="/frontend/Vehicle/delete/Id}}" class="delete" data-toggle="modal"><i class="material-icons"
                                            data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="checkbox3" name="options[]" value="1" />
                                            <label for="checkbox3"></label>
                                        </span>
                                    </td>
                                    <td>Maria Anders</td>
                                    <td>mariaanders@mail.com</td>
                                    <td>25, rue Lauriston, Paris, France</td>
                                    <td>(503) 555-9931</td>
                                    <td>(503) 555-9931</td>
                                    <td>Pending</td>
                                    <td>
                                        <a href="#editVehicleModal" class="edit" data-toggle="modal"><i class="material-icons"
                                            data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteVehicleModal" class="delete" data-toggle="modal"><i class="material-icons"
                                            data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="clearfix">
                            <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul class="pagination">
                                <li class="page-item disabled"><a href="#">Previous</a></li>
                                <li class="page-item"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item active"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">4</a></li>
                                <li class="page-item"><a href="#" class="page-link">5</a></li>
                                <li class="page-item"><a href="#" class="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Edit Modal HTML --> */}
            <div id="addVehicleModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="/frontend/Vehicle/register" method="POST" >
                            <div class="modal-header">
                                <h4 class="modal-title">Add Vehicle</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Vehicle</label>
                                    <input type="text" name="Vehicle" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>Owner</label>
                                    <input type="text" name="owner" class="form-control" required />
                                </div>


                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Vehicle Type</label>
                                    <select class="form-control" name="type" id="exampleFormControlSelect1">
                                        <option value="Sumo">Sumo</option>
                                        <option value="Bike">Bike</option>
                                        <option value="Taxi">Taxi</option>
                                        <option value="Scarpio">Scarpio</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Counter</label>
                                    <input type="text" class="form-control" name="counter" value="sunaulo" required />
                                </div>

                                <div class="form-group">
                                    <label>Status</label>
                                    <input type="text" class="form-control" name="status" value="queue" required />
                                </div>

                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" class="btn btn-success" value="Add" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}
            <div id="editVehicleModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Vehicle</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <textarea class="form-control" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" class="form-control" required />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" class="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Delete Modal HTML --> */}
            <div id="deleteVehicleModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="/frontend/Vehicle/delete/Id}}" method="GET">
                            <div class="modal-header">
                                <h4 class="modal-title">Delete Vehicle</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p class="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" class="btn btn-danger" value="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )

};

export default Vehicle;