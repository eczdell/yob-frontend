import React from 'react';


export default () => (
<>
<nav class="navbar navbar-default">
    <div class="navbar-header">
      <a class="navbar-brand" href="/"><i class="fa fa-cube"></i><b>YOB</b></a>
      <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
        <span class="navbar-toggler-icon"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div id="navbarCollapse" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/counter">Counter</a></li>
        <li><a href="/driver">Driver</a></li>
        <li><a href="/route">Route</a></li>
        <li><a href="/vehicle">Vehicle</a></li>
        <li class="dropdown">
          <a data-toggle="dropdown" class="dropdown-toggle" href="#">Dropdown <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="/booking">Booking</a></li>
            <li><a href="#">Opt2</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form form-inline">
        <div class="input-group search-box">
          <input type="text" id="search" class="form-control" placeholder="Search by Name"/>
          <span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
        </div>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" class="notifications"><i class="fa fa-bell-o"></i><span class="badge">1</span></a></li>
        <li><a href="#" class="messages"><i class="fa fa-envelope-o"></i><span class="badge">10</span></a></li>
        <li class="dropdown">
          <a href="#" data-toggle="dropdown" class="dropdown-toggle user-action"><img
              src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> YOB <b
              class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="/profile"><i class="fa fa-user-o"></i> Profile</a></li>
            {/* <li><a href="#"><i class="fa fa-calendar-o"></i> Calendar</a></li> */}
            <li><a href="/booking"><i class="fa fa-taxi"></i> Booking</a></li>
            <li><a href="/settings"><i class="fa fa-sliders"></i> Settings</a></li>
            <li class="divider"></li>
            <li><a href="/logout"><i class="material-icons">&#xE8AC;</i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</>
);

