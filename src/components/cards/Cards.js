import { ToastContainer } from "react-toastify"
export const Cards = (props) => {

  return (

    <div className="card" key={props.res.id}>
      <div className="card-top">
        <div className="card-image-container">
          <i className='fas fa-user-circle' style={{ fontSize: 50 }} />
        </div>
        <div className="card-top-contents">
          <h5 className="cards-title">EmployeeId: {props.res.employeeId}</h5>
          <p className="card-text">{props.res.leaveType} - {props.res.noOfDays} Days</p>
        </div>
      </div>
      <div className="card-body">
        <a className="card-link" href="/"> LeaveId: {props.res.leaveId}</a>
        <p className="card-description">{props.res.status}</p>
        <button type="submit" className="reg btn btn-block btn-primary" data-toggle="modal" data-target="#myModal" onClick={() => props.onFormSubmitHR(props.res)}> Approve </button>
        <button type="submit" className="reg btn btn-block btn-primary" >Check Medical Report</button>
      </div>
      <ToastContainer />
    </div>
  )
}